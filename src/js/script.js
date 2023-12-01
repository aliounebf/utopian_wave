// Form submission event listener
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevents default form submission
  
      // Basic form validation
      const name = form.querySelector('input[type="text"][placeholder="Nom"]').value;
      const email = form.querySelector('input[type="email"][placeholder="Email"]').value;
      const message = form.querySelector('textarea[placeholder="Votre demande"]').value;
  
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields!');
        return;
      }
  
      // Simulate form submission (you can replace this with actual submission logic)
      setTimeout(function () {
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission (you might not want to do this in a real scenario)
      }, 1000);
    });
  
    // Animation on button click
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function () {
      submitButton.classList.add('animate-pulse'); // Adds pulse animation on button click
  
      // Remove animation after 0.5 seconds
      setTimeout(function () {
        submitButton.classList.remove('animate-pulse');
      }, 500);
    });
  });
  