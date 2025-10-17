let listaDeNumerosSorteados = [];
let numeroLimte = 2;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function dispararConfete() {
  confetti({
    particleCount: 250,
    spread: 90,
    origin: { y: 0.6 },
  });
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    dispararConfete();
    // habilita o botão de novo jogo
    document.getElementById("reiniciar").removeAttribute("disabled");
    // desabilita o botão 'Chutar' e o input para evitar novos chutes
    const btnChutar = document.querySelector(".chute .container__botao");
    const inputCampo = document.querySelector("input.container__input");
    if (btnChutar) btnChutar.setAttribute("disabled", true);
    if (inputCampo) {
      inputCampo.setAttribute("disabled", true);
      inputCampo.blur();
    }
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor.");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior.");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimte + 1);
  let quantidadeDeElementosNaLIsta = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLIsta == numeroLimte) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  // reabilita o botão 'Novo jogo' como padrão
  document.getElementById("reiniciar").setAttribute("disabled", true);
  // reabilita o botão 'Chutar' e o input para uma nova partida
  const btnChutar = document.querySelector(".chute .container__botao");
  const inputCampo = document.querySelector("input.container__input");
  if (btnChutar) btnChutar.removeAttribute("disabled");
  if (inputCampo) inputCampo.removeAttribute("disabled");
}
