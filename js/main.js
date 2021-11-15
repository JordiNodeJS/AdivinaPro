import dom from './adivinaDoom.js'

for (let i = 0; i < dom.ranges.length; i++)
  dom.ranges[i].addEventListener('input', () => {
    dom.badges[i].textContent = dom.ranges[i].value
  })
