gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function cursorani(){
let cir=document.getElementById("cursor");
document.addEventListener("mousemove",(e)=>{
  gsap.to(cir,{
    x:e.clientX,
    y:e.clientY,
    duration:0.3,
      ease: "expo.out",

  });
});
let all=document.querySelectorAll(".cani");
all.forEach((e)=>{
  e.addEventListener("mouseenter",()=>{
    gsap.to(cir,{
      width:"15vh",
      height:"5vh",
      borderRadius: "50px",
      fontSize: "2.5vh",
      duration:0.5,
      ease: "expo.out",
    });
  });
  e.addEventListener("mouseleave",()=>{
    gsap.to(cir,{
      width:"5vh",
      height:"5vh",
      borderRadius: "50%",
      fontSize: "0",
      duration:0.5,
      ease: "expo.out",
    });
  });
});
let frame3=document.getElementById("frame-page3");

const lerp = (x, y, a) => x * (1 - a) + y * a;
frame3.addEventListener("mousemove",(e)=>{
  let dim=frame3.getBoundingClientRect();
  let xstart=dim.x;
  let xend=dim.x+dim.width;
  let zo=gsap.utils.mapRange(xstart,xend,0,1,e.clientX);
  
  gsap.to(cir,{
   scale:9.6 
  });
  gsap.to("#frame-page3 span",{
    
    y:"-10vh",
    duration:0.23,
     x:lerp(-60, 60, zo),

  });

  
});
frame3.addEventListener("mouseleave",()=>{
  gsap.to(cir,{
   scale:1
  });
  gsap.to("#frame-page3 span",{

    y:"0",
    duration:0.23,
    x:0,

  });
});
document.getElementById("tf").addEventListener("mousemove",(e)=>{
  let dim=tf.getBoundingClientRect();
  let xstart=dim.x;
  let xend=dim.x+dim.width;
  let zo=gsap.utils.mapRange(xstart,xend,0,1,e.clientX);

  gsap.to(cir,{
   scale:6 
  });
  gsap.to("#tf h3",{

    y:"-5vh",
    duration:0.23,
     x:lerp(-40, 40, zo),

  });
});
document.getElementById("tf").addEventListener("mouseleave",(e)=>{
   gsap.to(cir,{
     scale:1
    });
    gsap.to("#tf h3",{

      y:"0",
      duration:0.23,
       x:"0",

    });
});


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image");
        cir.style.width = "32vw";
        cir.style.height = "50vh";
        cir.style.borderRadius = "0";
        cir.style.mixBlendMode="normal";
        cir.style.backgroundImage = `url(${att})`;
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent";
        cir.style.width = "5vh";
        cir.style.height = "5vh";
        cir.style.borderRadius = "50%";
      cir.style.mixBlendMode="difference";
        cir.style.backgroundImage = `none`;
    })
})
gsap.to(".ytext",{
  transform: "translateX(-120%)",
    duration:3.9,
    ease: "none",
    repeat:-1
})
var h40 = document.querySelectorAll("#nav h4")[0];
var h41 = document.querySelectorAll("#nav h4")[1];
var h42 = document.querySelectorAll("#nav h4")[2];
var h43 = document.querySelectorAll("#nav h4")[3];
var nav3=document.getElementById("nav-part3");
let c1=document.getElementById("circle1");

var yellow1 = document.querySelector("#yellow1");
var yellow2 = document.querySelector("#yellow2");
var yellow3 = document.querySelector("#yellow3");
var yellow4 = document.querySelector("#yellow4");
var yellow5 = document.querySelector("#yellow5");
nav3.addEventListener("mouseenter",function(){
  c1.style.backgroundColor="whitesmoke";
  cir.style.width = "0";
  cir.style.height = "0";
  yellow5.style.display = "block"   
  yellow5.style.opacity = "1"
});
nav3.addEventListener("mouseleave",function(){
  c1.style.backgroundColor="transparent";
  cir.style.width = "5vh";
  cir.style.height = "5vh";
  yellow5.style.display = "none"   
  yellow5.style.opacity = "0"
});
h40.addEventListener("mouseenter",function(){
        cir.style.width = "6.5vh";
        cir.style.height = "6.5vh";
        yellow1.style.display = "block"   
        yellow1.style.opacity = "1"
    });
