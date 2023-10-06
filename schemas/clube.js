export default
{
    name: 'clube',
    type: 'document',
    title: 'Clube',
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