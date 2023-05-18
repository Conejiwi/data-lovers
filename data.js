import champs from './data/lol/lol.js';

export const filterByName = (name = "") => {
  let champsList = Object.keys(champs.data)
  if (name !== "")
    champsList = champsList.filter((champ) => {
      return champ.toLowerCase().includes(name.toLowerCase())
    })
  return champsList
};

export const filterByTag = (tag) => {
  let champsList = Object.keys(champs.data)
  if (tag !== "All Champions") {
    champsList = champsList.filter((champ) => {
      return champs.data[champ].tags.includes(tag)
    })
  }
  return champsList
}

export const ordenar = (ordenamiento) => {
  const champsList = Object.keys(champs.data)
  if (ordenamiento) {
    return champsList.sort()
  } else {
    return champsList.sort().reverse()
  }
}

export const dataByName = (nombreChamp) => {
  return champs.data[nombreChamp]
}



/* test .sort y .filter */