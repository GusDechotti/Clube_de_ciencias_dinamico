
async function noticias(){
    // Endpoint pego no query do sanity (limitado a 10 noticias)

    const endpointNoticia = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27noticia%27%5D+%7C+order%28_createdAt+desc%29+%5B0...10%5D+%7B%0A++titulo%2C%0A++subtitulo%2C%0A++conteudo%2C%0A++%27imagem%27%3A+imagem.asset-%3Eurl%2C%0A++data%0A%7D"

    var dados = await fetch(endpointNoticia, {
        method: "GET"
    })

    // Convertendo o fetch da api em um objeto JSON

    var dadosJS = await dados.json()

    // Percorrendo a lista de noticias para inseri-las no body

    dadosJS.result.forEach(element => {

        // criando os elementos de div da noticia, titulo, descricao, subtitulo, data e imagem

        var div_txt = document.createElement("div")
        div_txt.className = "txt"

        var div_noticia = document.createElement("div")
        div_noticia.className = "noticia"
        
        var titulo = document.createElement("p")
        titulo.className = "titulo"

        var subtitulo = document.createElement("p")
        subtitulo.className = "subtitulo"

        var descricao = document.createElement("p")
        descricao.className = "descricao"

        var data = document.createElement("p")
        data.className = "data"

        var img = document.createElement("img")
        img.className = "img-noticia"

        // atribuindo o conteudo aos elementos
        
        titulo.innerText = element.titulo
        subtitulo.innerText = element.subtitulo
        descricao.innerText = element.conteudo
        data.innerText = element.data
        img.setAttribute("src", `${element.imagem}?h=700&w=700`)

        // encapsulando todas as informações dentro da div de texto

        div_txt.append(titulo, subtitulo, descricao, data)

        // encapsulando a div de texto e a imagem para a div de noticia

        div_noticia.append(div_txt, img)

        // adicionado a div de noticia ao body

        document.body.appendChild(div_noticia)
    })
}
noticias()