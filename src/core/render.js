import { filmCard } from '../components/film'
import { header } from '../components/header'
import { historyResolver } from './route'
import { filmModal } from '../components/modal'

export const render = (rootSelector, template) => {
  const root = document.querySelector(rootSelector)
  if (root) {
    root.innerHTML += `${template}`
  }
}

export const renderCard = (filmObj, filmCard, rootSelector) => {
  const root = document.querySelector(rootSelector)
  if (root) {
    let films = ''
    filmObj.forEach((film) => {
      films += filmCard(film).replace(/,/g, ', ')
    })
    root.innerHTML += films
    return root.innerHTML
  }
}

export const renderPage = (rootSelector, template) => {
  const root = document.querySelector(rootSelector)
  if (root) {
    root.innerHTML = header() + template
    return root.innerHTML
  }
}

export const renderModalFilm = (filmObj, filmSelector) => {
  const films = document.querySelector(filmSelector)
  const app = document.querySelector('#app')
  const body = document.querySelector('body')

  films.addEventListener('click', (e) => {
    let modalStr = ''
    console.log(e.target)
    if (e.target.classList.contains('films__list-item')) {
      const id = e.target.getAttribute('data-card')
      filmObj.forEach((film) => {
        if (film.id === +id) {
          modalStr = filmModal(film)
          render('#app', modalStr)
          body.style.overflow = 'hidden'
        }
      })
    }
  })
}

const hideModal = (modal) => {
  modal.style.display = 'none'
}

export const renderNewPage = (template) => {
  window.addEventListener('popstate', (e) => {
    if (window.location.pathname === '/admin') {
      historyResolver(e, '#app', template, 'Добавить фильм', '/admin')
    } else if (window.location.pathname === '/') {
      render('#app', template)
      historyResolver(e, '#app', template, 'Vite App', '/')
    }
  })
}
