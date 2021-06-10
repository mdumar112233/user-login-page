const signUpBtn = document.querySelector('.user-sign-up');
const signInBtn = document.querySelector('.user-sign-in');
const signInLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.sign-up-link');

const handleSignUpBtn = () => {
    document.querySelector('.registrar-section').style.display = 'none';
    document.querySelector('.login-section').style.display = 'block';
}
const handleSignInBtn = () => {
    document.querySelector('.registrar-section').style.display = 'block';
    document.querySelector('.login-section').style.display = 'none';
}


signUpBtn.addEventListener('click', (e) => {
    handleSignUpBtn();
    e.preventDefault();
})
signInBtn.addEventListener('click', (e) => {
    handleSignInBtn();
    e.preventDefault();
})

signInLink.addEventListener('click', (e) => {
    handleSignUpBtn();
    e.preventDefault();
})
signUpLink.addEventListener('click', (e) => {
    handleSignInBtn();
    e.preventDefault();
})