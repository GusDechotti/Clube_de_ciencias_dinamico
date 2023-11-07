
const API_descricaoHorarios1 = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22clube%22%5D%7B%0A++%22descricao%22%3A+description%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++%22horario%22%3A+horarios-%3E%0A%7D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A ";


const divTabela = document.getElementById('clubes');

async function adicionaClube(){
    const resultDescricao = await fetch(API_descricaoHorarios1, {
        method: "GET",
    });


    const apiDescricaoConvertida = await resultDescricao.json();

    const api = apiDescricaoConvertida.result[0]

    console.log(api)

    const constSrcImgClube = document.querySelector("#imgClube");
    constSrcImgClube.setAttribute("src", api.imagem);

    const pDescricaoClube = document.querySelector("#description");
    pDescricaoClube.innerText = api.descricao;

    const idadeTabela = document.querySelector(".idade-tabela");

    idadeTabela.innerText = api.horario.idade

    const horarioTurnoManha = document.querySelector("#conteudo-manha");
    console.log(api.horario.turnoManha.min);

    horarioTurnoManha.innerText = api.horario.turnoManha.min + " às " + api.horario.turnoManha.max

    const horarioTurnoTarde = document.querySelector("#conteudo-tarde");

    horarioTurnoTarde.innerText = api.horario.turnoTarde.min + " às " + api.horario.turnoTarde.max

    const editDiasDaSemana = document.getElementById('tabela-corpo-clube');

    api.horario.diaSemana.forEach(diaSemana => {

        var linhaDiasDaSemana = document.createElement("tr");
        
        var diaDaSemana = document.createElement("td");
        diaDaSemana.classList.add("dia-semana");
        diaDaSemana.innerText = diaSemana.dias

        var conteudoDiaDaSemana = document.createElement("td");
        conteudoDiaDaSemana.classList.add("conteudo-dia-semana");
        conteudoDiaDaSemana.innerText = diaSemana.turmas;

        linhaDiasDaSemana.append(diaDaSemana, conteudoDiaDaSemana)

        editDiasDaSemana.append(linhaDiasDaSemana)

    })

}

adicionaClube();



