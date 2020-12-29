import { Request, Response } from 'express';
import { getRepository, MoreThan } from 'typeorm';
import Products from '../models/Products';
import productsView from '../views/products_view';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response){
        const productsRepository = getRepository(Products);

        const productsList = await productsRepository.find();

        return response.status(201).json(productsView.renderMany(productsList));
    },

    async showDetail(request: Request, response: Response){

        const { id } = request.params;

        const productsRepository = getRepository(Products);

        const productsListShowDetail = await productsRepository.find({
            where: {  
                id: id,
            }
        })

        if(productsListShowDetail.length > 0){
            return response.status(201).json(productsListShowDetail);
        } else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },

    async showUnical(request: Request, response: Response){

        const { id } = request.params;

        const productsRepository = getRepository(Products);

        const productsListShowUnical = await productsRepository.find({
            select: ["id","amount"],
            where: {  
                id: id,
            }
        })

        if(productsListShowUnical.length > 0){
            return response.status(201).json(productsListShowUnical);
        } else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },

    async showGroup(request: Request, response: Response){

        const { group } = request.params;

        const productsRepository = getRepository(Products);

        const productsListShowGroup = await productsRepository.find({
            where: { 
                amount: MoreThan(2), 
                group: group 
            }
        });

        if(productsListShowGroup.length > 0){
            return response.status(201).json(productsListShowGroup);
        } else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },

    async showCategory(request: Request, response: Response){

        const { group, category } = request.params;

        const productsRepository = getRepository(Products);

        const productsListShowCategory = await productsRepository.find({
            where: { 
                amount: MoreThan(0), 
                group: group, 
                category: category 
            }
        });

        if(productsListShowCategory.length > 0){
            return response.status(201).json(productsListShowCategory);
        } else {
            return response.status(404).json({ message: "Nenhum Encontrado" });
        }
    },

    async create(request: Request, response: Response){
        const {        
            description,
            amount,
            value,
            image,
            group,
            category
        } = request.body;
    
        const productsRepository = getRepository(Products);

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
    
        if(productsCreate){
            return response.status(201).json(productsCreate);
        } else {
            return response.status(404).json({ message: "Não foi Criado!" });
        }
    }

};