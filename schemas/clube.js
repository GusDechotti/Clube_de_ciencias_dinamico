
export default {
    name: 'clube',
    type: 'document',
    title: 'Clube',
    fields: [
      {
        name: 'Imagem',
        type: 'image',
        title: 'Imagem'
      },
      
      {
        name: 'description',
        type: 'string',
        title: 'Descrição'
      },

      {
        name: 'idade',
        type: 'number',
        title: 'Faixa-Etária'
      }
    ]
  }