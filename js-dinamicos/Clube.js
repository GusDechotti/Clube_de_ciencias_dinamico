
async function clube(){
    // Endpoint pego no query do Sanity

    const endpointClube = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22clube%22%5D%7B%0A++%22descricao%22%3A+description%2C%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++%22horario%22%3A+horarios-%3E%0A%7D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A "


    const resultadoApiClube = await fetch(endpointClube, {
        method: "GET",
    })

    // Convertendo o fetch da api em um objeto JSON

    const apiClubeJson = await resultadoApiClube.json()

    const apiClube = apiClubeJson.result[0]

    // Pegando o elemento da tabela de informações do Clube

    const divTabela = document.getElementById("clubes")

    // Adicionando o src da imagem

    const constSrcImgClube = document.querySelector("#imgClube")
    constSrcImgClube.setAttribute("src", apiClube.imagem)

    // Adicionando a descrição

    const pDescricaoClube = document.querySelector("#description")
    pDescricaoClube.innerText = apiClube.descricao

    // Adicionando a idade na tabela

    const idadeTabela = document.querySelector(".idade-tabela")
    idadeTabela.innerText = apiClube.horario.idade

    // Adicionando os horarios do periodo matutino

    const horarioTurnoManha = document.querySelector("#conteudo-manha")
    horarioTurnoManha.innerText = apiClube.horario.turnoManha.min
        + " às " + apiClube.horario.turnoManha.max

    // Adicionando os horarios do periodo vespertino

    const horarioTurnoTarde = document.querySelector("#conteudo-tarde")
    horarioTurnoTarde.innerText = apiClube.horario.turnoTarde.min
        + " às " + apiClube.horario.turnoTarde.max

    // Pegando tabela de dias da semana para incrementar percorrendo o array de Dias da Semana inseridos

    const editDiasDaSemana = document.getElementById("tabela-corpo-clube")

    // percorre array de dias da semana inseridos

    apiClube.horario.diaSemana.forEach(diaSemana => {

        // Criar linha na tabela

        var linhaDiasDaSemana = document.createElement("tr")

        // Criando o o td de conteudo da linha, adicionando a classe e o conteudo.
        
        var diaDaSemana = document.createElement("td")
        diaDaSemana.classList.add("dia-semana")
        diaDaSemana.innerText = diaSemana.dias

        var conteudoDiaDaSemana = document.createElement("td")
        conteudoDiaDaSemana.classList.add("conteudo-dia-semana")
        conteudoDiaDaSemana.innerText = diaSemana.turmas

        // Adicionando o conteudo na linha 

        linhaDiasDaSemana.append(diaDaSemana, conteudoDiaDaSemana)

        // Adicionando a linha na tabela

        editDiasDaSemana.append(linhaDiasDaSemana)

    })

}

clube()



