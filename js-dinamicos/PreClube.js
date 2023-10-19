
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

    const divCaixaFundo = document.createElement("div");
    divCaixaFundo.classList.add("caixa_fundo");

    const divPreClubeTitle = document.createElement("div");
    divPreClubeTitle.classList.add("identificador");

    const tituloPreClube = document.createElement("p");
    tituloPreClube.innerText = "Pré-Clube";

    divPreClubeTitle.appendChild(tituloPreClube);
    divCaixaFundo.appendChild(divPreClubeTitle)

    const divCaixaMaior = document.createElement("div");
    divCaixaMaior.classList.add("caixa_maior_baixo");

    const imgClube = document.createElement("img");
    imgClube.setAttribute("src", imagemClube);

    const divBoxTextVantagens = document.createElement("div");
    divBoxTextVantagens.classList.add("caixa_texto_vantagens");

    const h3TextoVantagem = document.createElement("h3");
    const pDescricaoClube = document.createElement("p");
    pDescricaoClube.classList.add("desc-cl");

    h3TextoVantagem.innerText = "Descrição";
    pDescricaoClube.innerText = descricaoClube;

    divBoxTextVantagens.appendChild(h3TextoVantagem, pDescricaoClube);

    const divTabelaHorarios = document.createElement("div");
    divTabelaHorarios.classList.add("caixa_texto_vantagens");

    const h3HorariosTitulo = document.createElement("h3");

    divTabelaHorarios.appendChild(h3HorariosTitulo);

    const divTabelaConteudo = document.createElement("div");
    divTabelaConteudo.classList.add("tabela");

    const tabelaHorarios = document.createElement("table");
    tabelaHorarios.classList.add("tabela-horarios");

    const tbodyHorarios = document.createElement()
    
    divTabela.innerHTML += `
        <div class="caixa_fundo"> 
            <div class="identificador">
                <p>Pré-Clube</p>
            </div>
            <div class="caixa_maior_baixo">
                <img src="${imagemClube}" alt="">

                <div class="caixa_texto_vantagens">
                    <h3>Descrição</h3>
                    <p class="desc-cl">
                        ${descricaoClube}
                    </p>
                </div>
                <div class="caixa_texto_vantagens">
                    <h3>Horários</h3>
                    <div class="tabela">
                        <table class="tabela-horarios">
                            <tbody id="tabela-corpo">
                                <tr class="horarios-idade">
                                    <td colspan="2" class="headertablepre">${horarioClube.horarios.idade}</td>
                                </tr>
                                <tr>
                                    <td class="turno">TURNO: MANHÃ</td>
                                    <td class="conteudo-turno">${horarioClube.horarios.turnoManha.min} ÀS ${horarioClube.horarios.turnoManha.max}</td>
                                </tr>
                                <tr>
                                    <td class="turno">TURNO: TARDE</td>
                                    <td class="conteudo-turno">${horarioClube.horarios.turnoTarde.min} ÀS ${horarioClube.horarios.turnoTarde.max}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        
            </div>
        </div>
    `

    const editDiasDaSemana = document.getElementById('tabela-corpo');

    diasSemanaClube.forEach(diaSemana => {
        editDiasDaSemana.innerHTML += `
            <tr id="dias-da-semana">
                <td class="dia-semana">${diaSemana.dias}</td>
                <td class="conteudo-dia-semana">${diaSemana.turmas}</td>
            </tr>
        `
    })

}

adicionaClube();


