import { siteLogo } from "./logo";

export const header = () => {
  return `
  <div class="container">
    <header class='header'>
      <div class="header__inner">
        <a href="/" class="header__logo">
          <img class="header__logo-img" src="${siteLogo()}"alt="logo"/>
        </a>
        <nav class="header__nav">
          <ul class="header__nav-items">
            <li class="header__nav-item">
              <a href="/admin" class="header__nav-item-link">Добавить фильм</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
  `;
};
