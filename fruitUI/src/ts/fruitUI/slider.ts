import { UIComponent } from '../types/types';

const Slider = (): void => {
  const slides: UIComponent = document.querySelector(".slider .slides");
  const allSlides: NodeListOf<Element> = document.querySelectorAll(".slider .slide");
  const slidesLength: number = allSlides.length;
  const slideWidth: number = allSlides[0].offsetWidth;

  let index: number = 0;
  let posX1: number;
  let posX2: number;
  let initialPosition: number;
  let finalPosition: number;
  let canISlide: boolean = true;
  const prev: UIComponent = document.querySelector(".slider .prev");
  const next: UIComponent = document.querySelector(".slider .next");
  const nextSvg: string = `<svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
  const prevSvg: string = `<svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>`;
  next.innerHTML = nextSvg;
  prev.innerHTML = prevSvg;
  const firstSlide = allSlides[0];
  const lastSlide = allSlides[allSlides.length - 1];
  const cloneFirstSlide = firstSlide.cloneNode(true);
  const cloneLastSlide = lastSlide.cloneNode(true);
  slides.appendChild(cloneFirstSlide);
  slides.insertBefore(cloneLastSlide, firstSlide);
  next.addEventListener("click", () => switchSlide("next"));
  prev.addEventListener("click", () => switchSlide("prev"));
  slides.addEventListener("transitionend", checkIndex);
  slides.addEventListener("mousedown", dragStart);
  slides.addEventListener("touchstart", dragStart);
  slides.addEventListener("touchmove", dragMove);
  slides.addEventListener("touchend", dragEnd);

  function dragStart(e: { preventDefault: () => void; type: string; touches: { clientX: number; }[]; clientX: number; }) {
    e.preventDefault();
    initialPosition = slides.offsetLeft;
    if (e.type == "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragMove;
    }
  }
  function dragMove(e: { type: string; touches: { clientX: number; }[]; clientX: number; }) {
    if (e.type == "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    slides.style.left = `${slides.offsetLeft - posX2}px`;
  }
  function dragEnd() {
    /* 
    three possibilities:
    1. next slide
    2. prev slide
    3. stay still
    */
    finalPosition = slides.offsetLeft;
    if (finalPosition - initialPosition < -196) {
      switchSlide("next", "dragging");
    } else if (finalPosition - initialPosition > 196) {
      switchSlide("prev", "dragging");
    } else {
      slides.style.left = `${initialPosition}px`;
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function switchSlide(arg: string, arg2: string | undefined) {
    slides.classList.add("transition");
    if (canISlide) {
      if (!arg2) {
        initialPosition = slides.offsetLeft;
      }
      if (arg == "next") {
        slides.style.left = `${initialPosition - slideWidth}px`;
        index++;
      } else {
        slides.style.left = `${initialPosition + slideWidth}px`;
        index--;
      }
    }
    canISlide = false;
  }

  function checkIndex() {
    slides.classList.remove("transition");
    if (index == -1) {
      slides.style.left = `-${slidesLength * slideWidth}px`;
      index = slidesLength - 1;
    }
    if (index == slidesLength) {
      slides.style.left = `-${1 * slideWidth}px`;
    index = 0;
    }
    canISlide = true;
  }
};

export default Slider;