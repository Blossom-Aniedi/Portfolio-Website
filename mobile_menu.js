
const menu = document.getElementById('menu2')
const cancel = document.getElementById('cancel')
const nav = document.getElementById('menu')

function Show(){
  nav.classList.add('Show')
  cancel.style.display = 'flex'
  menu.style.display = 'none'
}

menu.addEventListener('click', Show)
function Hide(){
  nav.classList.remove('Show')
  cancel.style.display = 'none'
  menu.style.display = 'flex'
}
cancel.addEventListener('click', Hide)
