class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchButtonElement').value;
  }

  render() {
    this.innerHTML = `
      <div class="form-control">
      <div class="input-group">
        <input type="text" placeholder="Cari Film..." class="input input-bordered xl:w-[600px] md:w-[300px]" id="searchFilm" />
        <button class="btn btn-square" id="searchButtonElement" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>
          `;
    this.querySelector('#searchButtonElement').addEventListener(
      'click',
      this._clickEvent
    );
  }
}

customElements.define('search-bar', SearchBar);
