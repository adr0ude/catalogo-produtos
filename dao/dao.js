import { products } from "../data/productData.js";

let produtos = products;

export const listarTodos = (categoria, ordem) => {
    let resultado = [...produtos];

    if (categoria) {
        resultado = resultado.filter(p => 
            p.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }

    if (ordem === 'asc') {
        resultado.sort((a, b) => a.preco - b.preco);
    } else if (ordem === 'desc') {
        resultado.sort((a, b) => b.preco - a.preco);
    }

    return resultado;
}

export const buscarPorId = (id) => {
    return produtos.find(p => p.id == id);
}

export const inserir = (produto) => {
    produtos.push(produto)
    return produto;
}

export const atualizar = (id, dados) => {
    produtos = produtos.map(p =>
        p.id == id ? { ...p, ...dados, id: Number(id)} : p
    );

    return produtos.find(p => p.id == id);
}

export const remover = (id) => {
    produtos = produtos.filter(p => p.id != id);
}