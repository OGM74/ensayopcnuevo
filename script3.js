const peliculas= [
    { id: 1, nombre: "Thor"},
    { id: 2, nombre: "Ant-Man"},
    { id: 3, nombre: "Terminator"},
    { id: 4, nombre: "Ip-Man"},
    { id: 5, nombre: "Rocky"},
]
const indiceDeTerminator= peliculas.findIndex(pelicula => pelicula.nombre === "Terminator")
console.log(indiceDeTerminator)
peliculas.splice(indiceDeTerminator,1)
console.log(peliculas)

const estudiantes=[
    {nombre: 'Juan', nota:3.4},
    {nombre: 'Laura', nota: 6},
    {nombre: 'Katherine', nota: 4.3},
    {nombre: 'Jonathan', nota: 5.4}
];
const estudiantesAprobados= 
estudiantes.filter(estudiante =>estudiante.nota >=4.5)
console.table(estudiantesAprobados)

let trabajadores= [
    {nombre: 'Constanza', cargo: 'Chef'},
    {nombre: 'Luis', cargo: 'garzón'},
    {nombre: 'Stephanie', cargo: 'Administradora'},
    {nombre: 'Andres', cargo: 'Recepcionista'},
    {nombre: 'Pedro', cargo: 'garzón'},
    {nombre: 'Felipe', cargo: 'garzón'},
    {nombre: 'María', cargo: 'garzón'},
    {nombre: 'Diego', cargo: 'garzón'},
]
const trabajadoresGarzon=
trabajadores.filter(trabajador=> trabajador.cargo==="garzón")
console.table(trabajadoresGarzon)

let trabajadores1= [
    
    {nombre: 'Luis', cargo: 'garzón'},
    {nombre: 'Pedro', cargo: 'garzón'},
    {nombre: 'Felipe', cargo: 'garzón'},
    {nombre: 'María', cargo: 'garzón'},
    {nombre: 'Diego', cargo: 'garzón'},
]
console.log(trabajadores1.length)