const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {

  e.preventDefault();

  const successMessage =
    document.getElementById('contact-success');

  successMessage.classList.add('show');

  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 3000);

  contactForm.reset();
});