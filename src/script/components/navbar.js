class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="navbar bg-base-200 flex justify-between items-center pt-3">
            <a class="btn btn-ghost normal-case text-xl text-red-500">NetFlux</a>
            <div class="flex items-center ">
                <button class="btn bg-red-500 text-white">Sign Up</button>
            </div>
        </div>
        `;
  }
}

customElements.define('nav-bar', Navbar);
