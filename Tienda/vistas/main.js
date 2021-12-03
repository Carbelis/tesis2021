const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const fullname = fullname.nodeValue.trim();
    const username = username.nodeValue.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fullname=== ''){
        setErrorFor()
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
