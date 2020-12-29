import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

// Cotrollers
import ProductsController from './controllers/ProductsController';
import UploadController from './controllers/UploadController';
import UsersController from './controllers/UsersController';

const routes = Router();
const uploads = multer(uploadConfig);

routes.get('/users', UsersController.index);
routes.post('/usersCreate', UsersController.create);
routes.post('/usersAuthenticate', UsersController.usersAuthenticate);
routes.post('/usersTokenAuthenticate', UsersController.usersTokenAuthenticate);

routes.get('/products', ProductsController.index);
routes.get('/productsUnical/:id', ProductsController.showUnical);
routes.get('/productsDetail/:id', ProductsController.showDetail);
routes.get('/products/:group', ProductsController.showGroup);
routes.get('/products/:group/:category', ProductsController.showCategory);
routes.post('/productsCreate', ProductsController.create);

routes.post('/uploads', uploads.single('arquives'), UploadController.upload);

export default routes;