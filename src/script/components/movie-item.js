class Movieitem extends HTMLElement {
  constructor() {
    super();
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const movieID = this._movie.id;
    this.innerHTML = `
        <div data-aos="fade-up" data-aos-duration="1000">
        <div class="card max-w-96 bg-base-100 shadow-xl min-h-[800px]" id="${movieID}">
            <figure class="px-10 pt-10">
                <img src="https://image.tmdb.org/t/p/w200/${this._movie.poster_path}" alt="movie" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${this._movie.original_title}</h2>
                <p>(${this._movie.release_date})</p>
                <p>(${this._movie.overview})</p>
            </div>
        </div>
        </div>
        `;
  }
}

customElements.define('movie-item', Movieitem);
