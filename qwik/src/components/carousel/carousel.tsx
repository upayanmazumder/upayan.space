import { $, component$, useSignal } from '@builder.io/qwik';
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
  const currentIndex = useSignal(0);

  const nextSlide = $(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselData.length;
  });

  const prevSlide = $(() => {
    currentIndex.value = (currentIndex.value - 1 + carouselData.length) % carouselData.length;
  });

  return (
    <div id="services" class={carouselStyles.carouselContainer}>
      <h3>Services</h3>
      {carouselData.length > 0 && (
        <div class={carouselStyles.card}>
          <img 
            src={carouselData[currentIndex.value].imagePath} 
            alt={carouselData[currentIndex.value].name} 
            width="60"
            height="60"
            loading="lazy"
          />
          <div class={carouselStyles.cardContent}>
            <h3 style={{ color: carouselData[currentIndex.value].color }}>{carouselData[currentIndex.value].name}</h3>
            <p>{carouselData[currentIndex.value].description}</p>
            <a href={carouselData[currentIndex.value].link} target='_blank'>Learn More</a>
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
