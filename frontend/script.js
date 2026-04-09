const API = "http://localhost:3000/produtos";

// Carregar Produtos
async function carregarProdutos() {
    const res = await fetch(API);
    const produtos = await res.json();
    const lista = document.getElementById("lista");

    const buscaInput = document.getElementById("busca");
    const filtroCategoria = document.getElementById("filtroCategoria");
    const ordenarPreco = document.getElementById("ordenarPreco");
    
    const categoriaAtual = filtroCategoria.value;
    const categorias = [...new Set(produtos.map(p => p.categoria))];

    filtroCategoria.innerHTML = `<option value="">Todas categorias</option>`;

    categorias.forEach(c => {
        const option = document.createElement("option");
        option.value = c;
        option.textContent = c;

        if (c === categoriaAtual) {
            option.selected = true;
        }

        filtroCategoria.appendChild(option);
    });

    
    lista.innerHTML = "";

    let filtrados = [...produtos];

    const busca = buscaInput?.value.toLowerCase() || "";
    const categoria = filtroCategoria.value;
    const ordem = ordenarPreco.value;

    if (busca) {
        filtrados = filtrados.filter(p => 
            p.nome.toLowerCase().includes(busca)
        );
    }

    if (categoria) {
        filtrados = filtrados.filter(p =>
            p.categoria === categoria
        );
    }

    if (ordem === "asc") {
        filtrados.sort((a, b) => a.preco - b.preco);
    } else if (ordem === "desc") {
        filtrados.sort((a, b) => b.preco - a.preco);
    }

    filtrados.forEach(p => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="card-content">
                <div class="info-principal">
                    <span class="categoria-label">${p.categoria}</span>
                    <h3 class="nome-produto">${p.nome}</h3>
                    <div class="detalhes-inferiores">
                        <div class="dado">
                            <span class="dado-titulo">ESTOQUE</span>
                            <span class="dado-valor">${p.estoque} unidades</span>
                        </div>
                    </div>
                </div>
                <div class="info-lateral">
                    <div class="preco-box">
                        <span class="dado-titulo">PREÇO UNITÁRIO</span>
                        <span class="preco-valor">R$ ${p.preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                    </div>
                    <div class="acoes">
                        <button class="btn-edit" onclick="editarProduto(${p.id})">Editar</button>
                        <button class="btn-del" onclick="deletarProduto(${p.id})">Excluir</button>
                    </div>
                </div>
            </div>
        `;
        lista.appendChild(li);
    });
}

// Criar Produto (POST)
document.getElementById("formProduto").addEventListener("submit", async (e) => {
    e.preventDefault();
    const produto = {
        nome: document.getElementById("nome").value,
        preco: Number(document.getElementById("preco").value),
        categoria: document.getElementById("categoria").value,
        estoque: Number(document.getElementById("estoque").value)
    };
    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    });
    e.target.reset();
    carregarProdutos();
});

// Deletar Produto
async function deletarProduto(id) {
    if (confirm("Deseja excluir?")) {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        carregarProdutos();
    }
}

// Modal Editar (PUT)
async function editarProduto(id) {
    const res = await fetch(`${API}/${id}`);
    const p = await res.json();
    document.getElementById("edit-id").value = p.id;
    document.getElementById("edit-nome").value = p.nome;
    document.getElementById("edit-preco").value = p.preco;
    document.getElementById("edit-categoria").value = p.categoria;
    document.getElementById("edit-estoque").value = p.estoque;
    document.getElementById("modalEditar").style.display = "block";
}

function fecharModal() { document.getElementById("modalEditar").style.display = "none"; }

document.getElementById("formEditar").addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.getElementById("edit-id").value;
    const atualizado = {
        nome: document.getElementById("edit-nome").value,
        preco: Number(document.getElementById("edit-preco").value),
        categoria: document.getElementById("edit-categoria").value,
        estoque: Number(document.getElementById("edit-estoque").value)
    };
    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(atualizado)
    });
    fecharModal();
    carregarProdutos();
});


// Exibir Produtos
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();

    document.getElementById("busca").addEventListener("input", carregarProdutos);
    document.getElementById("filtroCategoria").addEventListener("change", carregarProdutos);
    document.getElementById("ordenarPreco").addEventListener("change", carregarProdutos);
});