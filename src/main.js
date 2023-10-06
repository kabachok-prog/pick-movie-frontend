import './assets/scss/main.scss'
// import { renderFilmList } from './core/render'
import { filmObj } from './core/data'
import { modal } from './core/modal'
import { getAllFilms } from './core/getFilms'

window.addEventListener('load', () => {
  getAllFilms()
  modal()
})