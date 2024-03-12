// Projects Animation
document.addEventListener("DOMContentLoaded", function() {
  let projectsTitle = document.querySelector(".section-title");
  let projectsLink = document.querySelector(".link-projects");

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
    let titlePosition = projectsTitle.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (titlePosition < screenHeight * 0.95) {
      fadeIn(projectsTitle);
      fadeIn(projectsLink);
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});

document.addEventListener("DOMContentLoaded", function() {
  let projects = document.querySelectorAll(".project");

  function fadeInProjects() {
    projects.forEach(function(project) {
      project.classList.add("show");
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
    let container = document.querySelector(".container");
    let containerPosition = container.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (containerPosition < screenHeight * 0.75) {
      fadeInProjects();
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});