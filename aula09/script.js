document.addEventListener('DOMContentLoaded', function() {
        const DivQuiz = document.getElementById('Quiz');
    const DivResultado = document.getElementById('Resultado');
    const BtnEnviar = document.getElementById('BtnEnviar');


    const Questoes = [
        {
            questao: "Quem inventou o Chuveiro?",
            opcoes:{
                a: "Um brasileiro",
                b: "Um australiano",
                c: "Um inglês",
                d: "Um nigeriano"       
            },
            opcaoCorreta: 'a'
        },
        {
            questao: "Quem ganhou a Copa do mundo de 2014?",
            opcoes:{
                a: "Aústralia",
                b: "Alemanha",
                c: "Espanha",
                d: "Inglaterra"       
            },
            opcaoCorreta: 'c'
        },
        {
            questao: "Qual é o maior oceano do mundo?",
            opcoes:{
                a: "Oceano Atlântico",
                b: "Oceano Índico",
                c: "Oceano Ártico",
                d: "Oceano Pacífico"       
            },
            opcaoCorreta: 'd'
        },
        {
            questao: "Quem pintou a Mona Lisa?",
            opcoes:{
                a: "Vincent van Gogh",
                b: "Leonardo da Vinci",
                c: "Pablo Picasso",
                d: "Michelangelo"       
            },
            opcaoCorreta: 'b'
        },
        {
            questao: "Qual é o metal mais abundante na crosta terrestre?",
            opcoes:{
                a: "Ferro",
                b: "Alumínio",
                c: "Cobre",
                d: "Ouro"       
            },
            opcaoCorreta: 'b'
        },
        {
            questao: "Em que país se localiza a Grande Muralha da China?",
            opcoes:{
                a: "Japão",
                b: "Coreia do Sul",
                c: "China",
                d: "Índia"       
            },
            opcaoCorreta: 'c'
        },
        {
            questao: "Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?",
            opcoes:{
                a: "Respiração",
                b: "Transpiração",
                c: "Fotossíntese",
                d: "Polinização"       
            },
            opcaoCorreta: 'c'
        },
        {
            questao: "Quantos planetas fazem parte do nosso sistema solar?",
            opcoes:{
                a: "7",
                b: "8",
                c: "9",
                d: "10"       
            },
            opcaoCorreta: 'b'
        },
        {
            questao: "Quem escreveu Dom Quixote?",
            opcoes:{
                a: "William Shakespeare",
                b: "Miguel de Cervantes",
                c: "Gabriel García Márquez",
                d: "Fernando Pessoa"       
            },
            opcaoCorreta: 'b'
        },
        {
            questao: "Qual é a capital do Canadá?",
            opcoes:{
                a: "Toronto",
                b: "Vancouver",
                c: "Montreal",
                d: "Ottawa"       
            },
            opcaoCorreta: 'd'
        },
    ]

    function ConstroiQuiz() {
        const output = [];
        Questoes.forEach(
            (QuestaoUsada, numeroQuestao) => {
                const respostas = []
                for (letra in QuestaoUsada.respostas) {
                    respostas.push(
                        `<label>
                            <input type="radio" name="questao${numeroQuestao} value="${letra}">
                            ${letra} :
                            ${QuestaoUsada.respostas[letra]}
                        </label>`
                    )
                    output.push(
                        `<div class="questao"> ${QuestaoUsada.questao} </div>
                        <div class="respostas"> ${respostas.join('')} </div>`
                    );
                    
                }
            }


        )
        DivQuiz.innerHTML = output.join('');
    }

    ConstroiQuiz();
})
