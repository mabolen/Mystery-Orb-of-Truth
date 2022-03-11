let randomNumber = (max_number) => {
    return Math.round(Math.random()*max_number)
};
console.log(randomNumber(10));
let shakeButton = document.querySelector("#shakeButton");
let answer = document.querySelector("#answer");
shakeButton.addEventListener('click', function() {
    let random = randomNumber(10);
    //alert(random);
    let answerText = '';
    switch(random) {
        case 0:
            answerText = 'You can\'t be serious. Ask again you goon.';
            break;
        case 1 :
            answerText = 'Yeah I guess so.  Freak.';
            break;
        case 2 :
            answerText = 'That is not going to happen.  Unless...';
            break;
        case 3 :
            answerText = 'Please stop making me talk about this!';
            break;
        case 4 :
            answerText = 'You will definitely win the lottery.  Oh is that not what you asked?';
            break;
        case 5 :
            answerText = 'The answer is 42';
            break;
        case 6 :
            answerText = 'Harriet Tubman';
            break;
        case 7 :
            answerText = 'Oh no way';
            break;
        case 8 :
            answerText = 'All I can say is that you will not become a hedgehog';
            break;    
        case 9 :
            answerText = 'Yes yes yes yes!';
            break;
        case 10 :
            answerText = 'That question scared me';
            break;    
        default :
            answerText = 'How did you break me?';
    }
    answer.innerHTML = answerText;
});