import * as dao from "../dao/dao.js";

export const listar = () => {
    return dao.listarTodos();
}

export const buscarPorId = (id) => {
    const produto = dao.buscarPorId(id);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }

    return produto;
}

export const criar = (dados) => {
    if (!dados.nome || !dados.preco) {
        throw new Error("Nome e preço são obrigatórios");
    }

    const novoId = dao.listarTodos().length > 0
        ? Math.max(...dao.listarTodos().map(p => p.id)) + 1
        : 1;

    const produto = {
        id: novoId,
        nome: dados.nome,
        preco: dados.preco,
        descricao: dados.descricao || "",
        categoria: dados.categoria || "",
        estoque: dados.estoque || 0
    };

    return dao.inserir(produto);
}

export const atualizar = (id, dados) => {
    const produto = dao.buscarPorId(id);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }

    return dao.atualizar(id, dados);
}

export const remover = (id) => {
    const produto = dao.buscarPorId(id);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }

    dao.remover(id);
}