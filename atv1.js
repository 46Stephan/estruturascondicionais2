/* Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo. */

let idades = [];

let idade = 0;
let media = 0;
let soma = 0;

while(idade!==999){
    idade = parseInt(prompt('Informe a sua idade: \n Para finalizar, digite 999!'));
    idades.push(idade)
}

const pope = idades.pop()
    document.write('Teremos o total de: '+(idades.length)+ ' idades! <br />');

    for(let i in idades){
        soma +=idades[i]
    }
    media = soma / idades.length

    document.write('A média de IDADES é:' +media+ '<br />');
    document.write('<br /> Relação de idades: '+idades);

