let timeline;

window.onload = (event) => {
  startScrolling();
};

window.onresize = (event) => {
  startScrolling();
};

function startScrolling() {
  const scroll = document.querySelector(".scroll");
  const scrollWidth = scroll.getBoundingClientRect().width;

  const ANIMATION_PARAMS = {
    duration: 10,
    x: -scrollWidth,
    ease: "none",
    repeat: -1
  }

  timeline?.kill(); // Stop current timeline
  timeline = gsap.timeline(); // Create new timeline
  timeline.set(".scroll", { x: 0 }); // Set scroll back to start
  timeline.to(".scroll", ANIMATION_PARAMS); // Animate
}