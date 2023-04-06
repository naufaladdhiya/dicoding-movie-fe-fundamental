import './style/style.css';
import './script/components/navbar.js';
import './script/components/heroes.js';
import './script/components/searchbar.js';
import './script/components/movie-list.js';
import './script/components/footer.js';
import main from './script/views/main.js';
import 'regenerator-runtime';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

document.addEventListener('DOMContentLoaded', main);
