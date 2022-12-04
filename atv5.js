/*Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas. */

let distancia = parseFloat(prompt('Qual é a distância gostaria de percorrer? KM'));
let valorCorrida;

if(distancia <= 200){
    valorCorrida = 0.50 * distancia;
}else{
    valorCorrida = 0.45 * distancia;
}

document.write('O valor da corrida é: R$ '+valorCorrida);