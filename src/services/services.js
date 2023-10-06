import { hideLoader, showLoader } from '../utils/functions'

export const sendForm = async (data) => {
  try {
    showLoader()
    const response = await fetch('http://localhost:3000/api/admin/create', {
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
      method: 'POST',
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    hideLoader()
  }
}

export const getFilms = async () => {
  try {
    showLoader()
    const response = await fetch('http://localhost:3000/api')
    return await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    hideLoader()
  }
}

export const getFilmById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${id}`)
    showLoader()
    return await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    hideLoader()
  }
}

export const deleteFilm = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/delete/${id}`, {
      method: 'DELETE',
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateFilm = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/update/${id}`, {
      method: 'PATCH',
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
