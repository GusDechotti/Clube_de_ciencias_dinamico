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

    var duvidaInfo = data.result
    console.log(duvidaInfo)

    duvidaInfo.forEach(duvidaInfo =>{
      console.log(duvidaInfo.name)
      cardDuvida.innerHTML += `
        <p>
          <button class="campo-freq" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            ${cardDuvida.pergunta}
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            ${cardDuvida.respostas}
          </div>
        </div>
      `

    });

}
ListarTarefasDuvidas();