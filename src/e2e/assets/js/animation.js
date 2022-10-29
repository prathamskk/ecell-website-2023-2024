const pieRotateMax = 360;

gsap.set("#scrolling_container", { width: "100%", height: "100vh" });
const sacredTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#scrolling_container",
    scrub: true,
    start: "top top",
    end: "+=5000 top",
    // markers: true,
    pin: true,
    // pinSpacing: false,
  },
});

const firstSectionTextAnimEngi = () => {
  const tl = gsap.timeline();
  tl.from(".section_1_text_anim_engi", {
    opacity: 0,
    scale: 5,
    "-webkit-filter": "blur(25px)",
  });
  tl.to(".section_1_text_anim_engi", {
    opacity: 1,
    "-webkit-filter": "blur(0px)",
    scale: 1,
    duration: 3,
  });
  tl.to(".section_1_text_anim_engi", {
    opacity: 0,
    "-webkit-filter": "blur(25px)",
    scale: 0,
    duration: 1,
  });
  return tl;
};

const pieAntiClockWiseAnim = () => {
  const tl = gsap.timeline();
  tl.from(".anticlockwise_anim", {
    opacity: 0,
    rotation: pieRotateMax,
    scale: 0,
  });
  tl.to(".anticlockwise_anim", {
    opacity: 1,
    rotation: 0,
    scale: 1,
    duration: 2,
  });
  tl.to(".anticlockwise_anim", {
    opacity: 0,
    rotation: -pieRotateMax,
    scale: 3,
    duration: 1,
  });
  return tl;
};

// Lets build the timeline now
const firstSectionTextAnim = () => {
  const tl = gsap.timeline();
  tl.from(".section_1_text_anim", {
    opacity: 0,
    scale: 5,
    "-webkit-filter": "blur(25px)",
  });
  tl.to(".section_1_text_anim", {
    opacity: 1,
    "-webkit-filter": "blur(0px)",
    scale: 1,
    duration: 1,
  });
  tl.to(".section_1_text_anim", {
    opacity: 0,
    "-webkit-filter": "blur(25px)",
    scale: 0,
    duration: 1,
  });
  return tl;
};

sacredTimeline.add(firstSectionTextAnimEngi(), 0);
sacredTimeline.add(pieAntiClockWiseAnim(), 1);
sacredTimeline.add(firstSectionTextAnim(), 2);

gsap.set(".main", {
  background: "#fff",
  width: "100%",
  maxWidth: "1200px",
  height: "100%",
  top: 0,
  left: "50%",
  x: "-50%",
});
gsap.set(".scrollDist", { width: "100%", height: "100vh" });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scrollDist",
      start: "top top",
      end: "+=4000 top",
      scrub: 1,
      pin: true,
      // markers: true,
      // pinSpacing: false,
    },
  })
  .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
  .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
  .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
  .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
  .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
  .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
  .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

$("#arrowBtn").on("mouseenter", (e) => {
  gsap.to(".arrow", {
    y: 10,
    duration: 0.8,
    ease: "back.inOut(3)",
    overwrite: "auto",
  });
});
$("#arrowBtn").on("mouseleave", (e) => {
  gsap.to(".arrow", {
    y: 0,
    duration: 0.5,
    ease: "power3.out",
    overwrite: "auto",
  });
});
$("#arrowBtn").on("click", (e) => {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 0.5,
    ease: "power1.out",
  });
}); // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
