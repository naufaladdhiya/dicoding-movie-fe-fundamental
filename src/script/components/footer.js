class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer class="footer footer-center p-8 bg-base-200 text-base-content mt-12">
                <div>
                    <p>Copyright © 2023 - All right reserved by Naufal Addhiya</p>
                </div>
            </footer>
          `;
  }
}

customElements.define('footer-bar', FooterBar);
