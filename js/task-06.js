let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;

const input = document.querySelector('input');

inputEl.addEventListener("blur", InputVal);
  function InputVal() {
    inputEl.classList.remove("invalid", "valid");
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
      
        return inputEl.classList.add("valid");
    }
    return inputEl.classList.add("invalid");
};



