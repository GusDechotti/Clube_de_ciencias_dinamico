const laboratoriosAPI = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22laboratorios%22%5D%7B%0A++%22laboratorio%22%3A+laboratorio%2C%0A++%22descricao%22%3A+descricao%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%2C%0A++%22fotopequena1%22%3A+fotoPequena1.asset-%3Eurl%2C%0A++%22fotopequena2%22%3A+fotoPequena2.asset-%3Eurl%2C%0A++%0A%7D";

async function ListarTarefasLaboratorios() {
  const result = await fetch(laboratoriosAPI, {
    method: "GET",
  });

  const data = await result.json();
  console.log(data);
  console.log(data.result);
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

    const divImagens = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", laboratorio.foto);

    divImagens.appendChild(img);

    const cardImgNone = document.createElement("div");
    cardImgNone.classList.add("card-img-none");

    const imgPequena1 = document.createElement("img");
    imgPequena1.setAttribute("src", laboratorio.fotopequena1);
    imgPequena1.setAttribute("alt", "");

    const imgPequena2 = document.createElement("img");
    imgPequena2.setAttribute("src", laboratorio.fotopequena2);
    imgPequena2.setAttribute("alt", "");

    cardImgNone.appendChild(imgPequena1);
    cardImgNone.appendChild(imgPequena2);
    divImagens.appendChild(cardImgNone);
    

    if (contador % 2 !== 0) {
      card.classList.add("card");
      txt.appendChild(pTitulo);
      txt.appendChild(pDescricao);
      card.appendChild(txt);
      card.appendChild(divImagens);
      card.appendChild(cardImgNone);
      divImagens.className = "card-img";

    } else {
      
      card.classList.add("card-reverse");
      txt.appendChild(pTitulo);
      txt.appendChild(pDescricao);
      card.appendChild(txt);
      card.appendChild(divImagens);
      card.appendChild(cardImgNone);
      divImagens.className = "card-img-reverse";
    }

    cardLaboratorio.appendChild(card);
    contador++;
  });
}

ListarTarefasLaboratorios();
