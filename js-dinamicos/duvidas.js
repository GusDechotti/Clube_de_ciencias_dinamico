const duvidasAPI = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22duvidas%22%5D%0A%0A%0A";

async function ListarTarefasDuvidas(){
  const result = await fetch(duvidasAPI, {
    method: "GET",
});

const data = await result.json();
    console.log(data);
    console.log(data.result.result)
    
    const cardDuvida = document.getElementById("perguntas-frequentes");
    console.log(cardDuvida)


    console.log(data);

    var duvidasInfos = data.result
    console.log(duvidasInfos)

    duvidasInfos.forEach(duvidaInfo =>{
      console.log(duvidaInfo)

      const paragrafo = document.createElement("p");

      const botaoPergunta = document.createElement("button");
      botaoPergunta.classList.add("campo-freq");
      botaoPergunta.setAttribute("data-bs-toggle", "collapse");
      botaoPergunta.setAttribute("data-bs-target", "#collapseExample");
      botaoPergunta.setAttribute("aria-expanded", "false");
      botaoPergunta.setAttribute("aria-controls", "collapseExample");

      botaoPergunta.innerText = duvidaInfo.pergunta;

      const divResposta = document.createElement("div");
      divResposta.classList.add("collapse");
      divResposta.setAttribute("id", "collapseExample");

      const divCardResposta = document.createElement("div");
      divCardResposta.classList.add("card");
      divCardResposta.innerText = duvidaInfo.respostas;

      paragrafo.append(botaoPergunta)

      divResposta.append(divCardResposta);

      cardDuvida.append(paragrafo, divResposta);

    });

}
ListarTarefasDuvidas();