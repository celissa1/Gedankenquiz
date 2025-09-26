const questions = [
  {
      question: "Was hat Elizabeth am 25.03.1603 gemacht.",
      answers: ["Sie hat sich mit dem König getroffen.", "Sie hat was gegessen.", "geschlafen", "nix"],
      correct: "nix"
  },
  {
      question: "Was haben Kinder mit Downsyndrom?",
      answers: ["2 Augen", "Eine Nase", "Ein Herz", "10 Finger"],
      correct: "Ein Herz"
  },
  {
      question: "Was mag Eninem GARNICHT?",
      answers: ["Seine Freundin", "Rappen", "schlafen", "seine Mutter"],
      correct: "Seine Freundin"
  },
  {
      question: "Was ist das Lieblingsessen von Nina Maragal?",
      answers:["nichts","Cola Zero", "Kaffee","ein brot"],
      correct: "nichts"
  },
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.answers.forEach(answer => {
            questionDiv.innerHTML += `<input type="radio" name="question${index}" value="${answer}"> ${answer}<br>`;
        });
        quizContainer.appendChild(questionDiv);
    });
    document.getElementById('result').innerText = '';
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correct) {
            score++;
        }
    });

    let message = '';
    if (score === 4) {
        message = ' 4 von 4 Fragen richtig..Wow..alles richtig! Ein richtiger Profi bist du!! 🎉';
    } else if (score === 3) {
        message = '3 von 4 Fragen richtig. ACH! Dieser eine Punkt! Streng dich mehr an du bist schlecht! 👍';
    } else if (score === 2) {
        message = '2 von 4 Fragen richtig. HAHAHHAHAHAHAHAHAHAH wie schlecht, das hätte ich nicht erwartet die Fragen sind soo einfach!!! 😊';
    } else if (score === 1) {
        message = '1 von 4 Fragen richtig.. schlecht.. versuche das quiz nochmal zu machen..in 17 Jahren. 💪';
    } else {
        message = '0 von 4 Fragen richtig.........AHHAHAHAHAHHAHAHAHAHAHAHAHHAHAHAHAHHHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHAHHAHAAHAHHA SOGAR EIN BABY KANN ALE FRAGEN RICHTIG BEANTWORTEN HAHAHA WIE SCHELCHT DU BIST 😅';
    }
    document.getElementById('result').innerText = message;
}

function resetQuiz() {
    document.getElementById('username').value = '';
    loadQuiz();
}

window.onload = loadQuiz;
