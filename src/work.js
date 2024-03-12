// Animation Work Projects
document.addEventListener("DOMContentLoaded", function() {
  let workProjects = document.querySelector(".work-projects");

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
    let titlePosition = workProjects.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
  
    if (titlePosition < screenHeight * 0.75) {
      fadeIn(workProjects);
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});

document.addEventListener("DOMContentLoaded", function() {
  let cards = document.querySelectorAll("#works .card");

  function fadeInCards() {
    cards.forEach(function(card) {
      card.classList.add("show");
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
    let worksSection = document.getElementById("works");
    let sectionPosition = worksSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
  
    if (sectionPosition < screenHeight * 0.75) {
      fadeInCards();
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});