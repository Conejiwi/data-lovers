import champs from './data/lol/lol.js';
import { dataByName, filterByName, filterByTag, ordenar } from "./data.js"

const main = document.querySelector("#main")

const champsList = Object.keys(champs.data)
let tags = []

champsList.forEach((champ) => {
  const p = document.createElement("p")
  p.append(champ)

  const img = document.createElement("img")
  img.src = champs.data[champ].img

  const newDiv = document.createElement("div");
  newDiv.classList.add("cajita")
  newDiv.setAttribute("nombre", champ);
  newDiv.onclick = () => {
    const data = dataByName(champ)
    const modalName = document.querySelector("#modal-name")
    modalName.innerHTML = data.name
    const modalTitle = document.querySelector("#modal-title")
    modalTitle.innerHTML = data.title
    const modalBlurb = document.querySelector("#modal-blurb")
    modalBlurb.innerHTML = data.blurb
    const modalSplah = document.querySelector("#modal-splash")
    modalSplah.setAttribute("src", data.splash)
    const modal = document.querySelector("#myModal")
    modal.style.display = "block"
  }
  newDiv.appendChild(p)
  newDiv.appendChild(img)
  main.append(newDiv)
  tags = tags.concat(champs.data[champ].tags)
})

tags = [...new Set(tags)].sort()
const seleccionar = document.querySelector("#seleccionar")
tags.forEach((tag) => {
  const option = document.createElement("option")
  option.append(tag)
  seleccionar.append(option)
})

seleccionar.addEventListener("change", (event) => {
  const busqueda = filterByTag(event.target.value)
  pintar(busqueda)
})

const inputbuscar = document.querySelector("#buscar-champ")
inputbuscar.addEventListener("input", () => {
  const busqueda = filterByName(inputbuscar.value)
  pintar(busqueda)
})

const modal = document.querySelector("#myModal")
window.onclick = (event) => {
  if (event.target === modal)
    modal.style.display = "none"
}

const equis = document.querySelector(".close")
equis.onclick = () => {
  modal.style.display = "none"
}

const btnAZ = document.querySelector("#btnAZ")
btnAZ.onclick = (event) => {
  if (event.target.innerHTML === "Ordenar de la A-Z") {
    const champs = ordenar(true)
    pintar(champs)
    event.target.innerHTML = "Ordenar de la Z-A"
  } else {
    const champs = ordenar(false)
    pintar(champs)
    event.target.innerHTML = "Ordenar de la A-Z"
  }
}

function pintar(lista) {
  main.innerHTML = ""
  lista.forEach((champ) => {
    const p = document.createElement("p")
    p.append(champ)

    const img = document.createElement("img")
    img.src = champs.data[champ].img

    const newDiv = document.createElement("div");
    newDiv.classList.add("cajita")
    newDiv.setAttribute("nombre", champ);
    newDiv.onclick = () => {
      const data = dataByName(champ)
      const modalName = document.querySelector("#modal-name")
      modalName.innerHTML = data.name
      const modalTitle = document.querySelector("#modal-title")
      modalTitle.innerHTML = data.title
      const modalBlurb = document.querySelector("#modal-blurb")
      modalBlurb.innerHTML = data.blurb
      const modalSplah = document.querySelector("#modal-splash")
      modalSplah.setAttribute("src", data.splash)
      const modal = document.querySelector("#myModal")
      modal.style.display = "block"
    }
    newDiv.appendChild(p)
    newDiv.appendChild(img)
    main.append(newDiv)

  })
}

const flechita = document.querySelector("#flechita")
flechita.onclick = () => {
  document.body.scrollIntoView({ behavior: "smooth" })
}