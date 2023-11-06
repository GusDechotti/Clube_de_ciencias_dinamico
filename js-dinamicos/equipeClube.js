function atualizarEquipe() {

    fetch('https://hmwoh9gp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22equipe2%22%5D%7B%0A++%22Nome%22%3A+name%2C%0A++%22Cargo%22%3A+cargo%2C%0A++%22Imagem%22%3A+foto.asset-%3Eurl%2C%0A%7D%0A%0A', {
      method: "GET"
    })
    .then(result => result.json())
    .then(data => {
      const equipeDiv = document.getElementById('sep');


      equipeDiv.innerHTML = '';

    const info = data.result;

      info.forEach(member => {
        const profDiv = document.createElement('div');
        profDiv.className = 'profs';

        const imgElement = document.createElement('img');
        imgElement.src = member.Imagem; 

        const nomeDiv = document.createElement('div');
        nomeDiv.id = 'nome';

        const h3Element = document.createElement('h3');
        h3Element.textContent = member.Nome;

        const pElement = document.createElement('p');
        pElement.textContent = member.Cargo; 

        nomeDiv.appendChild(h3Element);
        nomeDiv.appendChild(pElement);

        profDiv.appendChild(imgElement);
        profDiv.appendChild(nomeDiv);

        equipeDiv.appendChild(profDiv);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao buscar os dados da API: ' + error);
    });
  }

  window.addEventListener('load', atualizarEquipe);

  atualizarEquipe();