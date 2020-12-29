import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import Products from '../models/Products';
import path from 'path';
import * as fs from 'fs';
import * as fastcsv from 'fast-csv';


export default {

    async upload(request: Request, response: Response) {

        await getConnection()
            .createQueryBuilder()
            .delete()
            .from("products")
            .execute();

        const requestFiles = request.file;
        const fileName = requestFiles.filename;
        console.log(fileName);

        let stream = fs.createReadStream(path.join(__dirname, '..', '..', 'uploads', fileName));
        let csvData: any = [];
        let csvStream = await fastcsv
            .parse()
            .on("data", function (data) {
                csvData.push(data);
            })
            .on("end", function () {
                // remove the first line: header
                csvData.shift();

                var re = /\s*;\s*/;
                
                var sizeCsv = Object.keys(csvData).length

                const arrayDates: any = [];

                for(let i = 0; i < sizeCsv; i++){
                    var stringCsv = csvData[i].toString();
                    var dados = stringCsv.split(re);
                    arrayDates.push(dados);
                }

                var data = {};
                const newArray: any = [];
                let j = 0;
                console.log(arrayDates.length);
                for(let i = 0; i < arrayDates.length; i++){
                    for(j = 0; j < 6; j++){
                        console.log(arrayDates[i][j]);
                        data = {
                            description: arrayDates[i][0],
                            amount: arrayDates[i][1],
                            value: arrayDates[i][2].replace(",", "."),
                            image: arrayDates[i][3],
                            group: arrayDates[i][4],
                            category: arrayDates[i][5]
                        }
                    }
                    newArray.push(data);
                }
                
                const productsRepository = getRepository(Products);
                const productsCreate = productsRepository.create(newArray);
                productsRepository.save(productsCreate);

                if(productsCreate){
                    return response.status(201).json({ message: "Upload Realizado com Sucesso!" });
                } else {
                    return response.status(404).json({ message: "Upload não realizado!" });
                }
            });
        stream.pipe(csvStream);
    }

}