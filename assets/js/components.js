class Nav extends HTMLElement {

  connectedCallback() {

    const logo = `<a class="logo" href="/">
    <picture >
    <source srcset="./assets/img/logo.avif" type="image/avif" height="70" />
    <img alt="Logo" src="./assets/img/logo.png" height="70" />
  </picture>
  </a>
  `;
  
    this.innerHTML = `
            <nav>
              ${logo}
                <ul>
                ${
                  window.location.pathname === "/" | window.location.pathname === "/index.html" ? `
                    <li>Filip Troníček - home</li>
                    <ul>
                    <li><a href="#intro">What do I do</a></li>

                    <li><a href="#portfolio">Portfolio</a></li>

                    <li><a href="#contact">Where to find me</a></li>

                    <li><a href="#certs">Certifications</a></li>
                    </ul>
                    `
                    : (window.location.pathname === "/stats") |
                      (window.location.pathname === "/stats.html") ? `<li><a href="/">Filip Troníček - home</a></li>`
                    : ""
                }
                    <li>
                      <a rel="noreferrer" href="https://blog.trnck.dev">Blog</a>
                    </li>
                    <li>
                      <a rel="noreferrer" href="https://thanks.trnck.dev">Thanks page</a>
                    </li>
                    <li>
                      <a rel="noreferrer" href="https://status.trnck.dev">Status</a>
                    </li>
            </nav>
      `;
  }
}
class Foot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <hr />
          <span>
            Coded in ${new Date().getFullYear()} with &lt;3 by Filip
          </span>
          <span style="float: right">
            Deployed from commit <span id="commit"> </span>
          </span>
    </footer>
    `;
  }
}

customElements.define("site-nav", Nav);
customElements.define("site-footer", Foot);
