/*
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor1, valor2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
         escreval("Digite dois valores para somar.")
         escreva("Digite o primeiro valor: ")
         leia(valor1)
         escreva("Digite o segundo valor: ")
         leia(valor2)
         escreval("O resultado é: ", (valor1 + valor2))
         escreval("Deseja sair? Digite Sim ou Não: ")
         leia(sairLoop)
   ate sairLoop <> "Não" or "não"


Fimalgoritmo
*/

function acaoBotao(){
    var sairLoop, valor1, valor2;

    do{
        valor1 = prompt("Digite o primeiro valor:");
        valor2 = prompt("Digite o segundo valor:");
        document.getElementById("paragrafo").innerText = "O resultado é: " + (parseInt(valor1) + parseInt(valor2));
        sairLoop = prompt("Deseja sair? Digite Sim ou Não")
    }while(sairLoop != "Não")
}    