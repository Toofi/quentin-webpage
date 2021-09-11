import { Template } from "./templates.js";

const template = new Template;

export class Controller {
  body = document.getElementById('body');

  getHomePage = async () => {
    this.getAnimation(await template.ajaxRequest('GET', 'presentation.html'));
  };

  getCv = async () => {
    const result = await template.ajaxRequest('GET', 'CV.html');
    this.getAnimation(result);
  };

  getAnimation = (template) => {
    const container = document.getElementById('body');
    container.style.opacity = 0;
    setTimeout(() => {
      container.style.transition = 'opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1)';

    }, 5);
    container.innerHTML = template;
    setTimeout(() => {
      container.style.opacity = 100;
    }, 5);
  }
};
