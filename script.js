
// Semana 1__________________________________________

// const carro01 = "maverick";
// const cavalos01 = 199;
// const emplacado01 = false;

// const carro02 = "chevette";
// const cavalos02 = 86;
// const emplacado02 = true;

// const carro03 = "opala";
// const cavalos03 = 171;
// const emplacado03 = true;

// const media = (cavalos01+cavalos02+cavalos03) / 3
// console.log(media);

// const verificarEmplacados = emplacado01 && emplacado02 && emplacado03
// console.log(verificarEmplacados);

// Semana 2__________________________________________

// const arrayCarro1 = ["Motor v8", "Gasolina" , "Aspirado"]
// const arrayCarro2 = ["Turbo", "Tração traseira", "Direção mecânica"]
// const arrayCarro3 = ["Motor 6 cilindros", "Turbo", "Tração traseira"]

// console.log("Carro:",carro01.toUpperCase(),":",cavalos01,"cavalos,","emplacado?",emplacado01,arrayCarro1,
// "\nCarro:",carro02.toUpperCase(),":",cavalos02,"cavalos,",'emplacado?',emplacado02,arrayCarro2,
// "\nCarro:",carro03.toUpperCase(),":",cavalos03, "cavalos,", "emplacado?",emplacado03, arrayCarro3 )

// Semana 3__________________________________________

// const carro1 = { 
//     carro: "maverick",
//     cavalos: 199,
//     emplacado: true,
//     arrayCarro: ["Motor v8", "Gasolina" , "aspirado"],
//     stringVazia: ''
//   }
  
//   const carro2 = {
//     carro: "chevette",
//     cavalos: 86,
//     emplacado: true,
//     arrayCarro: ["turbo", "tração traseira", "direção mecânica"],
//     stringVazia: ''
//   }
  
//   const carro3 = {
//     carro: "opala",
//     cavalos: 171,
//     emplacado: true,
//     arrayCarro: ["motor 6 cilindros", "turbo", "tração traseira"],
//     stringVazia: ''
//   }
  
//   const carros = []
  
  // carros.push(carro1, carro2, carro3)
  // console.log(boxes);
  
  
  // Semana 4__________________________________________
  // carro1.emplacado === true ? carros.push(carro1) : alert('maverick não adicionado')
  // carro2.emplacado === true ? carros.push(carro2) : alert('chevette não adicionado')
  // carro3.emplacado === true ? carros.push(carro3) : alert('opala não adicionado')

  // Semana 5__________________________________________
  
  // for(i in carros) {
  //   carros[i].arrayCarro = carros[i].arrayCarro.join(', ')
  // }
  
  // for(i in carros) {
  //   carros[i].stringVazia = `${carros[i].carro}
  //   ${carros[i].cavalos}
  //   ${carros[i].emplacado}
  //   ${carros[i].arrayCarro}`
  //   console.log(carros[i].stringVazia);
  // }
  
  // Semana 6__________________________________________
  
  // const devolveStringVazia = (objeto) => {
  //   return objeto.stringVazia
  // }
  // console.log(devolveStringVazia(carro1));
  
  // const devolveObjeto = (array, string) => {
  //   let resultado = []
  //   for(i in array) {
  //     if(array[i].carro.toUpperCase() === string.toUpperCase()) {
  //       resultado.push(array[i])
  //     }
  //   }
  //   if(resultado.length === 0) {
  //     return resultado
  //   } else {
  //     return alert('Item não encontrado')
  //   }
  // }
  
  // console.log(devolveObjeto(carros, 'Esportivos'));
const arrayCarros = [{
  carro: "maverick".toLocaleUpperCase(),
  cavalos: 199,
  emplacado: true,
  arrayCarro: ["Motor v8", "Gasolina" , "aspirado"],
  stringVazia: "",
  imagem : "./img/Maverick.png",
  link: "https://pt.wikipedia.org/wiki/Ford_Maverick"
},
{

  carro: "chevette".toLocaleUpperCase(),
  cavalos: 86,
  emplacado: true,
  arrayCarro: ["turbo", "tração traseira", "direção mecânica"],
  stringVazia: "",
  imagem : "./img/Chevette.png",
  link: "https://pt.wikipedia.org/wiki/Chevrolet_Chevette"
},
{
  carro: "opala".toLocaleUpperCase(),
  cavalos: 171,
  emplacado: true,
  arrayCarro: ["motor 6 cilindros", "turbo", "tração traseira"],
  stringVazia: "",
  imagem : "./img/Opala.png",
  link: "https://pt.wikipedia.org/wiki/Chevrolet_Opala"
}]  

  function pesquisar() {
    const input = document.getElementById("botao-pesquisa")
    console.log(input.value)
    const antigo2 = antigo(input)
    test(antigo2)
  }
  function antigo(input) {
    const antigo = arrayCarros.filter((valor) => { return valor.carro === input.value.toUpperCase()})
     console.log(`${antigo}` ? antigo : alert('não encontrado'))
    if (antigo.length >= 1) {
      return antigo
    } else {
      return arrayCarros
    }
  }
  
  function test(array) {
    const itens = document.getElementById("carrinhos")
    itens.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
      itens.innerHTML += `
      <ul class="blocoDeCarros">
      <img class="tamanhoCarro" src="${array[i].imagem}"alt="">
        <div class="ajeitando">
      <a href='${array[i].link}' target="_blank" >${array[i].carro}</a> 
        <li>Caracteristicas: ${array[i].arrayCarro}</li>
        <li>Cavalos:${array[i].cavalos}</li>
        </div>      
        </ul>
  `
    }
  }
  test(arrayCarros)
