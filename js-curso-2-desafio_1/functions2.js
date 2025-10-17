/*Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/

function calculoDeIMC(altura, peso) {
  alert((imc = peso / (altura * altura)));
}

/*calculoDeIMC(1.72, 70);*/

function fatorial(n) {
  if (n < 0) {
    // Retorna uma string de erro para quem chamou a função
    return "Erro: Fatorial não definido para números negativos.";
  } else if (n === 0) {
    // Retorna o valor de 0! (que é 1)
    return 1;
  } else {
    // Se não for nem negativo, nem zero, ele entra no cálculo!
    let resultado = 1;
    for (let i = n; i >= 1; i--) {
      resultado *= i; // Multiplica 'resultado' por 'i'
    }
    return resultado;
  }
}

//console.log(fatorial(-8));

/*Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/

function converteDolar(qtdDolar) {
  const cotacao = 4.8;
  let valorEmReais = qtdDolar * cotacao;

  return valorEmReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

console.log(converteDolar(100.0));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularMedidasDeComodo(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`A área da sala é ${area}m²`);

  console.log(`O perímetro da sala é ${perimetro}m`);
}

calcularMedidasDeComodo(5, 3);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularSalaCircular(raio) {
  const PI = 3.14;

  let perimetro = 2 * PI * raio;

  let area = PI * (raio * raio);

  console.log(`A área do círculo é ${area.toFixed(2)}m²`);
  console.log(`O perímetro do círculo é ${perimetro.toFixed(2)}m`);
}

//calcularSalaCircular(5);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    // Calcule o resultado
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

//tabuada(2);
