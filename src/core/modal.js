import { renderModal } from './render'
import { getFilmById } from '../services/services'
export const modal = () => {
  const films = document.querySelector('.films__list')
  const modal = document.querySelector('.modal')
  const body = document.querySelector('body')

  films.addEventListener('click', async (e) => {
    console.log(e.target)
    if (e.target.classList.contains('films__list-item')) {
      const id = e.target.getAttribute('data-card')
      const response = await getFilmById(id)
      console.log(response)
      if (response.id == id) {
        console.log(response.id)
        openModal(response)
        body.classList.add('body--fixed')
      }
    }
  })

  const openModal = (data) => {
    modal.classList.add('modal--open')
    renderModal(data)
  }

  const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
  }

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal')) {
      closeModal()
    }
  })

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal()
    }
  })
}
