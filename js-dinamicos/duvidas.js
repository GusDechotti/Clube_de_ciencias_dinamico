

// Endpoint pego no query do Sanity

const endpointDuvidas = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22duvidas%22%5D%0A%0A%0A"

async function duvidas(){
  const resultadoApiDuvidas = await fetch(endpointDuvidas, {
    method: "GET",
  });

    const apiDuvidasJson = await resultadoApiDuvidas.json()

    const apiDuvidas = apiDuvidasJson.result

    // Pegando a div perguntas frequentes
    
    const cardDuvida = document.getElementById("perguntas-frequentes")

    // Criando variavel contadora para inserir um id auto_increment

    var contadora = 0

    console.log(apiDuvidas)

    apiDuvidas.forEach(duvidaInfo =>{

      console.log(duvidaInfo)

      // Cria um paragrafo e o botão, e passa os atributos para funcionar o modal do botão

      const paragrafo = document.createElement("p")

      const botaoPergunta = document.createElement("button")
      botaoPergunta.classList.add("campo-freq")
      botaoPergunta.setAttribute("data-bs-toggle", "collapse")
      botaoPergunta.setAttribute("data-bs-target", `#collapseExample${contadora}`)
      botaoPergunta.setAttribute("aria-expanded", "false")
      botaoPergunta.setAttribute("aria-controls", "collapseExample")

      // Insere a pergunta da lista de perguntas ao botão

      botaoPergunta.innerText = duvidaInfo.pergunta

      // Cria div resposta 

      const divResposta = document.createElement("div")
      divResposta.classList.add("collapse")
      divResposta.setAttribute("id", `collapseExample${contadora}`)

      const divCardResposta = document.createElement("div")
      divCardResposta.classList.add("card")

      // insere a resposta na div resposta

      divCardResposta.innerText = duvidaInfo.respostas

      paragrafo.appendChild(botaoPergunta)

      divResposta.appendChild(divCardResposta)

      cardDuvida.append(paragrafo, divResposta)

      contadora++
    });

}
duvidas();