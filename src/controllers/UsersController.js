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
const Users_1 = __importDefault(require("../models/Users"));
const md5_1 = __importDefault(require("md5"));
const Yup = __importStar(require("yup"));
exports.default = {
    async index(request, response) {
        const usersRepositorry = typeorm_1.getRepository(Users_1.default);
        const usersList = await usersRepositorry.find();
        return response.status(201).json(usersList);
    },
    async usersAuthenticate(request, response) {
        const { users, key, } = request.body;
        const usersRepositorry = typeorm_1.getRepository(Users_1.default);
        const hash = md5_1.default(key);
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
            };
            return data;
        });
        if (usersAuthenticate.length > 0) {
            return response.status(200).json({ message: "Usuário pode Logar!", result });
        }
        else {
            return response.status(400).json({ message: "Usuário Não Encontrado" });
        }
    },
    async usersTokenAuthenticate(request, response) {
        const { users, token, } = request.body;
        const usersRepositorry = typeorm_1.getRepository(Users_1.default);
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
            };
            return data;
        });
        if (usersTokenAuthenticate.length > 0) {
            return response.status(200).json({ message: true, result });
        }
        else {
            return response.status(400).json({ message: false });
        }
    },
    async create(request, response) {
        const { users, key, } = request.body;
        const usersRepositorry = typeorm_1.getRepository(Users_1.default);
        const usersUnical = await usersRepositorry.find({
            where: {
                users: users
            },
        });
        if (usersUnical.length > 0) {
            return response.status(400).json({ message: "Usuário Existente!" });
        }
        else {
            const hash = md5_1.default(key);
            const token = md5_1.default(users) + md5_1.default(key) + md5_1.default(users) + md5_1.default(key) + md5_1.default(key);
            const hashToken = md5_1.default(token) + "dabcsosdgn" + md5_1.default(token + users);
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
            if (usersCreate) {
                return response.status(201).json(result);
            }
            else {
                return response.status(404).json({ message: "Não foi Criado!" });
            }
        }
    }
};
