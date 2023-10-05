export const hideModal = (root, modal, bodySelector) => {
  const app = document.querySelector(root)
  const body = document.querySelector(bodySelector)
  app.addEventListener('click', (e) => {
    const modalInner = document.querySelector(modal)
    if (e.target.classList.contains('modal__close')) {
      modalInner.classList.add('modal--hide')
      body.style.overflow = 'auto'
    } else if (e.target.classList.contains('modal')) {
      modalInner.classList.add('modal--hide')
      body.style.overflow = 'auto'
    } else {
      modalInner.classList.remove('modal--hide')
      body.style.overflow = 'hidden'
    }
  })
}

export const hideModalEscape = (modal, bodySelector) => {
  window.addEventListener('keydown', (e) => {
    const body = document.querySelector(bodySelector)
    const modalInner = document.querySelector(modal)
    if (e.code === 'Escape' && modalInner.classList.contains('modal')) {
      modalInner.classList.add('modal--hide')
      body.style.overflow = 'auto'
    }
  })
}
