

// Endpoint pego no query do Sanity

const endpointPreClube = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22preclube%22%5D%7B%0A++%22descricao%22%3A+description%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++%22horario%22%3A+horarios-%3E%0A%7D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A ";

// pegando a div de clubes no index

const divTabelaClubes = document.querySelector('#clubes');

// consumindo api

async function adicionaPreClube(){
    const resultEndpointPreClube = await fetch(endpointPreClube, {
        method: "GET",
    });

    // transformando o resultado em json

    const apiJsonPreClube = await resultEndpointPreClube.json();

    const api = apiJsonPreClube.result[0]

    // pegando elemento que irá a imagem

    const imgPreClube = document.querySelector("#imgPreClube");

    // pegando elemento que irá a descricao

    
    const paragrafoDescricaoClube = document.querySelector("p#descricaoClube");
    
    // pegando elemento que irá a idade recomendada para aquele clube
    
    const horarioIdades = document.querySelector("td.headertablepre");
    
    // pegando elemento que irá os horarios nos diferentes turnos
    
    const tituloManha = document.querySelector("td#manha");
    
    const tituloTarde = document.querySelector("td#tarde");
    
    // atribuindo os valores aos respectivos campos
    
    imgPreClube.setAttribute("src", api.imagem);
    paragrafoDescricaoClube.innerText = api.descricao;
    horarioIdades.innerText = api.horario.idade
    tituloManha.innerText = api.horario.turnoManha.min + " ás " + api.horario.turnoManha.max;
    tituloTarde.innerText = api.horario.turnoTarde.min + " ás " + api.horario.turnoTarde.max;

    // resgatando elemento em que serão incluidos os dias com as turmas

    const editDiasDaSemana = document.querySelector('#tabela-corpo');

    api.horario.diaSemana.forEach(diaSemana => {

        var linhaDiasDaSemana = document.createElement("tr");

        var diaDaSemana = document.createElement("td");
        diaDaSemana.classList.add("dia-semana");

        var conteudoDiaDaSemana = document.createElement("td");
        conteudoDiaDaSemana.classList.add("conteudo-dia-semana");

        diaDaSemana.innerText = diaSemana.dias
        conteudoDiaDaSemana.innerText = diaSemana.turmas

        linhaDiasDaSemana.append(diaDaSemana, conteudoDiaDaSemana);

        editDiasDaSemana.append(linhaDiasDaSemana)
    })

}

adicionaPreClube();


