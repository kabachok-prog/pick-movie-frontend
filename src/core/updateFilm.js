import { updateFilm } from '../services/services'
import { updateForm } from '../components/updateForm'
import { getAllFilms } from './getFilms'
import { formData } from './formData'

export const updateFilmById = async (data) => {
  const modal = document.querySelector('.modal')
  // const formOpen = () => {
  //   updateFormOpen.classList.add('update__form--open')
  // }
  modal.addEventListener('click', async (e) => {
    if (e.target.classList.contains('modal__link-update')) {
      e.preventDefault()
      modal.innerHTML = updateForm(data)
      const mainForm = document.querySelector('.update__form')
      mainForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        await updateFilm(data.id, formData(mainForm))
        getAllFilms()
        modal.classList.remove('modal--open')
        location.reload()
      })
    }
  })
}
