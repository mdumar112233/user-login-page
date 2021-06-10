const signInLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.sign-up-link');

const email = document.getElementById('email');
const password = document.getElementById('password');
const LoginForm = document.getElementById('login-form');
const emailError = document.getElementById('email-error');
const passError = document.getElementById('pass-error');

const signUpForm = document.getElementById('sign-up-form');
const singUpEmail = document.getElementById('sign-up-email');
const singUpPass = document.getElementById('sign-up-pass');
const ragisEmailError = document.getElementById('regis-email-error');
const ragisPassError = document.getElementById('regis-pass-error');



const handleSignUpBtn = () => {
    document.querySelector('.registrar-section').style.display = 'none';
    document.querySelector('.login-section').style.display = 'block';
}
const handleSignInBtn = () => {
    document.querySelector('.registrar-section').style.display = 'block';
    document.querySelector('.login-section').style.display = 'none';
}


signInLink.addEventListener('click', (e) => {
    handleSignUpBtn();
    e.preventDefault();
})
signUpLink.addEventListener('click', (e) => {
    handleSignInBtn();
    e.preventDefault();
})



LoginForm.addEventListener('submit', (e) => {
    let errorMessage = [];
    let passErrorMessage = [];
    if(email.value < 8){
        errorMessage.push('Enter your correct email')
    }
    if(password.value.length < 6){
        passErrorMessage.push('Password must be longer than 6 character')
    }
    if(errorMessage.length > 0){
        e.preventDefault();
        emailError.innerText = errorMessage.join(', ');
    }
    if(passErrorMessage.length > 0){
        e.preventDefault();
        passError.innerText = passErrorMessage.join(', ');
    }
})


signUpForm.addEventListener('submit', (e) => {

    let regisErrorMessage = [];
    let regisPassErrorMessage = [];

    if(singUpEmail.value < 6){
        regisErrorMessage.push('Enter your correct email')
    }
    if(singUpPass.value.length < 6){
        regisPassErrorMessage.push('Password must be longer than 6 character')
    }
    if(regisErrorMessage.length > 0){
        e.preventDefault();
        ragisEmailError.innerText = regisErrorMessage.join(', ');
    }
    if(regisPassErrorMessage.length > 0){
        e.preventDefault();
        ragisPassError.innerText = regisPassErrorMessage.join(', ');
    }
})


