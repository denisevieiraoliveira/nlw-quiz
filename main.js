const perguntas = [
    {
        pergunta: "O que significa a sigla 'DOM' em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Output Method",
            "Dynamic Order Management",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é utilizada para imprimir algo no console?",
        respostas: [
            "console.log()",
            "print()",
            "output()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma closure em JavaScript?",
        respostas: [
            "Um tipo de loop",
            "Um tipo de variável",
            "Uma função com acesso a variáveis fora dela",
        ],
        correta: 2
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o operador '===' em JavaScript?",
        respostas: [
            "Atribuição",
            "Comparação estrita",
            "OR lógico",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "add()",
        ],
        correta: 0
    },
    {
        pergunta: "Como se refere ao ato de juntar dois ou mais arrays em JavaScript?",
        respostas: [
            "Merge",
            "Concatenar",
            "Unir",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "JavaScript Object Notation",
            "Java Serialized Object Notation",
            "JavaScript Object Naming",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Comparação de tipos",
            "Verificar o tipo de uma variável",
            "Conversão de tipo",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            "Um tipo de dado",
            "Uma função interna",
            "Uma interação do usuário ao clicar em um elemento",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');


for (const item of perguntas) {

    document.getElementById('acertos').style.display = 'none';

    const quizItem = template.content.cloneNode(true);

    quizItem.querySelector('h3').textContent = item.pergunta;
    quizItem.querySelector('#quiz-item__numero').textContent = perguntas.indexOf(item) + 1;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));

        dt.querySelector('input').value = item.respostas.indexOf(resposta);

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
        }

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
}

botao.addEventListener('click', function () {
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    document.getElementById('acertos').style.display = 'block';
    document.getElementById('main').style.marginBottom = '2em';
        
})
