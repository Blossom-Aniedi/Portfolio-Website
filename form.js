const displayMsg = document.getElementById('form_message_error');
const form = document.getElementById('contact-form');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-message');
    displayMsg.textContent = 'Your email address should be in lowercase';
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});

function preserveFormData() {
  const form = document.getElementById('contact-form');
  let formData = { name:'', email:'', message:'' };
  const checkStorage = window.localStorage.getItem('data');
  if (checkStorage) {
    const getStorage = checkStorage;
    formData = JSON.parse(getStorage);
    form.name.value = formData.name;
    form.email.value = formData.email;
    form.message.value = formData.message;
  } 
  form.addEventListener('input', () => {
    formData.name = form.name.value;
    formData.email = form.email.value;
    formData.message = form.message.value;
    window.localStorage.setItem('data', JSON.stringify(formData));
  })
}

preserveFormData()