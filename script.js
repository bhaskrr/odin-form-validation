const form = document.querySelector('form');

//validates the country dropdown menu
function validateDropDown(){
    const selectField = document.querySelector('select');

    if(selectField.value != ''){
        return true;
    }
    return false;
}


//check zip code validity
function checkZip(){
    const zipField = document.querySelector('#zip');

    const zipRegEx = /^[1-9][0-9]{5}$/; //regular expression to validate indian zip codes

    if(zipRegEx.test(zipField.value)){
        zipField.classList.remove('red-border');
        zipField.classList.add('green-border');
        return true;
    }
    else{
        zipField.classList.remove('green-border');
        zipField.classList.add('red-border');
        return false;
    }
}

//check password matching
function checkMatchingPassword(){
    const passwordField = document.querySelector('#password');
    const confirmPasswordField = document.querySelector('#confirm-password');

    if(passwordField.value == '') return;

    if(confirmPasswordField.value != passwordField.value){
        passwordField.classList.remove('green-border');
        confirmPasswordField.classList.remove('green-border');
        confirmPasswordField.classList.add('red-border');
        return false;
    }
    else{
        confirmPasswordField.classList.remove('red-border');
        passwordField.classList.add('green-border');
        confirmPasswordField.classList.add('green-border');
        return true;
    }
}

//handling form submission
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', (e)=>{
    if(form.checkValidity()){
        alert('High five! Your inputs are valid!');
    }
})

//enables or disables the submit button
function submitBtnController(){
    if(checkZip() && checkMatchingPassword() && validateDropDown()){
        submitBtn.disabled = false;
        return true;
    }
    else{
        submitBtn.disabled = true;
        return false;
    }
}

//actively checks the fields for invalid inputs
window.onload = () =>{
    form.reset(); //resets the form input fields
    document.querySelector('#zip').addEventListener('input', ()=>{
        checkZip();
        submitBtnController();
    });

    document.querySelector('#confirm-password').addEventListener('input',()=>{
        checkMatchingPassword();
        submitBtnController();
    });

    document.querySelector('select').addEventListener('change', ()=>{
        validateDropDown();
        submitBtnController();
    })
}