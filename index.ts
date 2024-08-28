// Questão 01
/*console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");

console.log("Estudar é muito bom");
console.log("Paciência e persistência");
console.log("Revisão é a mãe do aprendizado");*/

// Questão 02
/*function criarFrases(){
    console.log("Estudar é muito bom");
    console.log("Paciência e persistência");
    console.log("Revisão é a mãe do aprendizado")
}

criarFrases();
criarFrases();
criarFrases()*/

// Questão 03
/*function soma(num1, num2) {
    console.log(num1 + num2)
}
soma(10, 15);
soma(10, 20);
soma(30, 50);
soma(50, 50)*/

// Questão 04
/*function soma(num1, num2) {
    return num1 + num2
}
teste1 = soma(10, 15);
console.log(teste1);

teste2 = soma(10, 20) + soma(30, 50);
console.log(teste2);

console.log(soma(50, 50))*/

// Questão 05
/*function soma(a: number, b: number): number {
    return a + b;
}*/

// Questão 06
/*function isPar(numero: number): boolean {
    return numero % 2 === 0;
}*/

// Questão 07
/*function media(nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3;
}*/

// Questão 08
/*function imc(peso: number, altura: number): number {
    return peso / (altura * altura);
}*/

// Questão 09
/*function calcularDesconto(valorProduto: number, percentualDesconto: number): number {
    return valorProduto * (1 - percentualDesconto / 100);
}*/

// Questão 10
/*function calcularImpostoRenda(salario: number): number {
    let imposto = 0;
    if (salario <= 1903.98) {
        return 0;
    } else if (salario <= 2826.65) {
        imposto = salario * 0.075;
    } else if (salario <= 3751.05) {
        imposto = salario * 0.15;
    } else if (salario <= 4664.68) {
        imposto = salario * 0.225;
    } else {
        imposto = salario * 0.275;
    }
    return imposto;
}*/

// Questão 11
/*function calcularMediaArredondada(numeros: number[]): number {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    return Math.round(media);
}*/

// Questão 12
/*function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
    const digitos = numero.toString().split('');
    let pares = 0, impares = 0;
    for (const digito of digitos) {
        const valor = parseInt(digito);
        if (valor % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    return { pares, impares };
}*/

// Questão 13
/*interface Aluno {
    nome: string;
    nota: number;
}

function calcularMediaAlunos(alunos: Aluno[]): number {
    const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return somaNotas / alunos.length;
}*/

// Questão 14
/*function calcularIdade(anoNascimento: number): number {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}*/

// Questão 15
/*function gerarTabuada(numero: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}*/

// Questão 16
/*function advinheNumero(): void {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa: number | null = null;
    let tentativas = 0;
    while (tentativa !== numeroAleatorio) {
        tentativa = parseInt(prompt("Adivinhe o número (1 a 100):") || "0");
        tentativas++;
        if (tentativa < numeroAleatorio) {
            console.log("O número é maior.");
        } else if (tentativa > numeroAleatorio) {
            console.log("O número é menor.");
        }
    }
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
}*/

// Questão 17
/*function verificarPropriedade(objeto: object, propriedade: string): boolean {
    return propriedade in objeto;
}*/

// Questão 18
/*function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number): number {
    return valorCusto * (1 + margemLucro / 100) + valorFrete;
}*/

// Questão 19
/*function encontrarPalavraMaisLonga(frase: string): string {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';
    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }
    return palavraMaisLonga;
}*/

// Questao 20
/*function imprimirQuadro(strings: string[]): void {
    const maxLength = Math.max(...strings.map(s => s.length));
    const border = '*'.repeat(maxLength + 4);
    console.log(border);
    for (const str of strings) {
        const padding = ' '.repeat(maxLength - str.length);
        console.log(`* ${str}${padding} *`);
    }
    console.log(border);
}*/

// Questão 21
/*function filtrarStringsLongas(strings: string[]): string[] {
    return strings.filter(str => str.length > 5);
}*/

// Questão 22
/*interface Livro {
    titulo: string;
    autor: string;
    ano: number;
}

function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
    return livros.filter(livro => livro.autor === autor);
}*/

// Questão 23
/*interface Pessoa {
    nome: string;
    idade: number;
}

function obterNomePessoaMaisVelha(pessoas: Pessoa[]): string {
    const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) =>
        pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha
    );
    return pessoaMaisVelha.nome;
}*/

// Questão 24
/*interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

function filtrarCarrosPorAno(carros: Carro[], ano: number): Carro[] {
    return carros.filter(carro => carro.ano > ano);
}*/

// Questão 25
/*function inverterString(str: string): string {
    return str.split('').reverse().join('');
}*/