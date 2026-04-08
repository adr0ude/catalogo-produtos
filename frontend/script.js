const API = "http://localhost:3000/produtos";

// GET - Exibir produtos
async function carregarProdutos() {
    const res = await fetch(API);
    const produtos = await res.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    produtos.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${p.nome} - R$ ${p.preco}
            <button onclick="deletarProduto(${p.id})">Excluir</button>
            <button onclick="editarProduto(${p.id})">Editar</button>
        `;
        lista.appendChild(li);
    });
}

// POST - Criar produto
document.getElementById("formProduto").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const estoque = Number(document.getElementById("estoque").value);
    
    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, preco, categoria, estoque })
    });

    carregarProdutos();
});

// DELETE - Apagar produto
async function deletarProduto(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });
    
    carregarProdutos();
}

// PUT - Editar produto
async function editarProduto(id) {

}

carregarProdutos();