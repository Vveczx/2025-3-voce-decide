const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem seu primeiro contato com videogames aos 15 anos, quando ganha um PC usado do seu primo rico que te deixou entrar na Steam Family dele. Qual gênero você quer experimentar primeiro?",
        alternativas: [
            {
                texto: " Aventure-se nos RPGs e visual novels (Final Fantasy, Persona, Dark Souls).",
                afirmacao: "Você se apaixonou por histórias profundas, desenvolveu paciência para explorar narrativas e está construindo uma base sólida para entender jogos com muita lore e complexidade."
            },
            {
                texto: "Vá para jogos de ação e FPS (Call of Duty, Battlefield, Postal 2).",
                afirmacao: " Você ama a adrenalina dos jogos rápidos, treinou sua mira e reflexos, e já começa a pensar em estratégias para dominar o multiplayer."
            }

        ]
    },
    {
        enunciado: "Com o gosto formado e uma grande paixão pelos games, em uma certa manhã você acorda e decide se tornar desenvolvedor de jogos e começa a estudar programação, mas bateu aquela preguiça. Durante as férias de julho o que você faz no seu tempo livre?",
        alternativas: [
            {
                texto: "Joga em qualquer oportunidade , afinal, a vida é pra curtir! E essas coisas de estudar é pra escola, então pode ficar pra depois… vamos relaxar por agora.",
                afirmacao: "Você relaxou jogando, o que deu um respiro para a mente, mas perdeu um pouco o ritmo de estudo e progresso, até chegou a desanimar um pouco da ideia mas deu continuidade."
            },
            {
                texto: "Dedica-se a estudar programação para se tornar um melhor dev, aproveitando bem o tempo pra aprender métodos e aperfeiçoar projetos.",
                afirmacao: "Você avançou bastante nos estudos, se sentiu mais preparado e motivado para criar seus próprios jogos, conseguiu investir um tempo bom pra compreender fundamentos importantes."
            }

        ]
    }, {
        enunciado: "Você está começando a criar seus primeiros jogos e publicá-los em sites como Steam e  Itch.io. Como reage ao receber críticas?",
        alternativas: [
            {
                texto: "Ignora as críticas negativas e continua no seu jeito, suas obras são perfeitas do jeito que são e as pessoas que criticaram não sabem o que falam.",
                afirmacao: "Você perdeu algumas oportunidades de crescer, mas manteve sua identidade criativa e eventualmente foi entendendo os seus erros conforme adquiria mais experiência na área."
            },
            {
                texto: "Aceita críticas construtivas e melhora seu trabalho, afinal sempre há espaço pra aprendizado e melhoria pra futuros projetos.",
                afirmacao: "Seu jogo ficou melhor, você ganhou respeito e está no caminho certo para o sucesso, você conseguiu entender melhor os seus pontos fortes e fracos e aperfeiçoou o que era necessário."
            }

        ]
    }, {
        enunciado: "Depois de alguns anos, você ganhou um certo reconhecimento e recebeu propostas de alguns estúdios, incluindo um que você é super fã desde a sua adolescência.",
        alternativas: [
            {
                texto: "Aceita a proposta e se dedica 100% para ser um Kojima da nova geração , sempre buscando aprender e dominar cada vez mais suas habilidades.",
                afirmacao: "Você trabalhou duro, criou jogos incríveis e virou referência no mundo gamer, influenciou gerações de games com suas criações inovadoras e interessantes , sendo realmente um Hideo Kojima da nova geração."
            },
            {
                texto: "Recusar a proposta por estar acostumado com a rotina confortável que criou, preferindo continuar no vício das jogatinas, fast food e noites viradas sem produtividade, tipo, tanto faz né… tem mais liberdade fazendo trabalho autonomo.",
                afirmacao: "Com o tempo, sua saúde foi se piorando cada vez mais, sedentarismo, obesidade, hipertensão,  diabetes…. O vício em jogos e a má alimentação te deixaram obeso mórbido . As oportunidades passaram, e você acabou esquecido, vivendo numa bolha de nostalgia e arrependimento, preso à frente da tela e morreu de infarto se arrependendo amargamente de não ter levado uma vida melhor."
            }

        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";


function mostraPergunta() {
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);

    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent= "E assim..."
    textoResultado.textContent=  historiaFinal;
    caixaAlternativas.textContent= "";
}

mostraPergunta();

console.log(perguntas)
