

// Endpoint pego no query do Sanity

const endpointMetodo = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22descricao_metodos%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A"

// Função assincrona consumindo a API 

async function consomeApimetodo(){
  const APImetodo = await fetch(endpointMetodo, {
    method : "GET"
  })

  // Convertendo o fetch da api em um objeto JSON

  const APImetodoConvertida = await APImetodo.json()

  // Inserindo a descrição de forma dinamica

  document.getElementById("metodo").innerText = APImetodoConvertida.result[0].descricao
} 

consomeApimetodo()
