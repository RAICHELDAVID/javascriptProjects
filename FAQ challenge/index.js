
$(document).ready(() => {
    const questions = document.querySelectorAll('.question-div');

    questions.forEach(function (question) {
        const button = question.querySelector('.plus-minus-button');
        $(button).click(() => {
            questions.forEach(function (item) {
                if (item !== question) {
                    item.classList.remove("show-answer");
                }
            });

            question.classList.toggle("show-answer");
        });
    });
});

