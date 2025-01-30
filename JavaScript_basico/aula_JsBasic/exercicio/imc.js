// Cálculo simples de IMC + Dados pessoais
const nome = "Marcos";
let idade = 45;
let peso_kg = 88;
let altura_em_metro = 1.77;

//Cálculo imc:
let valor_imc = peso_kg / altura_em_metro**2;

//Exibição dos dados:
console.log(
    "Nome do paciente: " + nome +
    "\nIdade: " + idade +
    "\nNascimento: " + (2025 - idade) +
    "\nPeso: " + peso_kg +
    "\nAltura: " + altura_em_metro
);

//Para usar a variável dentro de um texto, precisa utilizar crase -> `
console.log(`O IMC Do paciente ${nome} é de: `+ valor_imc);