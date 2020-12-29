import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';
import md5 from 'md5';
import * as Yup from 'yup';

export default {
    async index(request: Request, response: Response){
        const usersRepositorry = getRepository(Users);

        const usersList = await usersRepositorry.find();

        return response.status(201).json(usersList);
    },

    async usersAuthenticate(request: Request, response: Response) {
        const {        
            users,
            key,
        } = request.body;
        
        const usersRepositorry = getRepository(Users);
        const hash = md5(key);
        const usersAuthenticate = await usersRepositorry.find({
            where: { 
                users: users,
                key: hash,
            },
        });

        const result = usersAuthenticate.map(value => {
            const data = {
                user: value.users,
                token: value.token
            }
            return data;
        });

        if(usersAuthenticate.length > 0){
            return response.status(200).json({ message: "Usuário pode Logar!", result });
        } else {
            return response.status(400).json({ message: "Usuário Não Encontrado" });
        }        
    },

    async usersTokenAuthenticate(request: Request, response: Response) {
        const {        
            users,
            token,
        } = request.body;
        
        const usersRepositorry = getRepository(Users);
        const usersTokenAuthenticate = await usersRepositorry.find({
            where: { 
                users: users,
                token: token,
            },
        });

        const result = usersTokenAuthenticate.map(value => {
            const data = {
                user: value.users,
                token: value.token
            }

            return data;
        });

        if(usersTokenAuthenticate.length > 0){
            return response.status(200).json({ message: true, result });
        } else {
            return response.status(400).json({ message: false });
        }        
    },

    async create(request: Request, response: Response){
        const {        
            users,
            key,
        } = request.body;

        const usersRepositorry = getRepository(Users);
        const usersUnical = await usersRepositorry.find({
            where: { 
                users: users
            },
        });

        if(usersUnical.length > 0){
            return response.status(400).json({ message: "Usuário Existente!" });
        } else {
            
            const hash = md5(key);
            const token = md5(users)+md5(key)+md5(users)+md5(key)+md5(key);
            const hashToken = md5(token)+"dabcsosdgn"+md5(token+users);
            const data = {
                users,
                key: hash,
                token: hashToken
            };

            const schema = Yup.object().shape({
                users: Yup.string().required(),
                key: Yup.string().required(),
                token: Yup.string().required(),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            const usersCreate = usersRepositorry.create(data);
            await usersRepositorry.save(usersCreate);

            const result = {
                user: usersCreate.users,
                token: usersCreate.token
            };

            if(usersCreate){
                return response.status(201).json(result);
            } else {
                return response.status(404).json({ message: "Não foi Criado!" });
            }
        }

        

        
        
    }

};