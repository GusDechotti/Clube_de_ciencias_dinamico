const APINOTICIA = " https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22noticia%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A";

async function ListarNoticias() {
    try {
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

            const aVerMais = document.createElement("a");
            aVerMais.innerText = "Ver Mais";

            botaoVerMais.append(aVerMais);

            const divData = document.createElement("div");
            divData.classList.add("data");

            const pData = document.createElement("p");
            pData.innerText = cardInfo.data;

            divData.append(pData);


            card.append(divImagem, divTitulo, divSubtitulo, botaoVerMais, divData);


            const verMaisButton = card.querySelector('.verMais');
            const cardExpandido = document.getElementById("card-expandido");

            verMaisButton.addEventListener("click", () => {
            

                cardExpandido.innerHTML = `
                    <br>
                    
                    <div class="imgExp">
                        <img src="${cardInfo.imagem}" alt="">
                    </div> 

                    <div class="tituloEXP">
                        <h2>${cardInfo.titulo}</h2>
                     </div>

                     <div class="subEXP">
                        <p>${cardInfo.subtitulo}</p>
                     </div>  
                     <br>

                     <div class="conteudoEXP">
                        <a>${cardInfo.conteudo}</a>
                     </div>

                     <div class="botaosair">
                     <button class="botaosair" onClick="window.location.reload();">
                     <a> X </a>
                     </button>
                     </div>

                     <br>
                        <button class="botaosairfinal" onClick="window.location.reload();">
                        <a> FECHAR </a>
                        </button>
                     <br>
                `;
               
                cardExpandido.classList.add("active");

                window.scrollTo({ top: 0, behavior: 'smooth' });
                
            });

            cards.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

ListarNoticias();