

// Endpoint pego no query do Sanity

const endpointHorario = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22horarios%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A"

async function ListarHorarios() {

  const resultadoApiHorarios = await fetch(endpointHorario, {
    method: "GET",
  });

  const apiHorariosJson = resultadoApiHorarios.json()
       
  const apiHorarios = apiHorariosJson.result[0]

  const horarioTurnoManha = document.querySelector("#horariomclu")
  const horarioTurnoTarde = document.querySelector("#horariotclu")

  horarioTurnoManha.innerText = turnomanha
  horarioTurnoTarde.innerText = turnotarde

}
