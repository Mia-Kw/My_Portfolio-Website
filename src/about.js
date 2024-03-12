// About Me
document.addEventListener("DOMContentLoaded", function() {
  let aboutCol1 = document.querySelector(".about-col-1");

  function showAbout() {
    aboutCol1.classList.add("show");
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
    let aboutSection = document.getElementById("about");
    let aboutPosition = aboutSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
  
    if (aboutPosition < screenHeight * 0.75) {
      showAbout();
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});

document.addEventListener("DOMContentLoaded", function() {
  let aboutCol2 = document.querySelector(".about-col-2");

  function showAbout() {
    aboutCol2.classList.add("show");
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
    let aboutSection = document.getElementById("about");
    let aboutPosition = aboutSection.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
  
    if (aboutPosition < screenHeight * 0.75) {
      showAbout();
      window.removeEventListener("scroll", scrollHandler);
    }
  }

  let scrollHandler = throttle(handleScroll, 200);
  window.addEventListener("scroll", scrollHandler);
});