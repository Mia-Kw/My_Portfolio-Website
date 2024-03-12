// Services Animation
document.addEventListener("DOMContentLoaded", function() {
  let servicesHeader = document.querySelector(".services");

  function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;
    let interval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.05;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 20);
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
    let servicesPosition = servicesHeader.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (servicesPosition < screenHeight * 0.95) {
      fadeIn(servicesHeader);
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});

document.addEventListener("DOMContentLoaded", function() {
  let columns = document.querySelectorAll(".column");

  function fadeInElements() {
    columns.forEach(function(column) {
      column.classList.add("show");
    });
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
    let servicesContainer = document.querySelector(".services-container");
    let containerPosition = servicesContainer.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
  
    if (containerPosition < screenHeight * 0.75) {
      fadeInElements();
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});