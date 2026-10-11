import gsap from "gsap";

const btn = document.querySelector(".x");
const box = document.querySelector(".box");
const menu = document.querySelector(".menu");
const a = document.querySelector("a");

box.classList.add("box1");
const tl = gsap.timeline();

tl.pause();

menu.addEventListener("click", () => {
  menu.classList.add("menu1");
  tl.restart();
});

tl.to(".box", {
  x: -310,
  ease: "power2",
  duration: 1,
});

tl.to(
  "a",
  {
    x: -70,
    opacity: 1,
    ease: "power2",
    stagger: {
      each: 0.2,
      from: "start",
      ease: "liner",
    },
  },
  "<",
);

tl.from(
  ".x",
  {
    delay: 0.5,
    ease: "bounce",
    x: 70,
  },
  "<",
);

btn.addEventListener("click", () => {
  menu.classList.remove("menu1");
  gsap.to(".box", {
    x: 0,
    ease: "power2.inOut",
    duration: 0.5,
  });
});
