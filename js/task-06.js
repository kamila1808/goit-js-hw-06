const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(dataLength)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else { 
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid") 
    };
};