h40.addEventListener("mouseleave",function(){
      cir.style.width = "5vh";
      cir.style.height = "5vh";
        yellow1.style.display = "none"   
        yellow1.style.opacity = "0"
    });
h41.addEventListener("mouseenter",function(){
  cir.style.width = "6.5vh";
  cir.style.height = "6.5vh";
  yellow2.style.display = "block"   
  yellow2.style.opacity = "1"
});
h41.addEventListener("mouseleave",function(){
cir.style.width = "5vh";
cir.style.height = "5vh";
  yellow2.style.display = "none"   
  yellow2.style.opacity = "0"
});
h42.addEventListener("mouseenter",function(){
  cir.style.width = "6.5vh";
  cir.style.height = "6.5vh";
  yellow3.style.display = "block"   
  yellow3.style.opacity = "1"
});
h42.addEventListener("mouseleave",function(){
cir.style.width = "5vh";
cir.style.height = "5vh";
  yellow3.style.display = "none"   
  yellow3.style.opacity = "0"
});
h43.addEventListener("mouseenter",function(){
  cir.style.width = "6.5vh";
  cir.style.height = "6.5vh";
  yellow4.style.display = "block"   
  yellow4.style.opacity = "1"
});
h43.addEventListener("mouseleave",function(){
cir.style.width = "5vh";
cir.style.height = "5vh";
  yellow4.style.display = "none"   
  yellow4.style.opacity = "0"
});
}
cursorani();
function page1ami(){

  gsap.from("#f1 h1,#f2 h2", {
      y: 10,
      rotate: 10,
      opacity: 0,
      delay: 0.3,
      duration: 0.7
  })


  
let frame1=document.querySelectorAll("#f1")[0];
let frame2=document.querySelectorAll("#f2")[0];

frame1.addEventListener("mouseenter",()=>{
 
  gsap.to("#f1 h1",{
    y:"-16.8vh",
    duration:0.3,
    color:"yellow",
    ease: "expo.out",
    });
});
frame1.addEventListener("mouseleave",()=>{
  gsap.to("#f1 h1",{
    y:"0",
    duration:0.3,
    color:"#fff",
    ease: "expo.out",
    });
});
frame2.addEventListener("mouseenter",()=>{
 
  gsap.to("#f2 h2",{
    y:"-16.8vh",
    duration:0.3,
    color:"yellow",
    ease: "expo.out",
    });
});
frame2.addEventListener("mouseleave",()=>{
  gsap.to("#f2 h2",{
    y:"0",
    duration:0.3,
     color:"#fff",
    ease: "expo.out",
    });
});

gsap.to("#f1",{
  x:-180,
  opacity:0.3,
  scrollTrigger:{
    trigger:"#f1 h1",
      scroller:".main",
      start:"top 32%",
      end:"top 5%",
        scrub:2,
    
  } 
});
gsap.to("#f2",{
  x:180,
  opacity:0.3,
  scrollTrigger:{
    trigger:"#f1 h1",
      scroller:".main",
      start:"top 32%",
      end:"top 5%",
        scrub:2,
    
  } 
});
gsap.to("#vid",{
  width:"90%",
  scrollTrigger:{
    trigger:"#f1 h1",
      scroller:".main",
      start:"top 32%",
      end:"top 5%",
        scrub:2,
    
  } 
  
});
}
page1ami();
function page2ani(){
  var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // 
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
  })
  tl2.to(".main", {
    backgroundColor: "#fff",
  })
