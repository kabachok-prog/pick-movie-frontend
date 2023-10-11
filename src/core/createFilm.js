import { sendForm } from '../services/services'
import { formData } from './formData'

export const createFilm = async (form) => {
  const mainForm = document.querySelector(form)
  mainForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    await sendForm(formData(mainForm))
  })
}
