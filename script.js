function validation(e) {
    const inputEl = document.getElementById("email");
    const validationMessageEl = document.getElementById("validation-message");
    const errorIconEl = document.getElementById("error-icon");

    const emailPattern = /\w@\w/;
    const email = inputEl.value;

    let  correctEmail = true;

    if(inputEl.value.length == 0) {
        correctEmail = false;
        validationMessageEl.textContent = "Please enter an email address";
        
    } else if(!emailPattern.test(email)) {
        correctEmail = false;
        validationMessageEl.textContent = "Please enter a valid email";
    }

    if(!correctEmail) {
        e.preventDefault();
        validationMessageEl.style.display = "block";
        errorIconEl.style.display = "block";
        inputEl.style.borderColor = "var(--soft-red)";
        inputEl.style.outlineColor = "var(--soft-red)";
    }
}

const formEl = document.getElementById("form");
formEl.addEventListener("submit", validation);