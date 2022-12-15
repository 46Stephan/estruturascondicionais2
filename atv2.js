/*Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

let salarioH = 0;
let salarioM = 0;

let resposta = 's'

while (resposta == 's') {
    let sexo = prompt('Infome o seu sexo [H/M]:');
    sexo.toLocaleLowerCase();

    if (sexo == 'h') {
        let salario = parseFloat(prompt('Informe o salário: R$'));
        salarioH = salario + salarioH;

    } else {
        let salario = parseFloat(prompt('Informe o salário: R$'));
        salarioM = salario + salarioM;
    }

    resposta = prompt('Deseja incluir mais alguma informação? Digite s p/ S e n para finalizar o processo: [s/n]').toLocaleLowerCase();
}

document.write('Total salário HOMEM: R$ ' + salarioH + '<br />');
document.write('Total salário MULHER: R$ ' + salarioM);