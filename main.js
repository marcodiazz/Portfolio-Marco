// first screen
gsap.from("#developer", {opacity:0, y:"-100%", duration:1})
gsap.from("#profilePhoto", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#marco", {opacity:0, x:"100%", duration:1.5})
gsap.from("#diaz", {opacity:0, x:"100%", duration:1.5})
gsap.from("#description", {opacity:0, x:"100%", duration:1.5})

// about me
gsap.from("#aboutMe",  {scrollTrigger:{
    trigger:"#aboutMe",
    start:"20% bottom",
    scrub:1}
    , opacity:0, y:"-100%", duration:1})

// knowledge
gsap.from("#knowledge",  {scrollTrigger:{
    trigger:"#knowledge",
    start:"20% bottom",
    scrub:1}
    , opacity:0, y:"-100%", duration:1})
