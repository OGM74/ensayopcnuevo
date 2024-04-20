const arreglo1=[1,2,3,4]
arreglo1.push("Hola")
console.log(arreglo1)

const arreglo2=[1,2,3,4]
arreglo2.unshift("Hola")
console.log(arreglo2)

const arreglo3=[1,2,3,4,5]
arreglo3.splice(3,0,"hola")
console.log(arreglo3)

const arreglo4=[1,2,3,4,5]
arreglo4.splice(2,1)
console.log(arreglo4)


const arreglo5=[1,2,3,4,5]
arreglo5.splice(3,1, "hola")
console.log(arreglo5)

const superHeroes=['batman', 'supermn', 'araña']
superHeroes.push('ironman')
console.log(superHeroes)
superHeroes.unshift('ironman')
console.log(superHeroes)
superHeroes.splice(3,1,'hulk')
console.log(superHeroes)

const usuarios=['Cristian', 'Paula', 'Macarena', 'Tamara']
usuarios.pop()
console.log(usuarios)
usuarios.unshift('Maria Jose')
console.log(usuarios)
usuarios.splice(1,1)
console.log(usuarios)
usuarios.includes('Cristian')
console.log(usuarios)
if(usuarios.includes('Cristian')){
    console.log('Hola Cristian');
}