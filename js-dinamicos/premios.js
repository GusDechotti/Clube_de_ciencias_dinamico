
async function ListarPremios() {
    
    // Endpoint pego no query do Sanity
    
    const apiTarefas = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27premios%27%5D+%7C+order%28_createdAt+desc%29+%5B0...10%5D+%7B%0A++%22T%C3%ADtulo%22%3A+name%2C%0A++%22Descri%C3%A7%C3%A3o%22%3A+description%2C%0A++%22Imagem%22%3A+imagem.asset-%3Eurl%0A%7D"

    // Realizando a requisição GET na API de tarefas
    const result = await fetch(apiTarefas, {
        method: "GET",
    });

    // Convertendo o meu resultado em um JSON
    const data = await result.json()


    const cards = document.querySelector("#cards-premios")
    
    var infos = data.result
    
    cards.innerText = ""


    // Percorre cada objeto da minha api de Premios
    infos.forEach(cardInfo => {
        console.log(cardInfo)

        // Cria div premios, que será o card do premio com sua respectiva classe

        var divpremios = document.createElement("div")
        divpremios.classList.add("premios")

        // Cria o elemento da imagem
    
        var imagem = document.createElement("img")
        
        // Cria o elemento do titulo
        
        var h3 = document.createElement("h3")

        // Cria o elemento do paragrafo

        var paragrafo = document.createElement("p")

        // Insere o conteudo do respectivo premio do loop

        imagem.setAttribute("src", cardInfo.Imagem)
        h3.innerText=cardInfo.Título
        paragrafo.innerText=cardInfo.Descrição

        // engloba tudo dentro do card do premio

        divpremios.append(imagem, h3, paragrafo)

        // engloba o card do premio dentro da div de cards

        cards.appendChild(divpremios)
    });
}

ListarPremios()


