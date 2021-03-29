import { Template } from "./templates.js";

let template = new Template;

export class Controller {

  getCv = () => {
    document.getElementById('body').innerHTML = template.getCvTemplate();
  }
};
