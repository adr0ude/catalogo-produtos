import * as service from "../services/services.js";

export const listar = (req, res) => {
    const { categoria, ordem } = req.query;
    const produtos = service.listar(categoria, ordem);
    res.json(produtos);
};

export const buscarPorId = (req, res) => {
    try {
        const id = req.params.id;
        const produto = service.buscarPorId(id);
        res.json(produto);
    } catch (erro) {
        res.status(404).json({erro: erro.message});
    }
}

export const criar = (req, res) => {
    try {
        const produto = service.criar(req.body);
        res.status(201).json(produto);
    } catch (erro) {
        res.status(400).json({erro: erro.message});
    }
}

export const atualizar = (req, res) => {
    try {
        const id = req.params.id;
        const dados = req.body;

        const produtoAtualizado = service.atualizar(id, dados);
        res.json(produtoAtualizado);
    } catch (erro) {
        res.status(404).json({erro: erro.message});
    }
}

export const remover = (req, res) => {
    try {
        service.remover(req.params.id);
        res.json({messagem: "Produto removido"});
    } catch (erro) {
        res.status(404).json({erro: erro.message});
    }
}