import dom, { getRandom, checkRandom, counter } from './adivinaDoom.js'

for (let i = 0; i < dom.ranges.length; i++)
  dom.ranges[i].addEventListener('input', () => {
    dom.badges[i].textContent = dom.ranges[i].value
  })

for (let i = 0; i < dom.bodyModalranges.length; i++) {
  dom.bodyModalranges[i].textContent = dom.ranges[i].value
}

let random
let count = 1
console.log(++count)

adivina.addEventListener('click', () => {
  random = getRandom(dom.ranges)
  console.log(random)
})

checkIt.addEventListener('click', () => {
  alerts.textContent = checkRandom(random, guessNumber)[0]
  if (checkRandom(random, guessNumber)[1] == 1) {
    intentos.parentNode.textContent = 'Ala! a JUGAR DE NUEVO'
    setTimeout(() => {
      window.location.reload(true)
    }, 3000)
  }
  let cuenta = counter()
  if (cuenta > 0) intentos.textContent = cuenta
  else {
    intentos.parentNode.textContent = `
    G
         A
             M
                 E
                                   O
                                         V
                                             E 
                                                 R`
    setTimeout(() => window.location.reload(true), 1000)
  }
})

cierra.addEventListener('click', () => window.location.reload())
