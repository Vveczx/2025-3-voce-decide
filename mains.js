const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    }
]
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
} mostraPergunta();
console.log(perguntas)
