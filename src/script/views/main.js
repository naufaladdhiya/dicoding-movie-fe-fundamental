import '../components/movie-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const movieListElement = document.querySelector('movie-list');
  const buttonSearch = document.getElementById('searchButtonElement');
  const valueSearch = document.getElementById('searchFilm');
  const resultSearch = document.getElementById('hasilPencarian');

  

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(valueSearch.value);
      renderResult(result);
      resultSearch.innerText = `Menampilkan ${result.length} hasil dari ${valueSearch.value}`;
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  buttonSearch.addEventListener('click', onButtonSearchClicked);
};

export default main;
