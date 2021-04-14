import { Template } from "./templates.js";

const template = new Template;

export class Controller {
  body = document.getElementById('body');

  getHomePage = () => {
    this.getAnimation(template.getHomePageTemplate());
  };

  getCv = () => {
    this.getAnimation(template.getCvTemplate());
  };

  getAnimation = (template) => {
    body.style.opacity = 0;
    setTimeout(() => {
      body.style.transition = 'opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1)';

    }, 1);
    body.innerHTML = template;
    setTimeout(() => {
      body.style.opacity = 500;
    }, 1);
  }
};
