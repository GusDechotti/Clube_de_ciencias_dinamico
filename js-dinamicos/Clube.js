
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

    const imgClube = document.querySelector("#imgClube");
    imgClube.setAttribute("src", imagemClube);

    const paragrafoDescricaoClube = document.querySelector("p#descricaoClube");
    paragrafoDescricaoClube.innerText = descricaoClube;

    const horarioIdades = document.querySelector("td.idade-tabela");
    horarioIdades.innerText = horarioClube.horarios.idade

    const tituloManha = document.querySelector("td#clube-manha");
    tituloManha.innerText = horarioClube.horarios.turnoManha.min + " ás " + horarioClube.horarios.turnoManha.max;

    console.log(horarioClube.horarios)

    const tituloTarde = document.querySelector("td#clube-tarde");
    tituloTarde.innerText = horarioClube.horarios.turnoTarde.min + " ás " + horarioClube.horarios.turnoTarde.max; 

    const editDiasDaSemana = document.getElementById('tabela-corpo-clube');


    diasSemanaClube.forEach(diaSemana => {

        console.log(diaSemana);

        var linhaDiasDaSemana = document.createElement("tr");
        var diaDaSemana = document.createElement("td");
        diaDaSemana.classList.add("dias-da-semana");
        diaDaSemana.innerText = diaSemana.dias

        var conteudoDiaDaSemana = document.createElement("td");
        conteudoDiaDaSemana.classList.add("conteudo-dia-semana");
        conteudoDiaDaSemana.innerText = diaSemana.turmas
        console.log(diaSemana.turmas)


        linhaDiasDaSemana.appendChild(diaDaSemana, conteudoDiaDaSemana);

        editDiasDaSemana.append(linhaDiasDaSemana);

    })


    // divTabela.innerHTML += `
    //     <div class="caixa_fundo"> 
    //         <div class="identificador">
    //             <p>Clube</p>
    //         </div>
    //         <div class="caixa_maior_baixo">
    //             <img src="${imagemClube}" alt="">

    //             <div class="caixa_texto_vantagens">
    //                 <h3>Descrição</h3>
    //                 <p class="desc-cl">
    //                     ${descricaoClube}
    //                 </p>
    //             </div>
    //             <div class="caixa_texto_vantagens">
    //                 <h3>Horários</h3>
    //                 <div class="tabela">
    //                     <table class="tabela-horarios">
    //                     <tbody id="tabela-corpo-clube">
    //                         <tr class="horarios-idade">
    //                             <td colspan="2" class="idade-tabela">${horarioClube.horarios.idade}</td>
    //                         </tr>
    //                         <tr>
    //                             <td class="turno">TURNO: MANHÃ</td>
    //                             <td class="conteudo-turno">${horarioClube.horarios.turnoManha.min} ÀS ${horarioClube.horarios.turnoManha.max}</td>
    //                         </tr>
    //                         <tr>
    //                             <td class="turno">TURNO: TARDE</td>
    //                             <td class="conteudo-turno">${horarioClube.horarios.turnoTarde.min} ÀS ${horarioClube.horarios.turnoTarde.max}</td>
    //                         </tr>
    //                     </tbody>
    //                     </table>
    //                 </div>
    //             </div>
        
    //         </div>
    //     </div>
    // `

    // const editDiasDaSemana = document.getElementById('tabela-corpo-clube');

    // diasSemanaClube.forEach(diaSemana => {
    //     editDiasDaSemana.innerHTML += `
    //         <tr id="dias-da-semana">
    //             <td class="dia-semana">${diaSemana.dias}</td>
    //             <td class="conteudo-dia-semana">${diaSemana.turmas}</td>
    //         </tr>
    //     `
    // })

}

adicionaClube();



