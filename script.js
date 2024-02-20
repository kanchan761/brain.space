function loco() {
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
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()

document.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    top: dets.y,
    left: dets.x,
    // duration:1
  })
})


// var main = document.querySelector("button").addEventListener("mouseenter",function(){
// gsap.to(".cursor",{
// scale:2,
// backgroundColor:"black",
// mixBlendMode: "darken",

// })
// })
// var main = document.querySelector(" button").addEventListener("mouseleave",function(){
//   gsap.to(".cursor",{
//   scale:1,
//   backgroundColor:"rgba(86, 63, 63, 0.552)",
//   mixBlendMode: "difference",

//   })
//   })

function page1() {

  gsap.to(".page1>video", {
    filter: "blur(20px)",
    transform: "scaleX(0.86)",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      // markers:true,
      start: "top 0%",
      end: "top -50%",
      scrub: true
    }
  })

  gsap.to(".nav2", {
    // display:none,
    y: -200,
    // duration:1,
    scrollTrigger: {
      trigger: ".nav2",
      scroller: ".main",
      start: "top 0%",
      end: "top -10%",
      scrub: "true"


    }
  })

  gsap.to(".nav>i", {
    display: "block",

    duration: 1,
    scrollTrigger: {
      trigger: ".nav",
      scroller: ".main",
      // markers:true,
      start: "top -15%",
      end: "top -20%",
      scrub: "true"
    }
  })


  document.querySelector(".nav i").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 2,
      zIndex: 9,
      mixBlendMode: "darken",
      backgroundColor: "black"
    })
    gsap.to(".nav i", {
      color: "white",
    })

  })
  document.querySelector(".nav i").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 1,
      zIndex: 9,
      mixBlendMode: "difference",
      backgroundColor: "rgba(86, 63, 63, 0.552)"
    })
    gsap.to(".nav i", {
      color: "black",
    })

  })

  document.querySelector(".nav i").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 2,
      zIndex: 9,
      mixBlendMode: "darken",
      backgroundColor: "black"
    })
    gsap.to(".nav i", {
      color: "white",
    })

  })
  document.querySelector(".nav2").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 2,
    })
  })
  document.querySelector(".nav2").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 1,
    })
  })

  var text = "We are brain space. The brain data company"

  var splittedtext = text.split("")

  var clutter = ""

  splittedtext.forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  var h1text = document.querySelector(".page1 h1")

  h1text.innerHTML = clutter
  gsap.to(".page1 h1 span", {
    display: "initial",
    stagger: 0.1,
    repeat: -1,
  })

}

page1()

function page2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2 h1 ",
      scroller: ".main",
      start: "top 60%",
      end: "top 10%",
      // markers:true,
      scrub: 2
    }
  })
  gsap.to(".page2 img", {
    x: "69%",
    duration: 6,
    repeat: -1,
    ease: "none"

  })

  tl2.from(".page2 h1", {
    y: 50,
    opacity: 0,
    scale: 1.08,
  })

  tl2.from(".page2 p", {
    y: 50,
    opacity: 0,
    scale: 1.08,
  })
  tl2.from(".right2 button", {
    y: 50,
    opacity: 0,
    scale: 1.3,

  })
}

page2()

function page3() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3 h1",
      scroller: ".main",
      start: "top 60%",
      end: "top -10%",
      // markers:true,
      scrub: 2
    }
  })

  tl3.from(".page3 h1", {
    y: 50,
    opacity: 0,
    scale: 1.08,
  })


  var time = gsap.timeline({
    scrollTrigger: {
      trigger: ".right3",
      scroller: ".main",
      start: "top 60%",
      end: "top -10%",
      // markers:true,
      scrub: 2
    }
  })
  time.from(".right3 video", {
    y: 50,
    opacity: 0,
    scale: 1.08,
  })


  tl3.from(".page3 p", {
    y: 50,
    opacity: 0,
    scale: 1.08,
  })
  tl3.from(".right3 button", {
    y: 50,
    opacity: 0,
    // scale:1.03,

  })

}
page3()

function page4or5() {

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: ".main",
      start: "top 78%",
      end: "top 10%",
      // markers: true,
      scrub: 2
    }
  })

  tl4.from(".content4-1 h1,.content4-1 p,.content4-1 button", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    stagger: 0.3
  })

  tl4.from(".content4-2>.left>h3", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    stagger: 0.3
  }, "hey")


  tl4.from(".content4-2>.right>video", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    // stagger:0.3
  }, "hey")


  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4 video",
      scroller: ".main",
      start: "top 20%",
      end: "top 10%",
      // markers: true,
      scrub: 2
    }
  })

  tl5.from(".content4-3>.left>video", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    // stagger:0.3
  }, "heyy")


  tl5.from(".content4-3>.right>h3,.content4-3>.right>button", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    stagger: 0.3
  }, "heyy")

  var tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4 .content4-4 h3",
      scroller: ".main",
      start: "top 79%",
      end: "top 40%",
      // markers: true,
      scrub: 2
    }
  })

  tl6.from(".content4-4>.left>h3", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    // stagger: 0.3
  }, "heyyy")

  tl6.from(".content4-4>.right>video", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    // stagger:0.3
  }, "heyyy")

  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4 .content4-5 h3",
      scroller: ".main",
      start: "top 79%",
      end: "top 40%",
      // markers: true,
      scrub: 2
    }
  })

  tl7.from(".content4-5>.left>video", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    // stagger:0.3
  }, "heyyyyy")


  tl7.from(".content4-5>.right>h3,.content4-5>.right>button", {
    y: 50,
    opacity: 0,
    scale: 1.08,
    stagger: 0.3
  }, "heyyyyy")



  var tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      start: "top 7",
      end: "top -80%",
      // markers:true,
      pin: true,
      scrub: 3
    }
  }
  )


  tl8.to(".page5-in", {
    transform: "translatex(-85%)"

  }, "hii")

  tl8.to(".page5 .slider2", {
    x: 630,
    scrub: 4,
  }, "hii")
}

