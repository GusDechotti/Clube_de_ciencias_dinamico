const laboratoriosAPI = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22laboratorios%22%5D%0A%0A%0A%0A%0A%0A%0A";

async function ListarTarefasLaboratorios() {
  const result = await fetch(laboratoriosAPI, {
    method: "GET",
  });

  const data = await result.json();
  console.log(data);
  console.log(data.result.result);

  const cardLaboratorio = document.getElementById("cards-laboratorios");
  console.log(cardLaboratorio);

  const laboratoriosInfo = data.result;
  console.log(laboratoriosInfo);

  var contador = 1;

  laboratoriosInfo.forEach(laboratorio => {
    console.log(laboratorio);

    const card = document.createElement("div");
    card.classList.add("card");

    const txt = document.createElement("div");
    txt.classList.add("txt");

    const pTitulo = document.createElement("p");
    pTitulo.classList.add("lab");
    pTitulo.innerText = laboratorio.laboratorio;

    const pDescricao = document.createElement("p");
    pDescricao.classList.add("desc-lab");
    pDescricao.innerText = laboratorio.descricao;

    const picture = document.createElement("picture");

    const source1 = document.createElement("source");
    source1.setAttribute("media", "(max-width: 388px)");
    source1.setAttribute("srcset", laboratorio.foto);

    const source2 = document.createElement("source");
    source2.setAttribute("media", "(max-width: 630px)");
    source2.setAttribute("srcset", laboratorio.foto);

    const img = document.createElement("img");
    img.setAttribute("src", laboratorio.foto);
    img.setAttribute("alt", "");

    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(img);

    const cardImgNone = document.createElement("div");
    cardImgNone.classList.add("card-img-none");

    const imgPequena1 = document.createElement("img");
    imgPequena1.setAttribute("src", laboratorio.fotoPequena1);
    imgPequena1.setAttribute("alt", "");

    const imgPequena2 = document.createElement("img");
    imgPequena2.setAttribute("src", laboratorio.fotoPequena2);
    imgPequena2.setAttribute("alt", "");

    cardImgNone.appendChild(imgPequena1);
    cardImgNone.appendChild(imgPequena2);

    if (contador % 2 !== 0) {
      card.classList.add("card");
      txt.appendChild(pTitulo);
      txt.appendChild(pDescricao);
      card.appendChild(txt);
      card.appendChild(picture);
      card.appendChild(cardImgNone);

    } else {
      
      card.classList.add("card-reverse");
      txt.appendChild(pTitulo);
      txt.appendChild(pDescricao);
      card.appendChild(txt);
      card.appendChild(picture);
      card.appendChild(cardImgNone);
    }

    cardLaboratorio.appendChild(card);
    contador++;
  });
}

ListarTarefasLaboratorios();
