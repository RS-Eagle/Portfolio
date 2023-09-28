alert("Under Dvelopment");

let nexAnimation = false;

VANTA.NET({
  el: "#mainn",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x4169e1,
  backgroundColor: 0x1a1a1a,
  points: 20.0,
  spacing: 16.0,
});

// https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js

// $("img").tilt({
//   scale: 1.1,
//   maxTilt: 25,
//   perspective: 1000,
//   easing: "cubic-bezier(.03,.98,.52,.99)",
// });

const tl = gsap.timeline({
  stagger: 1,

  scrollTrigger: {
    trigger: "body",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -800%",
    pin: ".main-screen",
    scrub: 1,
  },
});

tl.to(".tex1", {
  bottom: "90%",
  opacity: 0,
});

tl.to(".tex2", {
  bottom: "40%",
  opacity: 1,
  delay: 1,
});

tl.to(".c2,.c3", {
  opacity: 1,
  stagger: 1,
});

tl.to(".tex2", {
  bottom: "90%",
  opacity: 0,
});
tl.to(".tex3", {
  bottom: "40%",
  opacity: 1,
  stagger: 1,
});

tl.to(".tex3", {
  bottom: "90%",
  opacity: 0,
});
tl.to(".tex4", {
  bottom: "40%",
  opacity: 1,
});
tl.to(".d2,.d3", {
  opacity: 1,
  stagger: 1,
  onComplete() {
    // console.log("Hoo");
    nexAnimation = true;
  },
});

gsap.to(".newani", {
  y: "110vh",
  x: "-55vw",
  zIndex: 10,

  scrollTrigger: {
    trigger: ".aboutme > h2",
    scroller: "body",
    scrub: 1,
  },
});

gsap.to(".newani", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".aboutme",
    scroller: "body",
    start: "top 0%",
    end: "top -25%",
    pin: ".aboutme",
  },
});

const typewriting_class = document.querySelector(".aboutpara p");

const line =
  " Hello, I'm Raman Kumar Charak, hailing from the beautiful district of <b> Himachal Pradesh </b>. I'm a passionate frontend developer, dedicated to crafting immersiveand user-friendly web experiences. Let's create some digital magic together! 🚀🌟 #FrontEndDev #HimachalPride";
let index = 1;

function writing(line) {
  // console.log(index);
  let updatedline = line.slice(0, index);
  typewriting_class.innerHTML = updatedline;
  setTimeout(() => {
    if (index < line.length) {
      index++;

      writing(line);
    }
  }, 10);
}

function isInViewport(typewriting_class) {
  const rect = typewriting_class.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let activator = false;
document.addEventListener("scroll", function () {
  if (isInViewport(typewriting_class)) {
    if (!activator) {
      writing(line);
      activator = true;
    }
  }
});

VANTA.WAVES({
  el: "#about",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x121214,
  shininess: 5.0,
  waveHeight: 20.0,
  waveSpeed: 0.75,
  zoom: 0.65,
});

let aa = 1;
let widthval = 0;

let a = document.querySelectorAll(".box");

a.forEach((element) => {
  widthval = 0;

  element.addEventListener("mouseover", () => {
    element.classList.toggle("activeState");
    document.querySelector(".activeState .range-default .value").style.width =
      "0%";
    element.lastElementChild.classList.toggle("doorOpen");
    const newINT = setInterval(() => {
      if (widthval >= 100) {
        clearInterval(newINT);
      }
      widthval = widthval + aa;
      document.querySelector(
        ".activeState .range-default .value"
      ).style.width = `${widthval}%`;
    }, 10);
  });
});

a.forEach((element) => {
  element.addEventListener("mouseout", () => {
    widthval = 0;
    document.querySelector(".activeState .range-default .value").style.width =
      "0%";
    element.classList.toggle("activeState");
    element.lastElementChild.classList.toggle("doorOpen");
  });
});
