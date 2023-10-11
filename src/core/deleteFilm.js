import { deleteFilm } from "../services/services";

export const deleteFilmById = async () => {
  const modal = document.querySelector('.modal')
  const body = document.querySelector('body')

  modal.addEventListener('click', async (e) => {
    if (e.target.classList.contains('modal__delete')) {
      const id = e.target.closest('.modal__window').getAttribute('data-modal')
      await deleteFilm(id)
      modal.classList.remove('modal--open')
      body.classList.remove('body--fixed')
      document.querySelector(`[data-card="${id}"]`).remove()
    }
  })
}