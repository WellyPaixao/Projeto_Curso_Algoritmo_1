var nome, nota1, nota2, media, passou;

passou = false;
nome = prompt("Digite o nome do aluno");
nota1 = prompt("Digite a nota 1 do aluno:");
nota2 = prompt("Digite a nota 2 do aluno:");

media = (parseInt(nota1) + parseInt(nota2))/2;

if(media >= 5)
    passou = true;

if(passou)
    alert("Aprovado " + nome + ", Sua media foi: " + media);
else
    alert("Reprovado " + nome + ", Sua media foi: " + media);