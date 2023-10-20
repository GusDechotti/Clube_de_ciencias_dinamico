var apihoraio = `https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22horarios%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A`;
var apidiadasemana = `https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22diasdasemana%22%5D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A`;

fetch(apihoraio, {
    method: "GET"
    })
    .then(result => result.json())
    .then(({result}) => {
      console.log(result)
    document.getElementById('horariomclu').innerText = result[0].turnomanha;
    document.getElementById(`horariotclu`).innerText = result[0].turnotarde;
  });