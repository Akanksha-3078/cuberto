//import Shery from "sheryjs"
Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr",{ videos: ["./0.mp4","./2.mp4","./3.mp4"]})
// const follower = document.getElementById('follower');

//     document.addEventListener('mousemove', (e) => {
//         follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });
gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 3,
  // config: {
  //   onMouse: { value: 1 }
  // },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
          //console.log(prog);
        },
      });
    });
  },
});
// Shery.imageEffect(".images", {
//     style: 5,
//     slideStyle: (setScroll) => {
     
//     },
//   });