//ejercicio 8
for (let i = 51; i >=1; i--) {
document.write(i)
}
//ejercicio9

for (let i = 0; i<=10; i++) {
    document.write("5 x" +i+"="+i*5+"<br>");
}
//ejercicio10
//let palabra = prompt("Dame una palabra");
//for (let i = 0; i < 100; i++) {
   // document.write(palabra+"<br>");
    
//ejercicio11
let numeroEntero= prompt("Escribe un número entero");

for (let i =numeroEntero; i>=0; i--){
    if (i>0) {
        document.write(i + ",")
    }else{
        document.write(i)
    }  
}