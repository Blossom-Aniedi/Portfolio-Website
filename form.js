const displayMsg = document.getElementById('form_message_error');
const form = document.getElementById('input');
const email = document.getElementById('email');
const formData = JSON.parse(localStorage.getItem('data'));

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-message');
    displayMsg.textContent = 'Your email address should be in lowercase';
  } else {
    displayMsg.style.visibility = 'hidden';
    const formData = {
      name: form.value,
      email: email.value,
      message: displayMsg.value,
    };
    localStorage.setItem('data', JSON.stringify(formData));
  }

  formData();
});
