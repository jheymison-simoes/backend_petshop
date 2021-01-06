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
const products_view_1 = __importDefault(require("../views/products_view"));
const Yup = __importStar(require("yup"));
exports.default = {
    async index(request, response) {
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const productsList = await productsRepository.find();
        return response.status(201).json(products_view_1.default.renderMany(productsList));
    },
    async showDetail(request, response) {
        const { id } = request.params;
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const productsListShowDetail = await productsRepository.find({
            where: {
                id: id,
            }
        });
        if (productsListShowDetail.length > 0) {
            return response.status(201).json(productsListShowDetail);
        }
        else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },
    async showUnical(request, response) {
        const { id } = request.params;
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const productsListShowUnical = await productsRepository.find({
            select: ["id", "amount"],
            where: {
                id: id,
            }
        });
        if (productsListShowUnical.length > 0) {
            return response.status(201).json(productsListShowUnical);
        }
        else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },
    async showGroup(request, response) {
        const { group } = request.params;
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const productsListShowGroup = await productsRepository.find({
            where: {
                amount: typeorm_1.MoreThan(2),
                group: group
            }
        });
        if (productsListShowGroup.length > 0) {
            return response.status(201).json(productsListShowGroup);
        }
        else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },
    async showCategory(request, response) {
        const { group, category } = request.params;
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const productsListShowCategory = await productsRepository.find({
            where: {
                amount: typeorm_1.MoreThan(0),
                group: group,
                category: category
            }
        });
        if (productsListShowCategory.length > 0) {
            return response.status(201).json(productsListShowCategory);
        }
        else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },
    async create(request, response) {
        const { description, amount, value, image, group, category } = request.body;
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const data = {
            description,
            amount,
            value,
            image,
            group,
            category
        };
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            amount: Yup.number().required(),
            value: Yup.number().required(),
            image: Yup.string().required(),
            group: Yup.string().required(),
            category: Yup.string().required()
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const productsCreate = productsRepository.create(data);
        await productsRepository.save(productsCreate);
        if (productsCreate) {
            return response.status(201).json(productsCreate);
        }
        else {
            return response.status(404).json({ message: "Não foi Criado!" });
        }
    }
};
