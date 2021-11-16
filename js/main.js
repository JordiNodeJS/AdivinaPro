import dom, {
  getRandom,
  checkRandom,
  counter,
  rememberGuessNumbers,
} from './adivinaDoom.js';

for (let i = 0; i < dom.ranges.length; i++)
  dom.ranges[i].addEventListener('input', () => {
    dom.badges[i].textContent = dom.ranges[i].value;
  });

for (let i = 0; i < dom.bodyModalranges.length; i++) {
  dom.bodyModalranges[i].textContent = dom.ranges[i].value;
}

let random;
let count = 1;
console.log(++count);

adivina.addEventListener('click', () => {
  random = getRandom(dom.ranges);
  alerts.textContent = `Una pista, el número que puede ser está cerca de ${
    random + 7
  } `;
  console.log(random);
});

checkIt.addEventListener('click', () => {
  remember.innerHTML = rememberGuessNumbers(guessNumber);
  alerts.textContent = checkRandom(random, guessNumber)[0];
  if (checkRandom(random, guessNumber)[1] == 1) {
    intentos.parentNode.textContent = '¡ALA! a JUGAR DE NUEVO';
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  }
  guessNumber.value = '';

  const cuenta = counter();
  if (cuenta > 0) intentos.textContent = cuenta;
  else {
    intentos.parentNode.innerHTML = `<div class="alert alert-danger text-center bg-danger text-warning p-3">G A M E O V E R</div>`;
    setTimeout(() => window.location.reload(true), 2000);
  }
});

cierra.addEventListener('click', () => window.location.reload());
