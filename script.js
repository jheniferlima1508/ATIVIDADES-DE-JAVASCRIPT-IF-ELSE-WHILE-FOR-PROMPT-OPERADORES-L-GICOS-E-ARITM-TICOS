//ESTRUTURAS CONDICIONAIS (if / else / else if)
//1.1
let idade = prompt("Por favor, informe sua idade:");
function verificaridade(idade){
     if (idade > 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }
}

//1.2
function verificarpositivoNegativo(numero){
    if (numero > 0) {
        alert("O número é positivo.");
    } else if (numero < 0) {
        alert("O número é negativo.");
    } else {
        alert("O número é zero.");
    }
}
//1.3
function verificarparouimpar(numero){
    if (numero % 2 == 0){
        alert("o numero é par.");
    }else{
        alert("o numero é impar.")
    }
}
//1.4
function calcularmedia(nota1,nota2){
    let media = (nota1 + nota2) / 2
    media = media.toFixed(1)
    if (media >= 7){
        alert ("Aprovado");
    }else if (media >= 5 && media <= 6.9){
        alert("Recuperação");
    }else{
        alert("Reprovado")
    }
}

//2.ESTRUTURAS DE REPETIÇÃO (while)
//2.1
let contador = 0
while(contador >= 0){
alert(contador);

contador
}
//2.2
function verificaridentidade(nomesalvo,senhasalva){
let tentativas = 1;
while (true){
    let nome = prompt("digite o seu nome");
    let senha = prompt("digite a sua senha");

    if(nome === nomesalvo && senha === senhasalva){
        alert("acesso permitido!! em" + tentativas + "tentativas")
        break;
    }else{
        alert("acesso negado!!")
        tentativas++
    }
}
}
//2.3
let soma = 0;
while (true){
    let Numero = Number(prompt("digite um numero"))
       if (Numero !== 0) {
        soma += Numero
    }else{
        alert(soma);
        break;
    }


}

//3. ESTRUTURAS DE REPETIÇÃO (for)
//3.1
function tabuada (numero){
    for(let multi = 0; multi <= 10; multi++){
        alert(`o valor ${numero} x ${multi} é: ${numero * multi}`)     
    }
}
//3.2
let somaPares = 0;
for (let valor = 0; valor <= 50; valor ++) {
    if(valor % 2 === 0){
        soma += valor
    } 
}
alert(soma) 
//3.3
const palavra = prompt("Digite uma palavra:");
let contadorVogais = 0;
const vogais = ['a', 'e', 'i', 'o', 'u'];
const palavraMinuscula = palavra.toLowerCase();
for (const caractere of palavraMinuscula) {
    if (vogais.includes(caractere)) {
        contadorVogais++;
    }
}
console.log(`A palavra '${palavra}' tem ${contadorVogais} vogais.`);
//3.4
const Nomes = [];
for (let i = 0; i < 5; i++) {
    const nome = prompt(`Digite o nome ${i + 1}:`);
    nomes.push(nome);
}
Nomes.sort();
console.log("Nomes em ordem alfabética:");
Nomes.forEach(nome_ordenado => {
    console.log(nome_ordenado);
});

//4. ENTRADA DE DADOS (prompt)
//4.1
const nome = prompt("Qual é o seu nome?");
const Idade = prompt("Qual é a sua idade?");
const cidade = prompt("Onde você mora?");
const mensagem = `Olá, ${nome}, você tem ${idade} anos e mora em ${cidade}.`;
console.log(mensagem);
alert(mensagem); 
//4.2
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b === 0) {
            return "Não é possível dividir por zero";
        }
        return a / b;
    }
};
console.log(`
Resultados:
Soma: ${calculadora.soma(num1, num2)}
Subtração: ${calculadora.subtracao(num1, num2)}
Multiplicação: ${calculadora.multiplicacao(num1, num2)}
Divisão: ${calculadora.divisao(num1, num2)}
`);

//5. OPERADORES ARITMÉTICOS
//5.1
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const numero3 = Number(prompt("Digite o terceiro número:"));
const media = (numero1 + numero2 + numero3) / 3;
console.log(`A média aritmética é: ${media}`);
alert(`A média aritmética é: ${media}`);
//5.2
const base = Number(prompt("Digite o valor da base do triângulo:"));
const altura = Number(prompt("Digite o valor da altura do triângulo:"));
const area = (base * altura) / 2;
console.log(`A área do triângulo é: ${area}`);
alert(`A área do triângulo é: ${area}`);
//5.3
const valorOriginal = Number(prompt("Digite o valor do produto (R$):"));
const percentualDesconto = Number(prompt("Digite o percentual de desconto (%):"));
const valorDesconto = valorOriginal * (percentualDesconto / 100);
const valorFinal = valorOriginal - valorDesconto;
console.log(`Valor do desconto: R$ ${valorDesconto}`);
console.log(`Valor final com desconto: R$ ${valorFinal}`);
alert(`Valor final com desconto: R$ ${valorFinal}`);

//6. OPERADORES LÓGICOS
//6.1
const IDade = Number(prompt("Qual é a sua idade?"));
const carteirinha = prompt("Você tem carteirinha de estudante? (S/N):");
if (IDade < 18 || carteirinha === 'S') {
    alert("Você pode entrar!");
} else {
    alert("Você NÃO pode entrar.");
}
//6.2
const Media = Number(prompt("Digite a média final do aluno (ex: 7.5):"));
const frequencia = Number(prompt("Digite a frequência do aluno (ex: 80 para 80%):"));
if (Media >= 7 && frequencia >= 75) {
    alert("O aluno está APROVADO.");
} else {
    alert("O aluno está REPROVADO.");
}
//6.3
const USUARIO_CORRETO = "admin";
const SENHA_CORRETA = "1234";
const usuarioDigitado = prompt("Usuário:");
const senhaDigitada = prompt("Senha:");
if (usuarioDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
    alert("Acesso concedido. Bem-vindo!");
} else {
    alert("Acesso negado.");
}

//7. DESAFIO INTEGRADOR
let alunos = []
while(true){
    let aluno = {
         nome : prompt(`Digite o nome do Aluno ${i + 1}:`),
         n1: Number(prompt(`Digite a Nota 1 de ${nome}:`)),
         n2 : Number(prompt(`Digite a Nota 2 de ${nome}:`)),
         n3 : Number(prompt(`Digite a Nota 3 de ${nome}:`)),
  
}
alunos.push(aluno)
}

console.log(`Média de ${nome}: ${mediaAluno.toFixed(2)} - Status: ${aprovado ? "APROVADO" : "REPROVADO"}`);
const alunosAprovados = alunos.filter(aluno => aluno.aprovado);

console.log("\n--- Estatísticas da Turma ---");
console.log(`Total de alunos aprovados: ${alunosAprovados}`);
console.log(`A maior média da turma: ${maiorMedia.toFixed(2)}`);
console.log(`A menor média da turma: ${menorMedia.toFixed(2)}`);

