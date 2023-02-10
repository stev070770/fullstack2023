
//ARRAY EJEMPLO
const coches = [' BMW' ,' Audi' ,' Ferrari' ,' Porsche'];
for (let coche of coches){
    console.log(coche);
}
//array .PUSH y .LENGHT

//ejercicio clase: crea un array= "programas[]"", añadir html, jv, css.
const programas= ['JV', 'CSS','HTML'];
console.log(programas)
 programas.push('Phyton')
 console.log(programas)
programas.unshift('C++')
console.log(programas)
programas.pop()
console.log(programas)
programas.shift()
console.log(programas)
programas.splice(2,1,'PHP','JAVA')
console.log(programas)

programas[3] = '';
programas[3] = 'si'
console.log(programas)

//
const frutas=['manzana','platano','sandia','melon']
frutas.slice(2,3)