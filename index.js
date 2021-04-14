import { Controller } from './js/controller.js';

let controller = new Controller;

document.getElementById("index").addEventListener('click', (e) => {
  controller.getHomePage();
});

document.getElementById('cv').onclick = () => {
  controller.getCv();
};