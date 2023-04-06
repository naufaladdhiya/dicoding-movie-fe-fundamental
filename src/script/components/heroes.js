import '../../assets/images/hero.jpg';

class Heroes extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="../../assets/images/hero.jpg" class="max-w-sm rounded-lg shadow-2xl mr-3" />
      <div>
        <h1 class="text-5xl font-bold ">Box Office</h1>
        <p class="py-6">Berkunjunglah ke situs web kami untuk informasi lebih lanjut tentang film yang sedang tayang dan bersiap-siap untuk merasakan suatu pengalaman yang tak terlupakan dalam film kami</p>
      </div>
    </div>
  </div>
          `;
  }
}

customElements.define('hero-nav', Heroes);
