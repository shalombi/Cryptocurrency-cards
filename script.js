// const panels = document.querySelectorAll('.panel')

// //console.log(panels);

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     removeActiveClasess()
//     panel.classList.add('active')
//   })
// })

// function removeActiveClasess() {
//   panels.forEach(panel => {panel.classList.remove('active')}
// })
// }

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
