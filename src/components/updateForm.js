export const updateForm = ({ title, description, year, rating, genres, image, countrys }) => {
  return `
    <div class="update-form__modal">
      <form class="update__form">
        <h2 class="update__form-title">Редактировать фильм</h2>
        <div class="update__form-group">
          <label for="title">Название</label>
          <input type="text" placeholder="Название" name="title" value="${title}" />
          <label for="description">Описание</label>
          <input type="text" placeholder="Описание" name="description" value="${description}" />
          <label for="year">Год</label>
          <input type="text" placeholder="Год выпуска" name="year" value="${year}" />
          <label for="rating">Рейтинг</label>
          <input type="text" placeholder="Рейтинг" name="rating" value="${rating}" />
          <label for="genre">Жанры</label>
          <input type="text" placeholder="Жанры" name="genres" value="${genres}" />
          <label for="image">Картинка</label>
          <input type="text" placeholder="Картинка" name="image" value="${image}" />
          <label for="countrys">Страны</label>
          <input type="text" placeholder="Страны" name="countrys" value="${countrys}" />
          <button type="submit" class="update-form__form-btn">Отправить</button>
        </div> 
      </form>
    </div>
  `
}
