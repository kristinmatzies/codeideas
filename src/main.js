const progress = document.getElementById('progress-active')
const firstInput = document.getElementById('first-input')
const secondInput = document.getElementById('second-input')
const thirdInput = document.getElementById('third-input')

firstInput.addEventListener('keyup', activateSuccessState)

function activateSuccessState(event) {
  event.preventDefault()
  const firstInputValue = document.getElementById('first-input').value
  const secondInputValue = document.getElementById('second-input').value
  const thirdInputValue = document.getElementById('third-input').value
  if (firstInputValue != '') {
    progress.classList.add('progress-done1')
  }

  if (firstInputValue != '' && secondInputValue != '') {
    progress.classList.add('progress-done2')
  }

  if (
    firstInputValue != '' &&
    secondInputValue != '' &&
    thirdInputValue != ''
  ) {
    progress.classList.add('progress-done3')
  }
}
