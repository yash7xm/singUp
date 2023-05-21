const singInBtn = document.getElementById('singInBtn');
const singUpBtn =  document.getElementById('singUpBtn');
const info = document.querySelector('.info');
const container = document.querySelector('.container');
const heading = document.querySelector('.heading');
const signInInfo = document.querySelector('.signIn-info')
const regInfo = document.querySelector('.reg-info');
const singIn = document.querySelector('.signIn');
const reg = document.querySelector('.reg');
let clickCounter = 0;

singInBtn.addEventListener('click', () => {
    info.style.transform = 'translateX(151%)';
    singIn.style.left = '0%';
    reg.style.left = '0%';
    setTimeout(() => {
        regInfo.style.display = 'none';
    }, 300);
    setTimeout(() => {
        signInInfo.style.display = 'flex';
    }, 400);
    setTimeout(() => {
        singIn.style.display = 'none';
        reg.style.display = 'flex';
    }, 250);
})

singUpBtn.addEventListener('click', () => {
    info.style.transform = 'translateX(0%)';
    singIn.style.left = '40%';
    reg.style.left = '40%';
    setTimeout(() => {
        regInfo.style.display = 'flex';
    }, 400);
    setTimeout(() => {
        signInInfo.style.display = 'none';
    }, 400);
    setTimeout(() => {
        singIn.style.display = 'flex';
        reg.style.display = 'none';
    }, 250);
})