import express from 'express';
import { getAllPosts, createPosts }  from '../src/controllers/postControllers.js'
// import { validarPost } from "../middleware/validarPost.js";

export const router = express.Router();
//Agrego las rutas, ingreso middleware en mi ruta post para validar datos.
router.get('/posts' , getAllPosts)
router.post('/posts', createPosts)

export default router;