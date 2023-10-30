const APINOTICIA = " https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22noticia%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A";

async function ListarNoticias() {
    const result = await fetch(APINOTICIA, {
        method: "GET",
    });

    const data = await result.json();
    const cards = document.getElementById("container");

    cards.innerHTML = "";

    const infos = data.result;

    infos.forEach(cardInfo => {

        const card = document.createElement("div");
        card.classList.add("card");

        const divImagem = document.createElement("div");
        divImagem.classList.add("imgBX");

        const imagemNoticia = document.createElement("img");
        imagemNoticia.setAttribute("src", cardInfo.imagem);

        divImagem.append(imagemNoticia);

        const divTitulo = document.createElement("div");
        divTitulo.classList.add("content");

        const h2Titulo = document.createElement("h2");
        h2Titulo.innerText = cardInfo.titulo;

        divTitulo.append(h2Titulo);

        const divSubtitulo = document.createElement("div");
        divSubtitulo.classList.add("subtitulos");

        const pSubtitulo = document.createElement("p");
        pSubtitulo.innerText = cardInfo.subtitulo

        divSubtitulo.append(pSubtitulo);

        const botaoVerMais = document.createElement("button");
        botaoVerMais.classList.add("verMais");

        botaoVerMais.innerText = "Ver Mais";

        const divData = document.createElement("div");
        divData.classList.add("data");

        const pData = document.createElement("p");
        pData.innerText = cardInfo.data;

        divData.append(pData);

        const divConteudo = document.createElement("div");
        divConteudo.classList.add("conteudo-card");

        divConteudo.append(divTitulo, divSubtitulo, botaoVerMais, divData);

        card.append(divImagem, divConteudo);

        // const cardExpandido = document.createElement("div");

        // const divImgCardExpandido = document.createElement("div");
        // divImgCardExpandido.classList.add("img-expandida");

        // const imgCardExpandido = document.createElement("img");
        // imgCardExpandido.setAttribute("src", cardInfo.imagem);

        // divImgCardExpandido.append(imgCardExpandido);

        // const divTituloExpandido = document.createElement("div");
        // divTituloExpandido.classList.add("titulo-expandido")

        // const tituloExpandido = document.createElement("h2");
        // tituloExpandido.innerText = cardInfo.titulo;

        // divTituloExpandido.appendChild(tituloExpandido);

        // const divSubtituloExpandido = document.createElement("div");
        // divSubtituloExpandido.classList.add("subtitulo-expandido")

        // const subtituloExpandido = document.createElement("p");
        // subtituloExpandido.innerText = cardInfo.subtitulo;

        // divSubtituloExpandido.append(subtituloExpandido);

        // const divConteudoExpandido = document.createElement("div");
        // divConteudoExpandido.classList.add("conteudo-expandido");

        // const conteudoExpandido = document.createElement("p");
        // conteudoExpandido.innerText = cardInfo.conteudo;

        // divConteudoExpandido.append(conteudoExpandido);

        cards.appendChild(card)
    })
}

ListarNoticias();



