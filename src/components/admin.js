export const adminPanel = () => {
  return `
<div class="admin-panel__inner">
  <h1>Добавить фильм</h1>
  <form class="admin-panel__form">
    <label for="title"></label>
    <input type="text" placeholder="Название" name="title" />
    <label for="genre"></label>
    <input type="text" placeholder="Жанр" name="genre" />
    <label for="time"></label>
    <input type="text" placeholder="Время" name="time" />
    <label for="rating"></label>
    <input type="text" placeholder="Рейтинг" name="rating" />
  </form>
</div>
  `
}
