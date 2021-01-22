
const correct = ['A', 'B', 'C', 'D'];
const form = document.querySelector('.form');
const results = document.querySelector('.results');


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

    //rodom razultatus puslapyje

    window.scrollTo(0,0)
    
    results.classList.remove('resultsD')

    let output = 0;
   const timer = setInterval(() => {
       results.querySelector('span').textContent = `${output}%`;
       if(output === score){
           clearInterval(timer);
       } else {
           output++;
       }
   }, 50);

});


    
