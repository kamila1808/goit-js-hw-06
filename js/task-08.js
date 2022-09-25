// Первое решение
// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
// event.preventDefault();

// const formElements = event.currentTarget.elements;

// console.dir(event.currentTarget.elements);

// const email = formElements.email.value;
// const password = formElements.email.password;

// if (email === "" || password === "") {
//     return alert("Все поля должны быть заполнены");
// }

// const formData = new FormData(event.currentTarget);
// console.log(formData);

// formData.forEach((value, name) => {
//     console.log(value, name );
//     console.log("onFormSubmit -> value", value );

// })
// event.currentTarget.reset();
// }


// Обновленное решение
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email === "" || password === "") {
    return alert("Все поля должны быть заполнены");
  }

  const data = { email: email.value, password: password.value };
  console.log(data);

  event.currentTarget.reset();
}
