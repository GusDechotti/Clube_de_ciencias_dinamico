
const API = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22noticia%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A";

async function ListarNoticias() {
    // Realizando a requisição GET na API de tarefas
    const result = await fetch(API, {
        method: "GET",
    });

    // Convertendo o meu resultado em um JSON
    const data = await result.json();

    console.log(data)

    const cards = document.getElementById("noticias-id");
    console.log(cards) 

    cards.innerText = "";

    console.log(data);

    var infos = data.result
    console.log(infos)

    infos.forEach(cardInfo => {
        console.log(cardInfo.name)
        console.log("teste");
        cards.innerHTML += `
            <div class="noticias" >
            <img src="${cardInfo.imagem}" alt="">
            <h2>${cardInfo.titulo}</h2>
            <p>${cardInfo.subtitulo}</p>
            <p>${cardInfo.conteudo}</p>
            <p>${cardInfo.data}</p>
            </div>
        `
    });
}

ListarNoticias();


