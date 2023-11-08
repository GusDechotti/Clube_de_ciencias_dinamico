

// Endpoint pego no query do Sanity

const endpointCertificado = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22certificados%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A"

// Função assincrona consumindo a API 

async function consomeApimetodo(){
  const APIcertificado = await fetch(endpointCertificado, {
    method : "GET"
  })

  // Convertendo o fetch da api em um objeto JSON

  const APIcertificadoConvertida = await APIcertificado.json();

   // Inserindo a descrição de forma dinamica

  document.getElementById('certificado').innerText = APIcertificadoConvertida.result[0].descricao;
}

consomeApimetodo();