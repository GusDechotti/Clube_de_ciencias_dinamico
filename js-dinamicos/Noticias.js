const APINOTICIA = " https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22noticia%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A";

const URL = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27noticias%27+%5D%5B0..5%5D%7B%0A++titulo%2C%0A++subtitulo%2C%0A++conteudo%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++data%0A%7D%7Corder%28date+desc%29"


async function noticias(){
    var dados = await fetch(APINOTICIA, {
        method: "GET"
    })

    var dadosJS = await dados.json()

    console.log(dadosJS)
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
        
        titulo.innerText = element.titulo;
        subtitulo.innerText = element.subtitulo;
        descricao.innerText = element.conteudo;
        data.innerText = element.data;
        img.setAttribute("src", `${element.imagem}?h=700&w=700`);


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