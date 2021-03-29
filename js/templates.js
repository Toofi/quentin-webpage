export class Template {

  getCvTemplate = () => {
    return `
    <div class="pic cv">
    <img src="/src/portrait.jpg" alt="my face">
  </div>
    <div class="cv-container">
      <ul class="cv-ul">
        <p class="cv-title experience">IT :</p>
        <li>
           <p class="cv-title"><a href="https://github.com/Toofi/restaurantApp">ITDM <span class="dates">(nov.2019)</span></a></p>
            <p class="title-description">Internship</p>
            <p class="title-description">I created an Angular app using UIkit, Leaflet and Firebase.</p>
        </li>
      </ul>
      <ul class="cv-ul">
        <p class="cv-title experience">Transports :</p>
        <li>
          <p class="cv-title">Cardon Logistique <span class="annot">(oct.2019-now)</span></p>
          <p class="title-description">Transport Operator</p>
        </li>
        <li>
          <p class="cv-title">Annatrans <span class="annot">(may.2018-oct.2019)</span></p>
          <p class="title-description">Dispatcher</p>
        </li>
        <li>
          <p class="cv-title">Fockedey Transports <span class="annot">(dec.2014-apr.2018)</span></p>
          <p class="title-description">Dispatcher</p>
        </li>
        <li>
          <p class="cv-title">Euroterminal <span class="annot">(~may.2014-aug.2014)</span></p>
          <p class="title-description">Internship & Logistical Assistant</p>
        </li>
      </ul>
      <ul class="cv-ul">
        <p class="cv-title experience">Skills : </p>
        <li><p class="cv-title">Javascript <span class="annot"></span></p></li>
        <li><p class="cv-title">Typescript <span class="annot">(Angular)</span></p></li>
        <li><p class="cv-title">Node <span class="annot">(Express.js, Moment)</span></p></li>
        <li><p class="cv-title">CSS <span class="annot">(& SCSS)</span></p></li>
        <li><p class="cv-title">MySQL <span class="annot"></span></p></li>
        <li><p class="cv-title">MongoDB <span class="annot"></span></p></li>
        <li><p class="cv-title">Docker <span class="annot">(& Docker-compose)</span></p></li>
        <li><p class="cv-title">Git <span class="annot">(Github & Bitbucket)</span></p></li>
      </ul>
    </div>
  </div>
    `
  };
};
