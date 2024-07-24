const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabia que o Brasil tem mais de 250 mil pessoas em situação de rua?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Como posso ajudar?" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Essas pessoas muitas vezes se envolvem com drogas ou mesmo outros vícios, para ajudá-las você pode começar a oferecê-las alimentação e roupas.",
        alternativas: [
            {
                texto: "Ótimo, posso fazer mais algo para ajudar?"
            },
            {
                texto: "Vou separar coisas que não uso mais e fazer uma grande doação!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Caso queira fazer ainda mais, você tabém pode conduzir essas pessoas para abrigos mais próximos, além de ajudar financeiramente ou com mais doações.",
        alternativas: [
            {
                texto: "Perfeito!",
                afirmacao: "afirmação"
            },
            {
                texto: "Mas como essas pessoas irão viver no abrigo?",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "No abrigo, essas pessoas recebm devidos cuidados, recebm roupas novas e produtos de higiene. Quando estão estabelecidos, elas são conduzidas para o mercado de trabalho, para terem sua vida normal de volta!",
        alternativas: [
            {
                texto: "Que bom! Irei ajudar o máximo que puder",
                afirmacao: "afirmação"
            },
            {
                texto: "Vou chamar amigos e família para me auxiliar nas doações.",
                afirmacao: "afirmação"
            }


        ]
    },
    {

    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();