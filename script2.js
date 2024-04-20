const usuarios = ['Erick', 'Cristian', 'Max', 'Claudia'  ]
console.log(usuarios.length)

const apellidos=['Gonzalez', 'Aniston', 'Cox', 'Perry', 'LeBlanck', 'Schwimer']
const indicedePerry=apellidos.findIndex(apellido=>apellido==='Perry')
console.log(indicedePerry);

let actores= [
    {id: 431, nombre:'Jonny Deep'},
    {id: 124, nombre: 'Bratt Pitt'},
    {id: 541, nombre: 'Leonardo DiCaprio'},
    {id: 664, nombre: 'Morgan Freeman'}
];
console.log(actores)

const indiceDelActorAEliminar=actores.findIndex(actor=> actor.id =541)
actores.splice(indiceDelActorAEliminar, 1)
console.log(actores);


