// first screen
gsap.from("#developer", {opacity:0, y:"-100%", duration:1})
gsap.from("#profilePhoto", {opacity:0, x:"-100%", duration:1.5})
gsap.from("#marco", {opacity:0, x:"100%", duration:1.5})
gsap.from("#diaz", {opacity:0, x:"100%", duration:1.5})
gsap.from("#description", {opacity:0, x:"100%", duration:1.5})

// about me
gsap.from("#aboutMe",  {scrollTrigger:{
    trigger:"#aboutMe",
    start:"bottom center",
    scrub: true}
    , opacity:0, y:"-180%", duration:1})

let tl = gsap.timeline({scrollTrigger:{
    trigger:"#macbookSection",
    start: "top top",
    pin: true,
   }
})
tl.from(".block1 img", {opacity: 0, x:"-100%", duration: 1})
tl.from(".block1 .textBlock", {opacity: 0, x:"100%", duration: 1})

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


document.getElementById("downloadCV").addEventListener("click", function() {
    var pdfUrl = "CV_MarcoDiaz.pdf";
    window.open(pdfUrl, "_blank");
});


// CURSOR 
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#EA80FC"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
