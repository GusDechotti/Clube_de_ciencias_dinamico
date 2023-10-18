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

    laboratoriosInfo.forEach(laboratoriosInfo =>{

        console.log(laboratoriosInfo.name)
        if(contador % 2 != 0){
          cardLaboratorio.innerHTML += `
        <div class="card">
        <div class="txt">
          <p class="lab">${cardLaboratorio.laboratorio}</p>
          <p class="desc-lab">${cardLaboratorio.descricao}</p>
        </div>
        <div class="card-img">
          <div>
            <picture>
              <source media="(max-width: 388px)" srcset="${cardLaboratorio.foto}">
              <source media="(max-width: 630px)" srcset="${cardLaboratorio.foto}">
              <img src="${cardLaboratorio.foto}" alt="">
            </picture>
          </div>
          <div class="card-img-none">
              <img src="${cardLaboratorio.fotoPequena1}" alt="">
              <img src="${cardLaboratorio.fotoPequena2}" alt="">
          </div>
        </div>
        `
        }else{
          cardLaboratorio.innerHTML += `
        <div class="card-reverse">
        <div class="txt">
          <p class="lab">${cardLaboratorio.laboratorio}</p>
          <p class="desc-lab">${cardLaboratorio.descricao}</p>
        </div>
        <div class="card-img-reverse">
          <div>
            <picture>
              <source media="(max-width: 388px)" srcset="${cardLaboratorio.foto}">
              <source media="(max-width: 630px)" srcset="${cardLaboratorio.foto}">
              <img src="${cardLaboratorio.foto}" alt="">
            </picture>
          </div>
          <div class="card-img-none">
              <img src="${cardLaboratorio.fotoPequena1}" alt="">
              <img src="${cardLaboratorio.fotoPequena2}" alt="">
          </div>
        </div>
        `
        }
        

        contador++;
    });

}
ListarTarefasLaboratorios();


