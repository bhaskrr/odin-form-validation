// const zipField = document.querySelector('#zip');
// function checkZip(){
//     const zipRegEx = /^[1-9][0-9]{5}$/;
//     if(zipRegEx.test(zipField.value)){
//         console.log('Zip is valid');
//         return;
//     }
//     zipField.setCustomValidity("Zip is invalid");
//     zipField.style.border = '5px solid red';
// }

// zipField.addEventListener('change', checkZip);

// window.onload = () => {
//     // document.getElementById("Country").onchange = checkZip;
//     document.querySelector('#zip').oninput = checkZip;
// };

const form = document.querySelector('form');


function checkMatchingPassword(){
    const passwordField = document.querySelector('#password');
    const confirmPasswordField = document.querySelector('#confirm-password');

    if(confirmPasswordField.value != passwordField.value){
        confirmPasswordField.classList.remove('green-border')
        confirmPasswordField.classList.add('red-border');
    }
    else{
        confirmPasswordField.classList.remove('red-border');
        confirmPasswordField.classList.add('green-border');
    }
}

window.onload = () =>{
    document.querySelector('#confirm-password').addEventListener('input',checkMatchingPassword);
}