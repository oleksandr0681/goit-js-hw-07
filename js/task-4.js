const loginForm = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const fields = {};
  if (
    form.elements.email.value.trim() === '' ||
    form.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    for (const field of form.elements) {
      if (field.name !== '') {
        fields[field.name] = field.value.trim();
      }
    }
    console.log(fields);
    form.reset();
  }
}

loginForm.addEventListener('submit', handleSubmit);
