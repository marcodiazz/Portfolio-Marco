// first screen
gsap.from("#developer", {opacity:0, y:"-100%", duration:1})
gsap.from("#profilePhoto", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#marco", {opacity:0, x:"100%", duration:1.5})
gsap.from("#diaz", {opacity:0, x:"100%", duration:1.5})
gsap.from("#description", {opacity:0, x:"100%", duration:1.5})

// about me
gsap.from("#aboutMe",  {scrollTrigger:{
    trigger:"#aboutMe",
    start:"center center",
    scrub: true}
    , opacity:0, y:"-100%", duration:1})

let tl = gsap.timeline({scrollTrigger:{
    trigger:"#macbookSection",
    start: "top top",
    pin: true,
   }
})
tl.from(".block1 img", {opacity: 0, x:"-100%", duration: 1})
tl.from(".block1 .textBlock", {opacity: 0, x:"100%", duration: 1})

// gsap.from("#macScreen",  {scrollTrigger:{
//     trigger:"#macbookSection",
//     start: "center center",
//     pin: true,},
//      opacity: 0, duration: 5})

// knowledge
gsap.from("#knowledge",  {scrollTrigger:{
    trigger:"#knowledge",
    start:"20% bottom",
    scrub:1}
    , opacity:0, y:"-100%", duration:1})


// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

