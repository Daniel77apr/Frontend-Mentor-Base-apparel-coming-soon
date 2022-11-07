function validation() {
    const inputEl = document.getElementById("email");
    const validationMessageEl = document.getElementById("validation-message");
    const errorIconEl = document.getElementById("error-icon");
    ("validation-message");

    if(!inputEl.checkValidity()){
        validationMessageEl.textContent = inputEl.validationMessage;
        validationMessageEl.style.display = "block";
        inputEl.style.borderColor = "var(--soft-red)";
        inputEl.style.outlineColor = "var(--soft-red)";
        errorIconEl.style.display = "block";
    }
}

const submitButtonEl = document.getElementById("submit-button");

submitButtonEl.addEventListener("click", validation);