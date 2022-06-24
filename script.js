let inLength = document.getElementById('inLength');
let outLength = document.getElementById('outLength');
let btGenerate = document.getElementById('btGenerate');

let containerOutput = document.querySelector('.container-output');
let outPassword = document.getElementById('outPassword');
let outConfirm = document.querySelector('.confirm');

const CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@."
let password;

function generatePassword(){
    let length = inLength.value;
    password = '';

    for(i = 0; i < length; i++){
        password += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
    }

    containerOutput.classList.remove('hide');
    outPassword.textContent = password;
}

inLength.addEventListener('input', () => {
    outLength.textContent = inLength.value;
})

btGenerate.addEventListener('click', generatePassword);

outPassword.addEventListener('click', () => {
    navigator.clipboard.writeText(password);
    
    outConfirm.style.visibility = 'visible';
    outConfirm.style.opacity = '1';
    setTimeout(() => {
        outConfirm.style.visibility = 'hidden';
        outConfirm.style.opacity = '0';
    }, 600);
});

outLength.textContent = inLength.value;