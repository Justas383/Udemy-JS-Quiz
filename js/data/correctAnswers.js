
const correct = ['A', 'B', 'C', 'D'];
const form = document.querySelector('.test');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //tikrinam atsakymus 

    userAnswers.forEach((answer, index) => {
        if (answer === correct[index]){
            score += 25;
        }
    });

    console.log(score);

});