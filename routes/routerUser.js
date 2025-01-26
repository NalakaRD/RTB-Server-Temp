import express from 'express';
import { isAuthentic } from '../middleware/midwIsAuthentic.js'
import * as contrlUser from '../controllers/contrlUser.js'
import { notFound } from '../middleware/midwAppNotFound.js';

//api/user/
export const routerUser = express.Router();

routerUser.get('/email/verify', contrlUser.emailVerificationCode);

routerUser.post('/profile', contrlUser.verifyEmailAndCreateProfile);

routerUser.post('/login', contrlUser.userLogin);

routerUser.delete('/logout', contrlUser.userLogout);

//NOT FOUND - /api/user/????
routerUser.use(notFound);