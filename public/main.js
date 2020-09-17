function main() {
  plusFunc1()
  minusFunc1()
  teamName1()

  plusFunc2()
  minusFunc2()
  teamName2()
}

const plusFunc1 = function () {
  const plusButton = document.querySelector('.plus')

  plusButton.addEventListener('click', function (event) {
    event.preventDefault()
    let score = parseFloat(document.querySelector('.score-1').innerHTML)
    score += 1
    if (score <= 21) {
      document.querySelector('.score-1').innerHTML = String(score)
    } else {
      window.alert('21 is the maximum score')
    }
  })
}

const minusFunc1 = function () {
  const minusButton = document.querySelector('.minus')

  minusButton.addEventListener('click', function (event) {
    event.preventDefault()
    let score = parseFloat(document.querySelector('.score-1').innerHTML)
    score -= 1
    if (score >= 0) {
      document.querySelector('.score-1').innerHTML = String(score)
    } else {
      window.alert('0 is the minimum score')
    }
  })
}

const teamName1 = function () {
  const input = document.querySelector('.input-1')
  const name1 = document.querySelector('.name-1')

  input.addEventListener('input', function (event) {
    name1.innerText = event.target.value
  })
}

const plusFunc2 = function () {
  const plusButton = document.querySelector('.plus2')

  plusButton.addEventListener('click', function (event) {
    event.preventDefault()
    let score = parseFloat(document.querySelector('.score-2').innerHTML)
    score += 1
    if (score <= 21) {
      document.querySelector('.score-2').innerHTML = String(score)
    } else {
      window.alert('21 is the maximum score')
    }
  })
}

const minusFunc2 = function () {
  const minusButton = document.querySelector('.minus2')

  minusButton.addEventListener('click', function (event) {
    event.preventDefault()
    let score = parseFloat(document.querySelector('.score-2').innerHTML)
    score -= 1
    if (score >= 0) {
      document.querySelector('.score-2').innerHTML = String(score)
    } else {
      window.alert('0 is the minimum score')
    }
  })
}

const teamName2 = function () {
  const secondInput = document.querySelector('.input-2')
  const name2 = document.querySelector('.name-2')
  console.log(secondInput)

  secondInput.addEventListener('input', function (event) {
    name2.innerText = event.target.value
  })
}

document.addEventListener('DOMContentLoaded', main)
