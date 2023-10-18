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

            card.innerHTML = `
                <div class="imgBX">
                    <img src="${cardInfo.imagem}" alt="">
                </div>
                <div class="content">
                    <h2>${cardInfo.titulo}</h2>
                </div>
                <div class="subtitulos">
                    <p>${cardInfo.subtitulo}</p>
                </div>
                <button class="verMais">
                    <a> Ver Mais </a>
                </button>
                <div class="data">
                    <p>${cardInfo.data}</p>
                </div>
            `;

            const verMaisButton = card.querySelector('.verMais');
            const cardExpandido = document.getElementById("card-expandido");

            verMaisButton.addEventListener("click", () => {
                

                cardExpandido.innerHTML = `
                    <div class="imgExp">
                    <img src="${cardInfo.imagem}" alt="">
                    </div> 
                    <div class="tituloEXP">
                    <h2>${cardInfo.titulo}</h2>
                     </div>
                     <div class="subEXP">
                          <p>${cardInfo.subtitulo}</p>
                     </div>  
                     <div class="conteudoEXP">
                     <a>${cardInfo.conteudo}</a>
                     </div>
                     <button class="botaosair" onClick="window.location.reload();">
                     <a> X </a>
                     </button>
                `
               
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