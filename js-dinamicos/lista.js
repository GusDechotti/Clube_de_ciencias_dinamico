fetch('https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22listapremios%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A', {
    method: "GET"
    })
    .then(result => result.json())
    .then(({result}) => {
    document.getElementById('listapremios').innerText = result[0].descricao;
  });