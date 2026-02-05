gsap.registerPlugin(ScrollTrigger);

gsap.set(".zindex-container", {
  perspective: 400,
  transformOrigin: "center center"
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zindex-container",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});



/* z 軸演出 */
tl.to(".section1", {
  z: 400,
  opacity: 0,
  duration: 3
})
.to(".section2", {
  z: 100,
  opacity: 1,
  duration: 1
})

/* 👇 ここが肝 */
.to(".zindex-container", {
  scale: 1,
  yPercent: -50,
  autoAlpha: 1,
  duration: 1,
  ease: "power2.inOut"
})
// .to(".black-container", {
//   y: 0,
//   autoAlpha: 1,
//   duration: 1,
//   ease: "power2.out"
// }, "<"); 
// ← 完全同時

 // 上に200px移動
// gsap.to(".section1 .title", {
//   y: -200,  
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "top top",
//     end: "bottom top",
//     scrub: true
//   }
// });

gsap.to(".section1 .subtitle", {
  y: -150,   // 上に150px移動
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

