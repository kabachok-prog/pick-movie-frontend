export const filmCard = ({ rate, title, genre, time }) => {
  return `
  <li class="films__list-item">
    <div class="film__content">
      <div class="film__logo">
        <img class="film__img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/x1000">
      </div>
      <div class="film__description">
        <div class="film__name">${title}</div>
        <div class="film__rate">${rate} / 10</div> 
        <div class="film__genre">${genre}</div>
        <div class="film__time">${time} min</div>
      </div>
    </div>
  </li>
  `
}
