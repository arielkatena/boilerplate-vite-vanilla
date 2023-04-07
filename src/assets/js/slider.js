// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
}

export default slider