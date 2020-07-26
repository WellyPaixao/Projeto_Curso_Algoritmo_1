/*
Var
// Seção de Declarações das variáveis 
   valor1, valor2, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o primeiro numero: ")
   leia(valor1)
   escreva("Escolha a operação Ex: + , - , * , /: ")
   leia(operacao)
   escreva("Digite o segundo numero: ")
   leia(valor2)
   
   se operacao = "+" entao
      resultado := valor1 + valor2
   senao
      se operacao = "-" entao
         resultado := valor1 - valor2
      senao
         se operacao = "*" entao
            resultado := valor1 * valor2
         senao
            se operacao = "/" entao
               resultado := valor1 / valor2
            fimse
         fimse
      fimse
   fimse

   escreva("O resultado da operação é :", resultado)


Fimalgoritmo
*/

function acaoBotao(){
   var valor1, valor2, resultado, operacao;

valor1 = prompt("Digite o primeiro numero: ");
operacao = prompt("Digite a operação Ex: + , - , * , /: ");
valor2 = prompt("Digite o segundo numero: ");

if (operacao == "+"){
   resultado = parseInt(valor1) + parseInt(valor2)
}else if(operacao == "-"){
   resultado = parseInt(valor1) - parseInt(valor2)   
}else if(operacao == "*"){
   resultado = parseInt(valor1) * parseInt(valor2)
}else if(operacao == "/"){
   resultado = parseInt(valor1) / parseInt(valor2)
}
document.getElementById("paragrafo").innerText = resultado
}