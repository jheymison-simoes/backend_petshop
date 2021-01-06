"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Products_1 = __importDefault(require("../models/Products"));
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const fastcsv = __importStar(require("fast-csv"));
exports.default = {
    async upload(request, response) {
        await typeorm_1.getConnection()
            .createQueryBuilder()
            .delete()
            .from("products")
            .execute();
        const requestFiles = request.file;
        const fileName = requestFiles.filename;
        console.log(fileName);
        let stream = fs.createReadStream(path_1.default.join(__dirname, '..', '..', 'uploads', fileName));
        let csvData = [];
        let csvStream = await fastcsv
            .parse()
            .on("data", function (data) {
            csvData.push(data);
        })
            .on("end", function () {
            // remove the first line: header
            csvData.shift();
            var re = /\s*;\s*/;
            var sizeCsv = Object.keys(csvData).length;
            const arrayDates = [];
            for (let i = 0; i < sizeCsv; i++) {
                var stringCsv = csvData[i].toString();
                var dados = stringCsv.split(re);
                arrayDates.push(dados);
            }
            var data = {};
            const newArray = [];
            let j = 0;
            console.log(arrayDates.length);
            for (let i = 0; i < arrayDates.length; i++) {
                for (j = 0; j < 6; j++) {
                    console.log(arrayDates[i][j]);
                    data = {
                        description: arrayDates[i][0],
                        amount: arrayDates[i][1],
                        value: arrayDates[i][2].replace(",", "."),
                        image: arrayDates[i][3],
                        group: arrayDates[i][4],
                        category: arrayDates[i][5]
                    };
                }
                newArray.push(data);
            }
            const productsRepository = typeorm_1.getRepository(Products_1.default);
            const productsCreate = productsRepository.create(newArray);
            productsRepository.save(productsCreate);
            if (productsCreate) {
                return response.status(201).json({ message: "Upload Realizado com Sucesso!" });
            }
            else {
                return response.status(404).json({ message: "Upload não realizado!" });
            }
        });
        stream.pipe(csvStream);
    }
};
