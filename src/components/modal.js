export const filmModal = ({ id, title, description, year, rating, genres, image, countrys }) => {
  return `
    <div class="modal__window" data-modal="${id}">
      <div class="modal__inner">
        <div class="modal__content">
          <div class="modal__image">
            <img src="${image}">
          </div>
          <div class="modal__description">
            <div class="modal__description-text modal__title">${title}</div>
            <div class="modal__description-text modal__descr">Описание: ${description}</div>
            <div class="modal__description-text modal__year">Год: ${year}</div>
            <div class="modal__description-text modal__rating">Рейтинг: ${rating}</div>
            <div class="modal__description-text modal__genres">Жанры: ${genres}</div>
            <div class="modal__description-text modal__country">Страны: ${countrys}</div>
            <a class="modal__link-update" href="#">Редактировать фильм</a>
          </div>
          <div class="modal__buttons">
            <button class="modal__close">
              <img class="modal__close" style="width: 20px; height: 20px;" src="/src/assets/img/close-icon.svg">
            </button>
            <button class="modal__delete">Удалить фильм</button>
        </div>
        </div>
      </div>
    </div>
  `
}
