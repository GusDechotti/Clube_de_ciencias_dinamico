
const API = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22premios%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A";

async function ListarTarefas() {
    // Realizando a requisição GET na API de tarefas
    const result = await fetch(API, {
        method: "GET",
    });

    // Convertendo o meu resultado em um JSON
    const data = await result.json();

    const cards = document.querySelector("#cards-premios");
    
    var infos = data.result
    
    cards.innerText = "";


    // Percorre cada objeto da minha api de Premios
    infos.forEach(cardInfo => {
        console.log(cardInfo.name)

        var divpremios = document.createElement("div");
        divpremios.classList.add("premios")
        
        var imagem = document.createElement("img");
        imagem.setAttribute("src", cardInfo.imagem);

        var h2 = document.createElement("h2");
        h2.innerText=cardInfo.name;

        var p =document.createAttribute("p");
        p.innerText=cardInfo.description;

        divpremios.appendChild(imagem, h2, p);

        console.log("teste");
        cards.appendChild(divpremios);
    });
}

ListarTarefas();


