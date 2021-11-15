const dom = {
  ranges: document.querySelectorAll('input[type="range"]'),
  badges: document.querySelectorAll('.badge'),
  bodyModalranges: document.querySelectorAll('.modal-body span.badge'),
}
const NUM_MENOR = ['Tú número es menor que  el pensado.', 0]
const NUM_MAYOR = ['Tú número es mayor que  el pensado.', 0]
const EUREKA = ['EUREKA', 1]
const INTRO = ['Intruduce un número que es gratis.', 0]

const store = []
export const rememberGuessNumbers = guessNumber => {
  guessNumber = parseInt(guessNumber.value)
  if (!isNaN(guessNumber))
    store.push(`<span class="bg-danger text-warning"> ${guessNumber} </span>`)
  return store
}

export const getRandom = ([min, max]) => {
  min = parseInt(min.value)
  max = parseInt(max.value)
  return Math.floor(Math.random() * (max + 1 - min)) + min
  //   console.log(min, max, random)
}

export const checkRandom = (random, guessNumber) => {
  random = parseInt(random)
  guessNumber = parseInt(guessNumber.value)
  return guessNumber < random
    ? NUM_MENOR
    : guessNumber > random
    ? NUM_MAYOR
    : guessNumber == guessNumber
    ? EUREKA
    : INTRO
}
let count = 5
export function counter() {
  return count > 0 ? --count : count
}

export default dom
