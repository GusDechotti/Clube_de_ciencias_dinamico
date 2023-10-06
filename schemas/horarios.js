

export default {
  name: 'horarios',
  type: 'document',
  title: 'Horários',
  fields: [
    {
      name: 'idade',
      type: 'string',
      title: 'Idade'
    },
    {
      name: 'turnoManha',
      type: 'object',
      title: 'Turno da Manhã',
      fields: [
        {
          name: 'min',
          type: 'string',
          title: 'Horário Inicial'
        },
        {
          name: 'max',
          type: 'string',
          title: 'Horário Final'
        }
      ],
    },
    {
      name: 'turnoTarde',
      type: 'object',
      title: 'Turno da Tarde',
      fields: [
        {
          name: 'min',
          type: 'string',
          title: 'Horário Inicial'
        },
        {
          name: 'max',
          type: 'string',
          title: 'Horário Final'
        }
      ],
    },
    {
      title: 'Dias da semana',
      name: 'diaSemana',
      type: 'array',
      of: [{type: 'diaInfo'}]
    }
  ]
}