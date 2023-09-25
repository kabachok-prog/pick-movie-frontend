import { filmCard } from '../components/film'

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
  }
}
