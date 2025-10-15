function saudacao() {
  console.log("Olá, Mundo");
}

/*saudacao();*/

function saudacaoPersonalizada(nome) {
  console.log("Olá, " + nome);
}

/*saudacaoPersonalizada(prompt('Digite seu nome: '));*/

function sempreDobra(numero) {
  return numero * 2;
}

/*console.log(sempreDobra(prompt("Digite um numero: ")));*/

function mediaDosNumeros(n1, n2, n3) {
  console.log(
    "A média de " +
      n1 +
      " + " +
      n2 +
      " + " +
      n3 +
      " é igual a " +
      (n1 + n2 + n3) / 3
  );
}

/*mediaDosNumeros(4,8,3);*/

function qualMaior(n1, n2) {
  if (n1 > n2) {
    console.log(n1 + " é o maior número");
  } else if (n1 < n2) {
    console.log(n2 + " é o maior número");
  } else {
    console.log("Os números são iguais");
  }
}

/*qualMaior(4, 6);*/

function multiplicacaoPeloNumero(n1) {
  return console.log(n1 * n1);
}

multiplicacaoPeloNumero(2);
