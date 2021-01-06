"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("./config/upload"));
// Cotrollers
const ProductsController_1 = __importDefault(require("./controllers/ProductsController"));
const UploadController_1 = __importDefault(require("./controllers/UploadController"));
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const routes = express_1.Router();
const uploads = multer_1.default(upload_1.default);
routes.get('/users', UsersController_1.default.index);
routes.post('/usersCreate', UsersController_1.default.create);
routes.post('/usersAuthenticate', UsersController_1.default.usersAuthenticate);
routes.post('/usersTokenAuthenticate', UsersController_1.default.usersTokenAuthenticate);
routes.get('/products', ProductsController_1.default.index);
routes.get('/productsUnical/:id', ProductsController_1.default.showUnical);
routes.get('/productsDetail/:id', ProductsController_1.default.showDetail);
routes.get('/products/:group', ProductsController_1.default.showGroup);
routes.get('/products/:group/:category', ProductsController_1.default.showCategory);
routes.post('/productsCreate', ProductsController_1.default.create);
routes.post('/uploads', uploads.single('arquives'), UploadController_1.default.upload);
exports.default = routes;
