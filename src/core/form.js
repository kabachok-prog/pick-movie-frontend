import { sendForm } from '../services/services'

export const createFilm = async (form) => {
  const mainForm = document.querySelector(form)
  mainForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(mainForm)
    const json = {
      title: formData.get('title'),
      description: formData.get('description'),
      year: +formData.get('year'),
      rating: +formData.get('rating'),
      image: formData.get('image'),
      genres: [formData.get('genres')],
      countrys: [formData.get('countrys')],
    }
    await sendForm(json)
  })
}
