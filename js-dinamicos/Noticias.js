const APINOTICIA = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22noticia%22%5D%7B%0A++%22T%C3%ADtulo%22%3A+titulo%2C%0A++%22Subt%C3%ADtulo%22%3A+subtitulo%2C%0A++%22Descri%C3%A7%C3%A3o%22%3A+conteudo%2C%0A++%22ImagemDaNot%C3%ADcia%22%3A+imagem.asset-%3Eurl%2C%0A++%22Data%22%3A+data%0A%7D%0A%0A"

async function noticias(){
    var dados = await fetch(APINOTICIA, {
        method: "GET"
    })

    var dadosJS = await dados.json()

    console.log(dadosJS.result)
    dadosJS.result.forEach(element => {
        var div_txt = document.createElement("div");
        div_txt.className = "txt";
        var div_noticia = document.createElement("div");
        div_noticia.className = "noticia"
        
        var titulo = document.createElement("p");
        titulo.className = "titulo";
        var subtitulo = document.createElement("p");
        subtitulo.className = "subtitulo";
        var descricao = document.createElement("p");
        descricao.className = "descricao";
        var data = document.createElement("p");
        data.className = "data";
        var img = document.createElement("img");
        img.className = "img-noticia"
        
        titulo.innerText = element.Título;
        subtitulo.innerText = element.Subtítulo;
        descricao.innerText = element.Descrição;
        data.innerText = element.Data;
        img.setAttribute("src", `${element.ImagemDaNotícia}?h=700&w=700`);


        div_txt.appendChild(titulo)
        div_txt.appendChild(subtitulo)
        div_txt.appendChild(descricao)
        div_txt.appendChild(data)

        div_noticia.appendChild(div_txt);
        div_noticia.appendChild(img);

        document.body.appendChild(div_noticia)
    });
}
noticias();