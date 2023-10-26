
const API_descricaoHorariosPreClube = "https://8j5kty0a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22preclube%22%5D";

const API_imagemPreClube = 'https://8j5kty0a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22preclube%22%5D%7B%0A++%22imagem%22%3A+imagem.asset-%3E+url%0A%7D'

const API_horarioPreClube = 'https://8j5kty0a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22preclube%22%5D%7B%0A++horarios-%3E%0A%7D'

const divTabelaClubes = document.getElementById('clubes');

async function adicionaClube(){
    const resultDescricao = await fetch(API_descricaoHorariosPreClube, {
        method: "GET",
    });

    const resultImagem = await fetch(API_imagemPreClube, {
        method: "GET",
    });

    const resultHorario = await fetch( API_horarioPreClube, {
        method: "GET",
    });

    const apiDescricaoConvertida = await resultDescricao.json();

    const apiImagemConvertida = await resultImagem.json();

    const apiHorarioConvertida = await resultHorario.json();

    const descricaoClube =  apiDescricaoConvertida.result[0].description
    const imagemClube = apiImagemConvertida.result[0].imagem;
    const horarioClube = apiHorarioConvertida.result[0]
    const diasSemanaClube = apiHorarioConvertida.result[0].horarios.diaSemana

    const imgPreClube = document.querySelector("#imgPreClube");
    imgPreClube.setAttribute("src", imagemClube);

    const paragrafoDescricaoClube = document.querySelector("p#descricaoPreClube");
    paragrafoDescricaoClube.innerText = descricaoClube;

    const horarioIdades = document.querySelector("td.headertablepre");
    horarioIdades.innerText = horarioClube.horarios.idade

    const tituloManha = document.querySelector("td#manha");
    tituloManha.innerText = horarioClube.horarios.turnoManha.min + " ás " + horarioClube.horarios.turnoManha.max;

    console.log(horarioClube.horarios)

    const tituloTarde = document.querySelector("td#tarde");
    tituloTarde.innerText = horarioClube.horarios.turnoTarde.min + " ás " + horarioClube.horarios.turnoTarde.max; 

    const editDiasDaSemana = document.getElementById('tabela-corpo');

    diasSemanaClube.forEach(diaSemana => {

        var linhaDiasDaSemana = document.createElement("tr");
        var diaDaSemana = document.createElement("td");
        diaDaSemana.classList.add("dias-da-semana");

        var conteudoDiaDaSemana = document.createElement("td");
        conteudoDiaDaSemana.classList.add("conteudo-dia-semana");


        linhaDiasDaSemana.appendChild(diaDaSemana, conteudoDiaDaSemana);

        editDiasDaSemana.append(linhaDiasDaSemana);

    })

}

adicionaClube();


