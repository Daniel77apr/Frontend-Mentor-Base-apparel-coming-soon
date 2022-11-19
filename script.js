function validation(e) {
    const inputEl = document.getElementById("email");
    const validationMessageEl = document.getElementById("validation-message");
    const errorIconEl = document.getElementById("error-icon");

    const emailPattern = /.+@.+\..+/;
    const email = inputEl.value;

    let correctEmail = true;

    if(inputEl.value.length == 0) {
        correctEmail = false;
        validationMessageEl.textContent = "Please enter an email address"; 
    } else if(!emailPattern.test(email)) {
        correctEmail = false;
        validationMessageEl.textContent = "Please enter a valid email";
    }

    if(!correctEmail) {
        e.preventDefault();
        errorIconEl.setAttribute("class", "error-icon");
        inputEl.className += " email-error";
    }
}

const formEl = document.getElementById("form");
formEl.setAttribute("novalidate", "");
formEl.addEventListener("submit", validation);
