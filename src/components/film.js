export const filmCard = ({ id, rating, title, genres, image, countrys }) => {
  return `
  <li class="films__list-item" data-card='${id}'>
    <div class="film__content">
      <div class="film__logo">
        <img class="film__img" src="${image}">
      </div>
      <div class="film__description">
        <div class="film__item film__name">${title}</div>
        <div class="film__item film__rate">${rating} / 10</div> 
        <div class="film__item film__genre">${genres}</div>
        <div class="film__item film__country">${countrys}</div>
      </div>
    </div>
  </li>
  `
}
