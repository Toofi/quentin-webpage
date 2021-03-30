import { Template } from "./templates.js";

const template = new Template;

export class Controller {
  body = document.getElementById('body');

  getCv = () => {
    body.style.opacity = 0;
    setTimeout(() => {
      body.style.transition = 'opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1)';
      
    }, 1);
    body.innerHTML = template.getCvTemplate();
    setTimeout(() => {
      body.style.opacity = 100;
    }, 1);
  }
};
