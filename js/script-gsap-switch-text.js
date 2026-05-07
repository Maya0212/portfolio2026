// Switch text using GSAP

function switch_text(el, txt, delay, callback) {
  setTimeout(function () {
    TweenLite.to(el, 1, {
      text: { value: txt }, onComplete: function () {
        if (callback && typeof (callback) === 'function') {
          callback();
        }
      }
    });
  }, delay);
}

function init() {
  switch_text('#title span', 'Graphic Design', 0);
  switch_text('#title span', 'UI/UX Design', 2000);
  switch_text('#title span', 'Illustration', 4000, function
    () {
    // run again after 2s
    setTimeout(init, 1500);
  });
}


function blink() {
  $('#cursor').toggleClass('blink');
}

// Bink the cursor
setInterval(blink, 800);

// Init the magic
init();


// SITEFOOTER LINE

const line = document.querySelector(".sitefooter-line");
const copyright = document.querySelector(".copyright");

window.addEventListener("scroll", () => {
  const scrollBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  if (scrollBottom) {
    line.classList.add("active");

    setTimeout(() => {
      copyright.classList.add("active");
    }, 1800);

  } else {
    line.classList.remove("active");
    copyright.classList.remove("active");
  }
});

// SMOOTH SCROLL

window.addEventListener("load", () => {
  const container = document.querySelector(".horizontal-container");

  function build() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.set(container, { x: 0 });

    const distance =
      container.scrollWidth - document.documentElement.clientWidth;

    gsap.to(container, {
      x: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top",
        end: "+=" + distance,
        pin: true,
        scrub: 1
      }
    });

    ScrollTrigger.refresh();
  }

  build();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 200);
  });
});