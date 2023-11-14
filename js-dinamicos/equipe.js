

// Endpoint pego no query do Sanity

const endpointEquipe = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22duvidas%22%5D%0A%0A%0A"

async function ListarEquipe() {

    const resultadoApiDuvidas = await fetch(endpointEquipe, {
      method: "GET",
    });

    
    const apiDuvidasJson = await resultadoApiDuvidas.json()
    console.log(apiDuvidasJson)
       
    const apiDuvidas = apiDuvidasJson.result[0]

    const equipeDiv = document.querySelector("#sep")

    // Zera a div de equipe para cadastrar todos membros sempre que adicionado

    equipeDiv.innerHTML = ""

    // Adiciona todos os membros da lista de integrantes da equipe

      apiDuvidas.forEach(member => {

        // Cria a div do integrante com sua classe

        const profDiv = document.createElement("div")
        profDiv.className = "profs"

        // Cria os elementos no html

        const imgElement = document.createElement("img")

        const nomeDiv = document.createElement("div")
        nomeDiv.id = "nome"
        
        const h3Element = document.createElement("h3")

        const pElement = document.createElement("p")

        // Atribuindo conteúdo para os elementos criados

        imgElement.src = member.Imagem
        h3Element.textContent = member.Nome
        pElement.textContent = member.Cargo

        // Inserindo os elementos em suas respectivas Div's

        nomeDiv.appendChild(h3Element)
        nomeDiv.appendChild(pElement)
        profDiv.appendChild(imgElement)
        profDiv.appendChild(nomeDiv)
        equipeDiv.appendChild(profDiv)
      })
  }

  ListarEquipe();