gsap.from("#page2-text h1",{
  x:-130,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2-text h1",
      scroller:".main",
      start:"top 52%",
      end:"top 12%",
        scrub:2,
    
  }  
})
gsap.from("#string",{
   x:-1000,
  opacity:0,
  scrollTrigger:{
    trigger:"#string",
      scroller:".main",
      start:"top 60%",
      end:"top 5%",
        scrub:2,
    
  }  
})
}
page2ani();
function page3ani(){
gsap.from("#page3-text h1", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
  staggered:0.2,
  scrollTrigger:{
    trigger:"#string",
      scroller:".main",
      start:"top 46%",
      end:"top 5%",
        scrub:2,
    
  }  
});
gsap.to("#page3-video",{
  y:55,
  scrollTrigger:{
    trigger:"#page3-video",
      scroller:".main",
      start:"top 55%",
      end:"top 10%",
        scrub:2,
    
  }  
});
gsap.to("#page3-img1",{
  y:35,
  scrollTrigger:{
    trigger:"#page3-conatiner1",
      scroller:".main",
      start:"top 55%",
      end:"top 10%",
        scrub:2,
    
  }  
});
gsap.to("#page3-img1 img",{
  height:"90%",
  scrollTrigger:{
    trigger:"#page3-conatiner1",
      scroller:".main",
      start:"top 55%",
      end:"top 10%",
        scrub:2,
    
  }  
});
gsap.to("#page3-img2",{
  y:29,
  scrollTrigger:{
    trigger:"#page3-conatiner2",
      scroller:".main",
      start:"top 55%",
      end:"top 10%",
        scrub:2,
    
  }  
});
gsap.to("#page3-img2 img",{
  height:"93%",
  scrollTrigger:{
    trigger:"#page3-conatiner2",
      scroller:".main",
      start:"top 55%",
      end:"top 10%",
        scrub:2,
    
  }  
});
}
page3ani();
function page4ani(){

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -510%",
        end: "top -487%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
});

let q1=document.querySelectorAll(".q1")[0];

 q1.addEventListener("mouseenter",()=>{
   gsap.to(".q1 h1",{
     y:"-7.6vw",
     duration:0.3,
     color:"yellow",
     ease: "expo.out",
   });
   });  
  q1.addEventListener("mouseleave",()=>{
   gsap.to(".q1 h1",{
     y:"0",
     duration:0.3,
     color:"white",
     ease: "expo.out",
   });
 
  });
  let q2=document.querySelectorAll(".q2")[0];
   q2.addEventListener("mouseenter",()=>{
     gsap.to(".q2 h1",{
       y:"-7.6vw",
       duration:0.3,
       color:"yellow",
       ease: "expo.out",
     });
     
    });
    q2.addEventListener("mouseleave",()=>{
     gsap.to(".q2 h1",{
       y:"0",
       duration:0.3,
       color:"white",
       ease: "expo.out",
     });
    
    });
    let q3=document.querySelectorAll(".q3")[0];

     q3.addEventListener("mouseenter",()=>{
       gsap.to(".q3 h1",{
         y:"-7.6vw",
         duration:0.3,
         color:"yellow",
         ease: "expo.out",
       });
      
      });
      q3.addEventListener("mouseleave",()=>{
       gsap.to(".q3 h1",{
         y:"0",
         duration:0.3,
         color:"white",
         ease: "expo.out",
       });
    
      });
gsap.from("#string1",{
  x:2300,
  opacity:0,
  scrollTrigger:{
    trigger:"#string1",
      scroller:".main",
      start:"top 66%",
      end:"top 15%",
        scrub:2,
        
  }
});
}
page4ani();
gsap.from("#page5-top #left",{
  x:-100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page5-top #left",
      scroller:".main",
      start:"top 70%",
      end:"top 36%",
        scrub:2,
        
  }
});
function page6ani(){
gsap.to("#page6-container",{
  height:"93vh",
  scrollTrigger:{
    trigger:".page6",
      scroller:".main",
      start:"top 70%",
      end:"top 29%",
        scrub:2,
        
  }
});
gsap.from("#tleft h1",{
  y:-19,
  opacity:0,
  stagger:-0.3,
  scrollTrigger:{
    trigger:".page6",
      scroller:".main",
      start:"top 28%",
      end:"top 13%",
        scrub:2,

  }
  
});
gsap.from("#bbox span",{
  y:-200,
  opacity:0,
  stagger:0.19,
  scrollTrigger:{
    trigger:"#page6-top",
      scroller:".main",
      start:"top 50%",
      end:"top 30%",
        scrub:2,
   

  }
})
}
page6ani();