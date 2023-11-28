
async function Equipe() {

    // Endpoint pego no query do Sanity limitado a 8!

    const endpointEquipe = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27equipe%27%5D+%7C+order%28_createdAt+asc%29+%5B0...8%5D+%7B%0A++%27Nome%27%3A+name%2C%0A++%27Cargo%27%3A+cargo%2C%0A++%27Imagem%27%3A+foto.asset-%3Eurl%2C%0A%7D"

    const resultadoApiDuvidas = await fetch(endpointEquipe, {
      method: "GET",
    });

    const apiDuvidasJson = await resultadoApiDuvidas.json()
       
    const apiDuvidas = apiDuvidasJson.result

    const equipeDiv = document.querySelector("#sep")

    // Zera a div de equipe para cadastrar todos membros sempre que adicionado

    equipeDiv.innerHTML = ""

    // Adiciona todos os membros da lista de integrantes da equipe

    apiDuvidas.forEach(member => {

      // Cria a div do integrante com sua classe

      const profDiv = document.createElement("div")
      profDiv.className = "profs"

      // Cria a imagem do integrante

      const imgElement = document.createElement("img")
      

      // Cria div das informações(nome/cargo)

      const nomeDiv = document.createElement("div")
      nomeDiv.id = "nome"

      const h3Element = document.createElement("h3")

      const pElement = document.createElement("p")

      // insere as informações nos elementos

      imgElement.src = member.Imagem
      h3Element.textContent = member.Nome
      pElement.textContent = member.Cargo

      // insere os elementos em suas respectivas divs

      nomeDiv.appendChild(h3Element)
      nomeDiv.appendChild(pElement)
      profDiv.appendChild(imgElement)
      profDiv.appendChild(nomeDiv)
      equipeDiv.appendChild(profDiv)
    })
  }

  Equipe();
