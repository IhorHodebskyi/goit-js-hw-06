const input = document.querySelector("#validation-input");
const simbolLength = document.querySelector('[data-length="6"]');


input.addEventListener("blur", validLength);




function validLength(event) {
    
if (event.currentTarget.value.length == simbolLength.dataset.length) {
   const valid = input.classList.contains('invalid') ? input.classList.replace('invalid', 'valid', ) : input.classList.add('valid');
}
else{
    const invalid = input.classList.contains('valid') ? input.classList.replace('valid', 'invalid', ) : input.classList.add('invalid'); 
}
}