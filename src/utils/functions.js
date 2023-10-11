const loader = document.querySelector('.loader-wrapper')
export const showLoader = () => {
  loader.classList.add('loader-wrapper-show')
}

export const hideLoader = () => {
  loader.classList.remove('loader-wrapper-show')
}
