
const API_descricaoHorarios = "https://8j5kty0a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22clube%22%5D";

const API_imagemClube = 'https://8j5kty0a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22clube%22%5D%7B%0A++%22imagem%22%3A+imagem.asset-%3E+url%0A%7D'

const API_horarioClube = 'https://8j5kty0a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22clube%22%5D%7B%0A++horarios-%3E%0A%7D'

const divTabela = document.getElementById('clubes');

async function adicionaClube(){
    const resultDescricao = await fetch(API_descricaoHorarios, {
        method: "GET",
    });

    const resultImagem = await fetch(API_imagemClube, {
        method: "GET",
    });

    const resultHorario = await fetch(API_horarioClube, {
        method: "GET",
    });

    const apiDescricaoConvertida = await resultDescricao.json();

    const apiImagemConvertida = await resultImagem.json();

    const apiHorarioConvertida = await resultHorario.json();

    const descricaoClube =  apiDescricaoConvertida.result[0].description
    const imagemClube = apiImagemConvertida.result[0].imagem;
    const horarioClube = apiHorarioConvertida.result[0]
    const diasSemanaClube = apiHorarioConvertida.result[0].horarios.diaSemana

    const constSrcImgClube = document.querySelector("#imgClube");
    constSrcImgClube.setAttribute("src", imagemClube);

    const pDescricaoClube = document.querySelector("#description");
    pDescricaoClube.innerText = descricaoClube;

    const idadeTabela = document.querySelector(".idade-tabela");

    idadeTabela.innerText = horarioClube.horarios.idade

    const horarioTurnoManha = document.querySelector("#conteudo-manha");

    horarioTurnoManha.innerText = horarioClube.horarios.turnoManha.min + " às " + horarioClube.horarios.turnoManha.max

    const horarioTurnoTarde = document.querySelector("#conteudo-tarde");

    horarioTurnoTarde.innerText = horarioClube.horarios.turnoTarde.min + " às " + horarioClube.horarios.turnoTarde.max

    const editDiasDaSemana = document.getElementById('tabela-corpo-clube');

    diasSemanaClube.forEach(diaSemana => {

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



