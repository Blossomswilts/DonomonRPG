function render(question) {
    const questionEl = document.getElementById('questionText');
    questionEl.textContent = question.text;
    questionEl.setAttribute('data-id', question.id);
    question.answer.forEach((answer, i) => {
        const answerEl = document.getElementById(`answer${i + 1}`);
        answerEl.textContent = answer.text;
        answerEl.setAttribute('data-id', answer.id);
    });
}

async function getRandomQuestion() {
    try {
        const response = await fetch('/api/questions/random', {
            method: 'GET',
        });
        if (response.ok) {
            const question = await response.json();
            render(question);
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.log(err);
    }
}

//update donomon experience and morality by adding in the answer's experience and morality
async function updateDonomon(answerId, questionId) {
    try {
        const response = await fetch(
            `/api/questions/${questionId}/answers/${answerId}`,
            {
                method: 'GET',
            },
        );

        if (response.ok) {
            return await response.json();
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.log(err);
    }
}

//On dropdown of donomon, set active donomon to the donomon that was clicked
async function setActiveDonomon(donomonId) {
    const response = await fetch(`/api/users/active/${donomonId}`, {
        method: 'PUT',
    });

    if (response.ok) {
        const donomon = await response.json();
        render(donomon);
    } else {
        alert(response.statusText);
    }
}

//___________________________________________________________Active Donomon___________________________________________________________
const dropDownItems = document.querySelectorAll('.donomonSelect');

dropDownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        const donomonId = event.target.dataset.id;
        setActiveDonomon(donomonId);
    });
});

//call updateDonomon on click of answer
const question = document.getElementById('questionText');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

answer1.addEventListener('click', () => {
    const answerId = answer1.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

answer2.addEventListener('click', () => {
    const answerId = answer2.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

answer3.addEventListener('click', () => {
    const answerId = answer3.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

answer4.addEventListener('click', () => {
    const answerId = answer4.dataset.id;
    updateDonomon(answerId, question.dataset.id);
    getRandomQuestion();
});

getRandomQuestion();
