//Parte 1 -Array simples
let maquiagens = [
  "Base",
  "Corretivo",
  "Pó compacto",
  "Pó Solto",
  "Blush líquido",
  "Bronzer",
  "Iluminador cremoso",
  "Primer",
  "Paleta de sombras",
  "Delineador em gel",
  "Máscara de cílios",
  "Batom",
  "Gloss",
  "Lápis de olho",
  "Lápis de sobrancelha",
  "Fixador de maquiagem",
  "BB Cream",
  "Bruma fixadora",
  "Contorno",
  "Paleta de sombras com glitter",
  "Lenço demaquilante",
  "Hidratante"
];

// RESPONDENDO AS PERGUNTAS
// (Utilizado o console.log apenas para a visualização dos resultados e validar a execução da atividade)
//A) Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log(maquiagens[0]);   // Base
console.log(maquiagens[7]);   // Primer
console.log(maquiagens[11]);  // Batom
console.log(maquiagens[15]);  // Fixador de maquiagem
console.log(maquiagens[18]);  // Contorno
console.log(maquiagens[20]);  // Lenço demaquilante

// B) Qual elemento está na penúltima e última posição?
console.log(maquiagens[maquiagens.length - 2]); // Lenço demaquilante
console.log(maquiagens[maquiagens.length - 1]); // Hidratante

//C) Quantos elementos existem no array?
console.log(maquiagens.length); // R= 22 elementos.

//D) Adicione um novo elemento ao final do array
maquiagens.push("Esponja de maquiagem");
for (let i = 0; i < maquiagens.length; i++) {
  console.log(maquiagens[i]); // Elemento adicionado usando Push.
}
