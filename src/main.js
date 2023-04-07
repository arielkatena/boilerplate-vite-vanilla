import './assets/css/style.scss'
import javascriptLogo from './assets/imgs/javascript.svg'
import viteLogo from './assets/imgs/vite.svg'
import slider from './assets/js/slider'
import { setupCounter } from './assets/js/counter.js'


document.querySelector('#app > .main').innerHTML += `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div> 
  </div>
`

setupCounter(document.querySelector('#counter'))
slider();