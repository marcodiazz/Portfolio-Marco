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


// Projects
gsap.from("#projectTitle",  {scrollTrigger:{
    trigger:"#projectTitle",
    start:"top bottom",
    scrub:1}
    , opacity:0, y:"-100%", duration:1})

// contact
gsap.from("#contactTitle",  {scrollTrigger:{
    trigger:"#contactTitle",
    start:"20% bottom",
    scrub:1}
    , opacity:0, y:"-100%", duration:1})

if(document.documentElement.clientWidth < 600){
    gsap.from(".codeLine",  {scrollTrigger:{
        trigger:".codeLine",
        end:"0% 70%",
        scrub:1}
        , opacity:0, x:"-200%", duration:1})
}
else{
    gsap.from(".codeLine",  {scrollTrigger:{
        trigger:".codeForm",
        end:"-30% 0%",
        scrub:1}
        , opacity:0, x:"-150%", duration:1})
}
