

// Endpoint pego no query do Sanity

const endpointLaboratorios = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22laboratorios%22%5D%7B%0A++%22laboratorio%22%3A+laboratorio%2C%0A++%22descricao%22%3A+descricao%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%2C%0A++%22fotopequena1%22%3A+fotoPequena1.asset-%3Eurl%2C%0A++%22fotopequena2%22%3A+fotoPequena2.asset-%3Eurl%2C%0A++%0A%7D"

async function Laboratorios() {
  const resultadoLaboratorios = await fetch(endpointLaboratorios, {
    method: "GET",
  });

  // convertendo resultado para json

  const laboratorioJson = await resultadoLaboratorios.json();

  const cardLaboratorio = document.querySelector("#cards-laboratorios");

  const laboratoriosInfo = laboratorioJson.result;

  var contador = 1

  laboratoriosInfo.forEach(laboratorio => {

    // cria todos os elementos e adiciona a classe 

    const card = document.createElement("div")
    card.classList.add("card")

    const txt = document.createElement("div")
    txt.classList.add("txt")

    const pTitulo = document.createElement("p")
    pTitulo.classList.add("lab")
    
    const pDescricao = document.createElement("p")
    pDescricao.classList.add("desc-lab")
    
    const divImagens = document.createElement("div")
    
    const img = document.createElement("img")
    
    divImagens.appendChild(img)
    
    const cardImgNone = document.createElement("div")
    cardImgNone.classList.add("card-img-none")
    
    const imgPequena1 = document.createElement("img")
    imgPequena1.setAttribute("alt", "")
    
    const imgPequena2 = document.createElement("img")
    imgPequena2.setAttribute("alt", "")

    // insere as informações nos elementos criados
    
    pDescricao.innerText = laboratorio.descricao
    pTitulo.innerText = laboratorio.laboratorio
    img.setAttribute("src", laboratorio.foto)
    imgPequena1.setAttribute("src", laboratorio.fotopequena1)
    imgPequena2.setAttribute("src", laboratorio.fotopequena2)

    // insere os elementos em suas respectivas divs

    cardImgNone.appendChild(imgPequena1)
    cardImgNone.appendChild(imgPequena2)
    divImagens.appendChild(cardImgNone)

    const divImagensResponsivo = document.createElement("div")
    divImagensResponsivo.className = "imagens-reponsivo"

    divImagensResponsivo.appendChild(cardImgNone)
    divImagensResponsivo.appendChild(divImagens)
    
    //if e else para alternar os lados dos cards dos laboratorios

    if (contador % 2 !== 0) {
      card.classList.add("card")
      txt.appendChild(pTitulo)
      txt.appendChild(pDescricao)
      card.appendChild(txt)
      card.appendChild(divImagensResponsivo)
      divImagens.className = "card-img"

    } else {
      
      card.classList.add("card-reverse")
      txt.appendChild(pTitulo)
      txt.appendChild(pDescricao)
      card.appendChild(txt)
      card.appendChild(divImagensResponsivo)
      divImagens.className = "card-img-reverse"
    }

    cardLaboratorio.appendChild(card)
    contador++
  })
}

Laboratorios()
