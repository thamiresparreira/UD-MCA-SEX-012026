let produtos = [
    {nome: 'perfume', preco: 150.00, estoque: 7},
    {nome: 'celular' ,preco: 12500.00, estoque: 5},
    {nome: 'bolo', preco: 20.00, estoque: 5},
    {nome: 'coca-cola', preco:5.50, estoque: 2},
    {nome:'fogassa', preco:10.00, estoque: 1},
    {nome:'suco', preco:8.00, estoque: 2},
    {nome:'marmita', preco:35.00, estoque: 6},
    {nome:'cereja', preco:2.00, estoque:18},
    {nome:'cachaca', preco:30.00, estoque:12},
    {nome:'cerveja', preco:6.50, estoque:22},
    {nome:'energetico', preco:10.00, estoque:15},
];
console.log(produtos[3].preco);

console.log(produtos[4].nome);

console.log(produtos.length);

for(let i =0; i < produtos.length; i++){
    console.log(produtos[i].nome);
}

let totalestoque = 0;
for (let i = 0; i < produtos.length; i++) {
  totalestoque += produtos[i].estoque;
}

console.log(totalestoque);


let maiorestoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorestoque.estoque) {
    maiorestoque = produtos[i];
  }
}

console.log(maiorestoque);