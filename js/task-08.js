const form = document.querySelector(".login-form");

form.addEventListener("submit", onFformSubmit);

function onFformSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email.length > 0 && password.length > 0) {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert("Fill in all fields correctly");
  }
}
