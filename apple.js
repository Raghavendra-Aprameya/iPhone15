gsap.from(".a17-image", {
  opacity: 0,
  scale: 1.5,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".a17-image",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
  scrub: true,
});
