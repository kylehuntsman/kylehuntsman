let timeline;

window.onload = (event) => {
  startScrolling();
};

window.onresize = (event) => {
  startScrolling();
};

function startScrolling() {
  const scroll = document.querySelector(".scrolls .scroll");
  const scrollWidth = scroll.getBoundingClientRect().width;
  console.log(scrollWidth)

  const ANIMATION_PARAMS = {
    duration: 10,
    x: -scrollWidth,
    ease: "none",
    repeat: -1
  }

  timeline?.kill(); // Stop current timeline
  timeline = gsap.timeline(); // Create new timeline
  timeline.set(".scrolls .scroll", { x: 0 }); // Set scroll back to start
  timeline.to(".scrolls .scroll", ANIMATION_PARAMS); // Animate
}