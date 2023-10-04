// schemas/horaios.js
export default {
    name: 'horarios',
    type: 'document',
    title: 'Horários',
    fields: [
      {
        name: 'turnomanha',
        type: 'string',
        title: 'Turno manhã'
      },
      {
        name: `turnotarde`,
        type: `string`,
        title: `Turno tarde`
      },
      {
        name:`diadasemana`,
        type:`string`,
        title:`Dias da semana`
      },
      {
        name:`turma`,
        type:`string`,
        title:`Turma`
      }
    ]
  }