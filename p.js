// Get form elements
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const eventSelect = document.getElementById('event');
const messageTextarea = document.getElementById('message');
const submitBtn = document.querySelector('.submit-btn');

// Form validation function
function validateForm() {
  // Name validation
  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    return false;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Invalid email address');
    return false;
  }

  // Phone validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    alert('Invalid phone number');
    return false;
  }

  // Event selection validation
  if (eventSelect.value === '') {
    alert('Please select an event');
    return false;
  }

  return true;
}

// Form submission event listener
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Open new page
    window.location.href = 'thank you.html'; // Replace with your desired URL
    // or
    // window.open('thank-you.html', '_blank'); // Opens in new tab
    alert('Registration successful!');
    form.reset();
  }
});

