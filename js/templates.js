export class Template {

  getHomePageTemplate = () => {
    return `
    <div class="pic">
    <img src="/src/portrait.jpg" alt="my face">
    </div>
  <div class="presentation">
    <div class="names">
      <p>Hello !</p>
      <p>I'm Quentin, I am an IT student.</p>
      <p>I love coding, learning and playing with my children.</p>
    </div>
    <ul class="social-container">
      <li><a href="https://twitter.com/90toofi"><img class="social-link" src="/src/twitter-5-512.png"
            alt="twitter link"></a></li>
      <li><a href="https://www.facebook.com/quentin.h.toofi"><img class="social-link" src="/src/facebook-5-512.png"
            alt="facebook link"></a></li>
      <li><a href="https://https://github.com/Toofi"><img class="social-link" src="/src/github-10-512.png"
            alt="github link"></a></li>
      <li><a href="https://www.linkedin.com/in/herpoel-quentin-834147146/"><img class="social-link"
            src="/src/linkedin-5-512.png" alt="linkedin link"></a></li>
    </ul>
    <ul>
      <p>My works :</p>
      <li><a class="link" href="https://github.com/Toofi/tf-framework">A never finished CSS Framework</a></li>
      <li><a class="link" href="https://github.com/Toofi/url-reducer">An url reducer</a></li>
      <li><a class="link" href="https://github.com/Toofi/wp-theme">My own Wordpress theme</a></li>
      <li><a class="link" href="https://github.com/Toofi/restaurantApp">An Angular app I made for my first
          internship</a></li>
    </ul>
  </div>
    `
  };

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
        <li><p class="cv-title">Javascript <span class="annot">(ES7, Node, Express)</span></p></li>
        <li><p class="cv-title">Typescript <span class="annot">(Angular, NestJS)</span></p></li>
        <li><p class="cv-title">CSS <span class="annot">(& SCSS)</span></p></li>
        <li><p class="cv-title">SQL <span class="annot">(MySQL)</span></p></li>
        <li><p class="cv-title">NoSQL <span class="annot">(MongoDB & Firebase)</span></p></li>
        <li><p class="cv-title">Git <span class="annot">(Github & Bitbucket)</span></p></li>
        <li><p class="cv-title">Docker <span class="annot">(& Docker-compose)</span></p></li>
      </ul>
    </div>
  </div>
    `
  };
};
