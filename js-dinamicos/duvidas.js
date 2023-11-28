

// Endpoint pego no query do Sanity

const endpointDuvidas = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27duvidas%27%5D+%7C+order%28_createdAt+desc%29+%5B0...6%5D+%7B%0A++%22Pergunta%22%3A+pergunta%2C%0A++%22Resposta%22%3A+respostas%0A%7D"

async function duvidas(){
  const resultadoApiDuvidas = await fetch(endpointDuvidas, {
    method: "GET",
  });

    const apiDuvidasJson = await resultadoApiDuvidas.json()

    const apiDuvidas = apiDuvidasJson.result

    // Pegando a div perguntas frequentes
    
    const cardDuvida = document.getElementById("perguntas-frequentes")

    console.log(apiDuvidas)

    // Criando variavel contadora para inserir um id auto_increment

    var contadora = 0

    apiDuvidas.forEach(duvidaInfo =>{

      // Cria um paragrafo e o botão, e passa os atributos para funcionar o modal do botão

      const paragrafo = document.createElement("p")

      const botaoPergunta = document.createElement("button")
      botaoPergunta.classList.add("campo-freq")
      botaoPergunta.setAttribute("data-bs-toggle", "collapse")
      botaoPergunta.setAttribute("data-bs-target", `#collapseExample${contadora}`)
      botaoPergunta.setAttribute("aria-expanded", "false")
      botaoPergunta.setAttribute("aria-controls", "collapseExample")

      // Insere a pergunta da lista de perguntas ao botão

      botaoPergunta.innerText = duvidaInfo.Pergunta

      // Cria div resposta 

      const divResposta = document.createElement("div")
      divResposta.classList.add("collapse")
      divResposta.setAttribute("id", `collapseExample${contadora}`)

      const divCardResposta = document.createElement("div")
      divCardResposta.classList.add("card")

      // insere a resposta na div resposta

      divCardResposta.innerText = duvidaInfo.Resposta

      paragrafo.appendChild(botaoPergunta)

      divResposta.appendChild(divCardResposta)

      cardDuvida.append(paragrafo, divResposta)

      contadora++
    });

}
duvidas();