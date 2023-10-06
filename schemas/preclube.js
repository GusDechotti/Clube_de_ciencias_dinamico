

export default
{
    name: 'preclube',
    type: 'document',
    title: 'Pré Clube',
    fields: [
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        },
        {
            title: 'Imagem',
            name: 'imagem',
            type: 'image'
        },
        {
             
        title: 'Horarios',
        name: 'horarios',
        type: 'reference',
        to: [{type: 'horarios'}]
        }
    ]
}