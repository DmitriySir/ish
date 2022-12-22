document.getElementById('takeCall2').addEventListener('click', function () {
  document.getElementById('modal').classList.add('modal-core-fon-open')
})

document.getElementById('ChatOpen2').addEventListener('click', function () {
  document.getElementById('modal').classList.add('modal-core-fon-open')
})

// бургер

document.getElementById('burger').addEventListener('click', function () {
  let sgh = document.querySelector('.aside__body')
  sgh.classList.add('aside__body-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.add('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'hidden'
  document.getElementById('modal').classList.add('modal-core-fon-open')
})

document.getElementById('clsbtn1').addEventListener('click', function () {
  let sgh = document.querySelector('.aside__body')
  sgh.classList.remove('aside__body-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  document.getElementById('modal').classList.remove('modal-core-fon-open')
})

// Звонок

document.getElementById('takeCall1').addEventListener('click', function () {
  let sgh = document.querySelector('.sidebar__call')
  sgh.classList.add('call-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.add('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'hidden'
  document.getElementById('modal').classList.add('modal-core-fon-open')
})

document.getElementById('callClsBtn1').addEventListener('click', function () {
  let sgh = document.querySelector('.sidebar__call')
  sgh.classList.remove('call-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  document.getElementById('modal').classList.remove('modal-core-fon-open')
})

document.getElementById('takeCall2').addEventListener('click', function () {
  document.querySelector('.sidebar__call').classList.add('call-active')
  if (document.querySelector('.aside__body-active') !== null) {
    document
      .querySelector('.aside__body-active')
      .classList.remove('aside__body-active')
    document
      .querySelector('.mainMenu__wrapper')
      .classList.add('mainMenu__wrapper-active')
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById('modal').classList.add('modal-core-fon-open')
  } else {
    document
      .querySelector('.mainMenu__wrapper')
      .classList.add('mainMenu__wrapper-active')
    document.querySelector('body').style.overflow = 'auto'
  }
})

document.getElementById('callClsBtn1').addEventListener('click', function () {
  let sgh = document.querySelector('.sidebar__call')
  sgh.classList.remove('call-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  document.getElementById('modal').classList.remove('modal-core-fon-open')
})

// Чат

document.getElementById('ChatOpen1').addEventListener('click', function () {
  let sgh = document.querySelector('.sidebar__feedback')
  sgh.classList.add('feedback-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.add('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'hidden'
  document.getElementById('modal').classList.add('modal-core-fon-open')
})

document.getElementById('ClsFeedback1').addEventListener('click', function () {
  let sgh = document.querySelector('.sidebar__feedback')
  sgh.classList.remove('feedback-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  document.getElementById('modal').classList.remove('modal-core-fon-open')
})

document.getElementById('ChatOpen2').addEventListener('click', function () {
  let sgh = document.querySelector('.sidebar__feedback')
  sgh.classList.add('feedback-active')

  if (document.querySelector('.aside__body-active') !== null) {
    document
      .querySelector('.aside__body-active')
      .classList.remove('aside__body-active')
    document
      .querySelector('.mainMenu__wrapper')
      .classList.add('mainMenu__wrapper-active')
    document.querySelector('body').style.overflow = 'hidden'
    document.getElementById('modal').classList.add('modal-core-fon-open')
  } else {
    document
      .querySelector('.mainMenu__wrapper')
      .classList.add('mainMenu__wrapper-active')
    document.querySelector('body').style.overflow = 'auto'
  }
})

// Закрытие модалки

document.getElementById('modal').addEventListener('click', function () {
  let sgh = document.querySelector('.aside__body')
  sgh.classList.remove('aside__body-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  let sgt = document.querySelector('.sidebar__call')
  sgt.classList.remove('call-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  let sgn = document.querySelector('.sidebar__call')
  sgn.classList.remove('call-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  let sgv = document.querySelector('.sidebar__feedback')
  sgv.classList.remove('feedback-active')
  document
    .querySelector('.mainMenu__wrapper')
    .classList.remove('mainMenu__wrapper-active')
  document.querySelector('body').style.overflow = 'auto'
  document
    .querySelector('.modal-core-fon-open')
    .classList.remove('modal-core-fon-open')
})
