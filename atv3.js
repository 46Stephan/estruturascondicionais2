/* Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo: */

let valorInicial = parseInt(prompt('Informe valor inicial: '));
let valorFinal = parseInt(prompt('Informe o valor final: '));
let incremento = parseInt(prompt('Informe valor de incremento: '));

for(valorInicial; valorInicial < valorFinal; valorFinal += incremento){
    document.write('Série de contagem: '+valorInicial+ '<br />');

}

document.write('Fim da contagem!');
