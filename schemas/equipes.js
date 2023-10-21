
export default {
    name: 'Equipe',
    type: 'document',
    title: 'Equipe',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nome'
      },
      
      {
        name: 'cargo',
        type: 'string',
        title: 'Cargo'
      },

      {
        name: 'foto',
        type: 'image',
        title: 'Foto'
      }
    ]
  }