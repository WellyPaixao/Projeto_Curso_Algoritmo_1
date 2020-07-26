function acaoBotao(){
    var valor1, valor2, resultado, operacao;
 
    valor1 = prompt("Digite o primeiro numero: ");
    operacao = prompt("Digite a operação Ex: + , - , * , /: ");
    valor2 = prompt("Digite o segundo numero: ");
 
    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2) 
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2) 
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2) 
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2) 
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}