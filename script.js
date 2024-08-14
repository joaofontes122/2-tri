const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de jogar bola?",
            },
            {
                texto: "Não gosta de jogar bola?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "com que frequencia?",
            },
            {
                texto: "nao gosto de futebol?.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou algum treinador?",
            },
            {
                texto: "ja viu o quao faz bem ?.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "ja fez algum teste?",
            },
            {
                texto: "nao gosto praticar futebol.",
            }
        ]
    }
    {
        alternativas: [
            {
                texto: "quantas vezes.?",
            },
            {
                texto: "gosta de outro esporte?.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "ja passou em algum teste?.",
            },
            {
                texto: "nao gosto de esporte nenhum.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "sim/nao.",
            },
            {
                texto: "atualize a pagina para recomerçar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();