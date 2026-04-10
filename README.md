# Catálogo de Produtos

## Descrição do Sistema

Esta é uma API RESTful desenvolvida em **Node.js** para o gerenciamento de um catálogo de produtos. O sistema permite realizar operações completas de CRUD (Criação, Leitura, Atualização e Remoção), organização por categorias, controle de estoque e ordenação de preços.

O projeto foi construído seguindo uma **arquitetura em camadas**, garantindo a separação de responsabilidades entre lógica de negócio, persistência de dados e controle de rotas. Acompanha uma interface **Frontend responsiva** integrada para interação direta com os dados.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, JavaScript.
- **Frontend:** HTML5, CSS3, JavaScript.
- **Persistência:** Arrays em memória (Simulação de Banco de Dados).

## Arquitetura do Projeto

O projeto segue o padrão de **arquitetura em camadas**, promovendo facilidade de manutenção e escalabilidade.

/
├── controller/ → Recebe as requisições HTTP e envia as respostas
├── dao/ → Data Access Object: Camada de manipulação direta dos dados
├── data/ → Arquivo de dados inicial (Mock data)
├── frontend/ → Interface do usuário (HTML, CSS, Script)
├── routes/ → Definição das rotas e caminhos da API
├── services/ → Regras de negócio e validações do sistema
└── index.js → Ponto de entrada da aplicação

## Funcionalidades e Rotas da API

A API suporta filtros inteligentes por categoria e ordenação por preço via Query Params.

| Método | Rota            | Descrição                      | Parâmetros (Query)   |
| ------ | --------------- | ------------------------------ | -------------------- |
| GET    | `/produtos`     | Listar todos os produtos       | `categoria`, `ordem` |
| GET    | `/produtos/:id` | Buscar um produto pelo ID      | -                    |
| POST   | `/produtos`     | Cadastrar novo produto         | -                    |
| PUT    | `/produtos/:id` | Atualizar produto existente    | -                    |
| DELETE | `/produtos/:id` | Remover um produto do catálogo | -                    |

## Interface

O sistema conta com um dashboard intuitivo desenvolvido para facilitar a gestão do catálogo:

- **Busca Instantânea:** Filtro dinâmico que permite localizar produtos por nome em tempo real, integrando-se aos critérios de categoria e preço.
- **Interatividade Dinâmica:** Gerenciamento ágil através de modais para edição de dados e diálogos de confirmação, garantindo maior segurança em operações de exclusão.
- **Manipulação Eficiente do DOM:** Atualização automática da listagem de produtos sem a necessidade de recarregar a página após operações de CRUD.

## Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone [https://github.com/adr0ude/catalogo-produtos](https://github.com/adr0ude/catalogo-produtos)
cd catalogo-produtos
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Executar o servidor

```bash
npm start
```

### 4️⃣ Acessar o Frontend

```bash
cd frontend
python -m http.server 8000
```

## Equipe

Este projeto foi desenvolvido pelos seguintes discentes para a disciplina de **Desenvolvimento Web**:

- João Felype Morais Vieira
- Luís Guilherme Ferreira da Costa
- Maria Eduarda Araujo Sales
- Pedro Henrique Silveira Gomes Sabi
- Wellison de Oliveira Sousa
