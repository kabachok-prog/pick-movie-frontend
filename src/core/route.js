import { renderPage } from './render'
import { adminPanel } from '../components/admin'
import { filmCard } from '../components/film'
import { filmObj } from './data'
import { renderCard } from './render'
import { filmList } from '../components/films'
import { render } from './render'
import { header } from '../components/header'

export const historyResolver = (event, rootSelector, template, title, location) => {
  event.preventDefault()

  history.pushState({}, title, location)

  // console.log(rootSelector)
  // console.log(template)
  switch (location) {
    case '/':
      filmList()
      renderCard(filmObj, filmCard, '.films__list')
      renderPage(rootSelector, template)
      console.log(location)
      // console.log(rootSelector)
      // console.log(template)
      break
    case '/admin':
      renderPage(rootSelector, template)
      break
  }
}

export const links = () => {
  const link = document.querySelector('.header__nav-item-link')
  const logo = document.querySelector('.header__logo-img')

  link.addEventListener('click', (e) => {
    historyResolver(e, '#app', adminPanel(), 'Добавить фильм', '/admin')
  })

  logo.addEventListener('click', (e) => {
    historyResolver(e, '#app', renderPage('#app', header()), 'Vite App', '/')
  })
}
