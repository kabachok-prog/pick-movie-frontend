import { render } from './core/render'
import { header } from './components/header'
import './assets/scss/main.scss'
import { filmObj } from './core/data';
import { filmCard } from './components/film';
import { renderCard } from './core/render';
import { filmList } from './components/films';
import { adminPanel } from './components/admin';
import { links } from './core/route';
import { renderNewPage } from './core/render';
import { renderPage } from './core/render';

render('#app', header());
render('#app', filmList());
// renderCard(filmObj, filmCard, '.films__list')
// console.log(renderCard(filmObj, filmCard, '.films__list'));
// renderCard(filmObj, filmCard, '.films__list');
// renderCard(filmObj, filmCard, '.films__list');
links();
renderNewPage(adminPanel());
renderNewPage(renderCard(filmObj, filmCard, '.films__list'));

