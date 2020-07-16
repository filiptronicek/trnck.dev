class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
            <a class="logo" href="/"
                ><img alt="Filip Troníček" src="./assets/img/logo.png" height="70"
            /></a>
                <ul>
                ${
        window.location.pathname === "/"
            ? `
                    <li>Filip Troníček - home</li>
                    <ul>
                    <li><a href="#intro">What do I do</a></li>

                    <li><a href="#portfolio">Portfolio</a></li>

                    <li><a href="#contact">Where to find me</a></li>

                    <li><a href="#certs">Certifications</a></li>
                    </ul>
                    `
            : window.location.pathname === "/stats" ||
                      window.location.pathname === "/stats.html"
                  ? `<li><a href="/">Filip Troníček - home</a></li>`
                  : ""}
                    <li>
                    <a rel="noreferrer" href="https://blog.trnck.dev">Blog</a>
                    </li>
                    <li>
                    <a rel="noreferrer" href="https://thanks.trnck.dev">Thanks page</a>
                    </li>
                    <li>
                    <a
                        rel="noreferrer"
                        href="https://www.github.com/filiptronicek"
                        target="_blank"
                        >GitHub &nearr;</a
                    >
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
          <p>
            Coded in ${new Date().getFullYear()} with &lt;3 by Filip
          </p>
    </footer>
    `;
  }
}

class Analytics extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <script type="text/javascript">
      var _paq = window._paq || [];
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function () {
        var u = "//nfogix.com/";
        _paq.push(["setTrackerUrl", u + "api/track"]);
        _paq.push(["setSiteId", "00126087-c090-46f3-b6b1-de42ad3d44d1"]);
        var d = document,
          g = d.createElement("script"),
          s = d.getElementsByTagName("script")[0];
        g.type = "text/javascript";
        g.async = true;
        g.defer = true;
        g.src = u + "js/nfogix.min.js";
        s.parentNode.insertBefore(g, s);
      })();
    </script>
  `
  }
}

customElements.define("site-nav", Nav);
customElements.define("site-footer", Foot);
customElements.define("analytics", Analytics);