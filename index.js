import { Controller } from './js/controller.js';

let controller = new Controller;

document.getElementById("index").onclick = () => {
  controller.getHomePage();
};

document.getElementById('cv').onclick = () => {
  controller.getCv();
};