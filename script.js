function checkAnswers() {
    const answers = [];
    document.querySelectorAll('input[name=q1]').forEach(input => {
        if (input.checked) {
            answers.push({ question: 'q1', answer: input.value });
        }
    });
    
    document.querySelectorAll('input[name=q2]').forEach(input => {
        if (input.checked) {
            answers.push({ question: 'q2', answer: input.value });
        }
    });
    document.querySelectorAll('input[name=q3]').forEach(input => {
        if (input.checked) {
            answers.push({ question: 'q3', answer: input.value });
        }
    });
    console.log(answers);
}
let correctAnswers = 0;
function validateForm() {
    return true;
}
function calculateScore() {
    correctAnswers++;
}

function showResults() {
    alert("Ваши результаты отправлены.");
}
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        calculateScore();
        showResults();
    }
});
