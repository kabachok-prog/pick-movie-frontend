import { filmCard } from '../components/film'
import { header } from '../components/header'
import { historyResolver } from './route'
import { filmList } from '../components/films'

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
      films += filmCard(film).replace(',', ', ')
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

export const renderNewPage = (template) => {
  window.addEventListener('popstate', (e) => {
    if (window.location.pathname === '/admin') {
      historyResolver(e, '#app', template, 'Добавить фильм', '/admin')
      // console.log(template)
    } else if (window.location.pathname === '/') {
      render('#app', template)
      historyResolver(e, '#app', template, 'Vite App', '/')
      // console.log(template)
    }
  })
}
