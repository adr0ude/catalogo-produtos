import express from "express"

import * as productController from "../controller/productController.js";

const router = express.Router();

router.get('/', productController.listar);
router.get('/:id', productController.buscarPorId);

router.post('/', productController.criar);

router.put('/:id', productController.atualizar);

router.delete('/:id', productController.remover);

export default router;