/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite um nome")
   leia(nome)
   escreval("Digite um numero")
   leia(numero)
   
   escreval(nome, ":" , numero, 15)

Fimalgoritmo
*/

var nome, numero;

nome = prompt("Digite um nome:");
numero = prompt("Digite um numero");

document.getElementById("paragrafo").innerText = nome + " : " + numero;