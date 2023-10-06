const loader = document.querySelector('.loader')
export const showLoader = () => {
  loader.classList.add('loader--show')
}

export const hideLoader = () => {
  loader.classList.remove('loader--show')
}
