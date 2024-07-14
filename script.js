gsap.registerPlugin(ScrollTrigger);


let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#part-5",
    start: "50% 50%",
    end: "500% 100%",
    pin: true,
    scrub: 2,
    markers: true,
  },
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#cir",
    start: "50% 50%",
    end: "100% 70%",
    pin: true,
    //markers: true,
    scrub: 1,
  },
});


tl2.to("#scroll-1", 
{
  bottom: "60vh",
})
.to("#scroll-1", 
{
  opacity: 0,
})
.to("#scroll-2", 
{
  opacity: 1,
}, 'arrf')
.to(".phone-img", 
{
  x: "-30%",
}, 'arrf')
.to("#scroll-2", 
{
  bottom: "60vh",
})
.to("#scroll-2", 
{
  opacity: 0,
})
.to("#scroll-3", 
{
  opacity: 1,
}, 'arrs')
.to(".phone-img", 
{
  x: "-59%",
}, 'arrs')
.to("#scroll-3", 
{
  bottom: "60vh",
})
.to("#scroll-3", 
{
  opacity: 0,
})
.to("#scroll-4", 
{
  opacity: 1,
}, 'arrt')
.to(".phone-img", 
{
  x: "-88%",
}, 'arrt')

tl4.to("#cir", {
    marginLeft: "100%",
    rotate: 360,
    ease: "none", // Add easing for smooth rotation
}, 'arrt');

