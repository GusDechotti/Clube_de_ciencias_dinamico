const laboratoriosAPI = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22laboratorios%22%5D%0A%0A%0A%0A%0A%0A%0A";

async function ListarTarefasLaboratorios() {
    const result = await fetch(laboratoriosAPI, {
        method: "GET",
    });

    const data = await result.json();
    console.log(data);
    console.log(data.result.result)
    
    const cardLaboratorio = document.getElementById("cards-laboratorios");
    console.log(cardLaboratorio)


    console.log(data);

    var laboratoriosInfo = data.result
    console.log(laboratoriosInfo)

    var contador = 1;


    console.log(laboratoriosInfo);
    laboratoriosInfo.forEach(laboratorio =>{
      console.log(laboratorio)


      const card = document.createElement("div");
      card.classList.add("card");

      const txt = document.createElement("div");
      txt.classList.add("txt");

      const pTitulo = document.createElement("p");
      pTitulo.classList.add("lab");
      pTitulo.innerText = laboratorio.laboratorio;

      const pDescricao = document.createElement("p");
      pDescricao.classList.add("desc-lab");
      pDescricao.innerText = laboratorio.descricao

      


        console.log(laboratoriosInfo.name)
        if(contador % 2 != 0){
          cardLaboratorio.innerHTML += 


          
          `
        <div class="card">
          <div class="txt">
            <p class="lab">${laboratorio.laboratorio}</p>
            <p class="desc-lab">${laboratorio.descricao}</p>
          </div>
          <div class="card-img">
            <div>
              <picture>
                <source media="(max-width: 388px)" srcset="${laboratorio.foto}">
                <source media="(max-width: 630px)" srcset="${laboratorio.foto}">
                <img src="${laboratorio.foto}" alt="">
              </picture>
            </div>
            <div class="card-img-none">
                <img src="${laboratorio.fotoPequena1}" alt="">
                <img src="${laboratorio.fotoPequena2}" alt="">
            </div>
          </div>
          `
          }else{
            cardLaboratorio.innerHTML += `
          <div class="card-reverse">
          <div class="txt">
            <p class="lab">${laboratorio.laboratorio}</p>
            <p class="desc-lab">${laboratorio.descricao}</p>
          </div>
          <div class="card-img-reverse">
            <div>
              <picture>
                <source media="(max-width: 388px)" srcset="${laboratorio.foto}">
                <source media="(max-width: 630px)" srcset="${laboratorio.foto}">
                <img src="${laboratorio.foto}" alt="">
              </picture>
            </div>
            <div class="card-img-none">
                <img src="${laboratorio.fotoPequena1}" alt="">
                <img src="${laboratorio.fotoPequena2}" alt="">
            </div>
        </div>
        `
        }
        

        contador++;
    });

}
ListarTarefasLaboratorios();


