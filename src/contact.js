// Contact Animation
document.addEventListener("DOMContentLoaded", function() {
  let contactLeft = document.querySelector(".contact-left");
  let contactRight = document.querySelector(".contact-right");

  function fadeInContact() {
    contactLeft.classList.add("show");
    contactRight.classList.add("show");
  }

  function throttle(callback, delay) {
    let last = 0;
    return function() {
      let now = new Date().getTime();
      if (now - last < delay) {
        return;
      }
      last = now;
      callback.apply(null, arguments);
    };
  }

  function handleScroll() {
    let contactSection = document.getElementById("contact");
    let sectionPosition = contactSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight * 0.75) {
      fadeInContact();
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});
// Form validation
function validateForm() {
  let form = document.getElementById('contactForm');
  let name = form.elements['Name'].value;
  let email = form.elements['Email'].value;
  let message = form.elements['Message'].value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please complete all fields.');
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  return true;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});