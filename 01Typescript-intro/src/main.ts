import './style.css'
//import { name, age, templateString } from './bases/01-types';
import { pokemonIds } from './bases/02-objects'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
` + `<h1>Hello ${pokemonIds.join(":)")} </h1>` 
//+ `<h2>Hello ${templateString} </h2>`