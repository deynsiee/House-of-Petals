
// Form loading animation
const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
  setTimeout(() => {
    item.style.opacity = 1;
  }, i * 100);
});

// Handle form submission
const loginForm = document.querySelector('.form');
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the input values
  const username = document.querySelector('.name').value;
  const password = document.querySelector('.password').value;

  console.log('Username: ' + username);
  console.log('Password: ' + password);

});

