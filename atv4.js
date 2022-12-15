/*Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto

b. Mulheres ganham 13% de desconto */

const nome = prompt('INFORME O SEU NOME: ');
let sexo = prompt('Infome o seu sexo: \n [Homem] - Se for HOMEM; \n [Mulher] - Se for MULHER');
let valorCompras = parseFloat(prompt('Infome o valor das compras: R$ '));

if (sexo == 'Homem') {
    let desconto = valorCompras * 0.05;
    document.write(nome + ' o seu desconto foi de R$ ' + desconto + '<br />');
    document.write('O valor total: R$ ' + (valorCompras - desconto));
} else if (sexo == 'Mulher') {
    let desconto = valorCompras * 0.13;
    document.write(nome + ' o seu desconto foi de R$ ' + desconto + '<br />');
    document.write('O valor total: R$ ' + (valorCompras - desconto));
}