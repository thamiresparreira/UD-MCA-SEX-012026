//Parte 3 - Array de Objetos
let produtos = [
  { nome: "Base - Shiseido", preco: 378.90, estoque: 5 },
  { nome: "Corretivo - Payot", preco: 19.99, estoque: 15 },
  { nome: "Pó compacto - O Boticário", preco: 39.90, estoque: 15 },
  { nome: "Blush - Avon Ana Castela", preco: 69.90, estoque: 25 },
  { nome: "Bronzer - Mascavo", preco: 109.90, estoque: 180 },
  { nome: "Paleta de Iluminador", preco: 28.00, estoque: 22 },
  { nome: "Sombras Ruby Rose", preco: 18.00, estoque: 3 },
  { nome: "Delineador", preco: 69.90, estoque: 7 },
  { nome: "Gloss - Avon Ana Castela", preco: 35.00, estoque: 22 },
  { nome: "Máscara de cílios", preco: 20.00, estoque: 155 }
];

// RESPONDENDO AS PERGUNTAS
// (Utilizado o console.log apenas para a visualização dos resultados e validar a execução da atividade)
//A) Qual é o preço do segundo objeto?
console.log(produtos[1].preco); // R$ 19,99

//B) Qual é o nome do terceiro objeto?
console.log(produtos[2].nome); // Pó compacto - O Boticário

//C) Quantos itens existem no array?
console.log(produtos.length); // USando o length, mostrou que existem 10.

//D) Imprima o nome de todos os objetos
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome); // Imprimido.
}

//E) Alguma quantidade total de estoque de todos os objetos
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque; // Quantidade total de todos itens de maquiagem acima é: 449.
}

console.log(totalEstoque);

//F) Qual objeto possui maior estoque?
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}

console.log(maiorEstoque); //O produto que mais possui estoque é o Bronzer da Mascavo.