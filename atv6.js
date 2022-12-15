/* Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP */

let comprimento = parseFloat(prompt('Informe o comprimento do terreno: '));
let largura = parseFloat(prompt('Informe a largura do terreno: '));
let metroQuadrado = comprimento * largura;


if (metroQuadrado < 100) {
    document.write('TERRENO POPULAR: Abaixo de 100 metros quadrados.');
} else if (metroQuadrado >= 100 && metroQuadrado <= 500) {
    document.write('TERRENO MASTER: Entre 100 metros quadrados à 500 metros quadrados.');
} else {
    document.write('TERRENO VIP: Acima de 500 metros quadrados.');
}