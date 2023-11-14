const endpointPreClube = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22preclube%22%5D%7B%0A++%22descricao%22%3A+description%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++%22horario%22%3A+horarios-%3E%0A%7D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A ";

const divTabelaClubes = document.getElementById('clubes');

async function adicionaClube(){
    const resultEndpointPreClube = await fetch(endpointPreClube, {
        method: "GET",
    });

    const apiJsonPreClube = await resultEndpointPreClube.json();

    const api = apiJsonPreClube.result[0]

    console.log(api)

    const imgPreClube = document.querySelector("#imgPreClube");
    imgPreClube.setAttribute("src", api.imagem);

    const paragrafoDescricaoClube = document.querySelector("p#descricaoClube");
    paragrafoDescricaoClube.innerText = api.descricao;

    const horarioIdades = document.querySelector("td.headertablepre");
    horarioIdades.innerText = api.horario.idade

    const tituloManha = document.querySelector("td#manha");
    tituloManha.innerText = api.horario.turnoManha.min + " ás " + api.horario.turnoManha.max;

    const tituloTarde = document.querySelector("td#tarde");
    tituloTarde.innerText = api.horario.turnoTarde.min + " ás " + api.horario.turnoTarde.max; 

    const editDiasDaSemana = document.getElementById('tabela-corpo');

    api.horario.diaSemana.forEach(diaSemana => {
        console.log(diaSemana)
        var linhaDiasDaSemana = document.createElement("tr");
        var diaDaSemana = document.createElement("td");
        diaDaSemana.classList.add("dia-semana");
        diaDaSemana.innerText = diaSemana.dias

        var conteudoDiaDaSemana = document.createElement("td");
        conteudoDiaDaSemana.classList.add("conteudo-dia-semana");
        conteudoDiaDaSemana.innerText = diaSemana.turmas

        linhaDiasDaSemana.append(diaDaSemana, conteudoDiaDaSemana);

        editDiasDaSemana.append(linhaDiasDaSemana)
    })

}

adicionaClube();


