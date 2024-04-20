const autosCompactos= [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'gasolina'},
    {marca: 'BMV', modelo: '116d', combustible: 'diesel'}
];
const autosDeportivos=[
    {marca: 'Opel', modelo: 'Astra', combustible: 'gasolina'},
    {marca: 'Renault', modelo: 'Megane', combustible: 'gasolina'},
    {marca: 'Mitsibishi', modelo: 'Lancer', combustible: 'gasolina'},
];
const autos= autosCompactos.concat(autosDeportivos);
console.table(autos);