page4or5()

function page6() {
  var time1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page6 ",
      scroller: ".main",
      start: "top 80%",
      end: "top -100%",
      // markers:true,
      scrub: 2,

    }
  })

  time1.from(".page6 h1 ", {
    y: 40,
    opacity: 0,
    scale: 1.08,

  })
  time1.from(".left6 p", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  }, "page6")

  time1.from(".right6 p,.right6 h5", {
    y: 40,
    opacity: 0,
    scale: 1.08,
    stagger: 1
  }, "page6")


  time1.from(".svg6", {
    y: 30,
    scale: 1.4,
    // duration:1,
    opacity: 0
  })

  time1.from(".page6 h4", {
    y: 40,
    // delay:0.6,
    scale: 1.8,
    opacity: 0
  })

  time1.from(".page6 button", {
    y: 40,
    // delay:0.2,
    scale: 1.8,
    opacity: 0
  })
}

page6()

function page7() {
  var time2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page7 h5",
      scroller: ".main",
      start: "top 90%",
      end: "top 70%",
      // markers:true,
      scrub: 2,

    }
  })
  time2.from(".left7 h5,.left7 p", {
    y: 40,
    opacity: 0,
    scale: 1.4,
    stagger: 1,
  }, "7")
  time2.from(".right7 img", {
    y: 40,
    opacity: 0,
    // scale:1.3,
    // stagger:1,
  }, "7")

  time2.from(".images7", {
    y: 40,
    opacity: 0,
    // scale:1.3,
    // stagger:1,
  })
  time2.from(".para7", {
    y: 40,
    opacity: 0,
    // scale:1.3,
    // stagger:1,
  })
}
page7()

function page8() {
  var time3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page8 h4",
      scroller: ".main",
      start: "top 90%",
      end: "top -10%",
      // markers:true,
      scrub: 2,

    }
  })
  time3.from(".left8 h4", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  }, "p")

  time3.from(".right8 h6,.right8 p", {
    y: 40,
    opacity: 0,
    scale: 1.08,
    stagger: 0.8,
  }, "p")

  time3.from(".c1", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  })
  time3.from(".c2", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  })
  time3.from(".c3", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  })
  time3.from(".c4", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  })
  time3.from(".c5", {
    y: 40,
    opacity: 0,
    scale: 1.08,
  })


  var time4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bottom8",
      scroller: ".main",
      start: "top 90%",
      end: "top 70%",
      // markers:true,
      scrub: 2,
    }
  })
  time4.from(".bottom8 h1", {
    y: 40,
    opacity: 0,
    scale: 1.3,
  }, "8")
  time4.from(".bottom8 p", {
    y: 40,
    opacity: 0,
    scale: 1.3,
  })
  time4.from(".bottom8 h6", {
    y: 40,
    opacity: 0,
    scale: 1.3,
  })

}
page8()

function page9() {
  var time5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".top9",
      scroller: ".main",
      start: "top 80%",
      end: "top 40%",
      // markers:true,
      scrub: 2,
    }
  })

  time5.from(".top9 h3", {
    y: 40,
    opacity: 0,
    scale: 1.3,
  }, "page9")
  time5.from(".top9 p", {
    y: 40,
    opacity: 0,
    scale: 1.3,
  })
  time5.from(".top9 h6", {
    y: 40,
    opacity: 0,
    scale: 1.3,
  })
  time5.from(".top9 video", {
    y: 40,
    opacity: 0,

  }, "page9")
}

page9()

function page10() {
  var time6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page10",
      scroller: ".main",
      start: "top 70%",
      end: "top -10%",
      // markers:true,
      scrub: 2,
    }
  })

  time6.from(".gsap1", {
    y: 40,
    opacity: 0
  })
  time6.from(".gsap2", {
    y: 40,
    opacity: 0
  })


  time6.from(".page10 h2", {
    y: 40,
    opacity: 0
  })
  // time6.from(".page10>button",{
  //   y:40,
  //   opacity:0
  // })

}
page10()

function page11() {
  var time6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page11",
      scroller: ".main",
      start: "top 70%",
      end: "top -10%",
      // markers:true,
      scrub: 2,
    }
  })

  time6.from(".page11 h1,.page11 p", {
    opacity: 0,
    y: 40,
  })

}
page11()



document.querySelector(".page8").addEventListener("mousemove", function (dets) {
  document.querySelector(".page8").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px, lightpink,lightblue,lightgreen,rgb(234, 237, 171),lightpink,lightyellow,rgb(158, 197, 197),lightpink)`;
})



