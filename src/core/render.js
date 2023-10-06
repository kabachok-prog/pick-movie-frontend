import { filmCard } from '../components/film'
import { filmModal } from '../components/modal'

export const renderFilmList = (data) => {
  const films = document.querySelector('.films__list')
  data.forEach((film) => {
    films.innerHTML += filmCard(film).replace(/,/g, ', ')
  })
}

export const renderModal = (data) => {
  const modal = document.querySelector('.modal')
  modal.innerHTML = filmModal(data).replace(/,/g, ', ')
}
