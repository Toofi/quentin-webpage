import { Controller } from './js/controller.js';

let controller = new Controller;

document.getElementById("index").addEventListener('click', (e) => {
});

document.getElementById('cv').onclick = () => {
  controller.getCv();
};