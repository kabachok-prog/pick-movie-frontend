import { render } from './core/render'
import { header } from './components/header'
import './assets/scss/main.scss'
import { filmObj } from './core/data';
import { renderCard } from './core/render';
import { filmList } from './components/films';
import { filmCard } from './components/film';

render('#app', header());
render('#app', filmList());
renderCard(filmObj, filmCard, '.films__list')

