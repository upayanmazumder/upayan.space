import { $, component$, useStore } from '@builder.io/qwik';
import BbnImage from '../../media/services/bbn.png';
import EranodesImage from '../../media/services/eranodes.png';
import carouselStyles from "./carousel.module.css";
import { BsCaretLeft, BsCaretRight } from '@qwikest/icons/bootstrap';
interface CarouselItem {
  color: string;
  imagePath: string;
  name: string;
  description: string;
  link: string;
}

const carouselData: CarouselItem[] = [
  {
    color: "#ee922c",
    imagePath: BbnImage,
    name: "BBN",
    description: "Need a music distro? We have you covered!",
    link: "https://bbn.one"
  },
  {
    color: "#941b34",
    imagePath: EranodesImage,
    name: "EraNodes",
    description: "Need a freemium hosting service? We got you covered!",
    link: "https://eranodes.com"
  }
];

export default component$(() => {
  const state = useStore<{ items: CarouselItem[]; currentIndex: number }>({
    items: carouselData,
    currentIndex: 0,
  });

  const nextSlide = $(() => {
    state.currentIndex = (state.currentIndex + 1) % state.items.length;
  });

  const prevSlide = $(() => {
    state.currentIndex = (state.currentIndex - 1 + state.items.length) % state.items.length;
  });

  return (
    <div id="services" class={carouselStyles.carouselContainer}>
      <h3>Services</h3>
      {state.items.length > 0 && (
        <div class={carouselStyles.card}>
          <img 
            src={state.items[state.currentIndex].imagePath} 
            alt={state.items[state.currentIndex].name} 
            width="60"
            height="60" 
          />
          <div class={carouselStyles.cardContent}>
            <h3 style={{ color: state.items[state.currentIndex].color }}>{state.items[state.currentIndex].name}</h3>
            <p>{state.items[state.currentIndex].description}</p>
            <a href={state.items[state.currentIndex].link} target='_blank'>Learn More</a>
          </div>
        </div>
      )}
      <div class={carouselStyles.buttonContainer}>
        <button onClick$={prevSlide} class={carouselStyles.button}><BsCaretLeft /></button>
        <button onClick$={nextSlide} class={carouselStyles.button}><BsCaretRight /></button>
      </div>
    </div>
  );
});
