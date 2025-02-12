const btn = document.querySelector('.btn')
const card = document.querySelector('.card')
let isActivemode = false
const localActive = JSON.parse(localStorage.getItem('isActivemode'))

function toggleActive() {
  isActivemode = !isActivemode
  localStorage.setItem('isActivemode', isActivemode)
  switchActive()
}

function switchActive() {
  if (isActivemode) {
    card.classList.add('active')
  } else {
    card.classList.remove('active')
  }
}
