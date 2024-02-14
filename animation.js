const tl = gsap.timeline();
function initAnimation() {
  let preloaderDivs = [...document.querySelectorAll(".preloader p")];
  let img = document.querySelector("img");
  tl.to(preloaderDivs, 0.5, {
    y: 0,
    delay: 1,
    stagger: 0.2,
    opacity: 1,
    ease: "easeOut",
  });
  tl.to(img, 0.5, {
    opacity: 1,
    delay: 1,
  });
  let preloader = document.querySelector(".preloader");
  tl.to(preloader, 0.5, {
    delay: 2,
    css: {
      clipPath: "inset(0 0 0 100%)",
    },
  });
}

initAnimation();
