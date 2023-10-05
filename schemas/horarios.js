// schemas/horaios.js
export default {
    name: 'horarios',
    type: 'document',
    title: 'Horários',
    fields: [
      {
        name: 'turnomanha',
        type: 'string',
        title: 'Horário turno manhã'
      },
      {
        name: `turnotarde`,
        type: `string`,
        title: `Horário turno tarde`
      },
      {
        title: 'Dia da semana',
        name: 'diadasemana',
        type: 'reference',
        to: [{type: 'diasdasemana'}]
      }
    ]
  }