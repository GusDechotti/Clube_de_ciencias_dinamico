

const endpointLista = "https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22listapremios%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A";


async function consomeAPIlista(){
const APIlista = await fetch(endpointLista, {
    method: "GET"
    })
    const APIlistaConvertida = await APIlista.json();

    document.getElementById('listapremios').innerText = APIlistaConvertida.result[0].descricao;

}
consomeAPIlista();