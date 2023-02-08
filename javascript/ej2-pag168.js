//ejercicio2
let1=2;
let2=4;
let3=6;
let4=8;
letsuma= let1 + let2;
letsuma2=let3 + let4;
if (letsuma>letsuma2) {
    console.log(`a+b(${letsuma}) es mayor que c+d (${letsuma2})`);
} else {
    console.log(`a+b(${letsuma}) es menor que c+d (${letsuma2})`);
}
//ejercico3

const ang1=60;
const ang2=100;
const ang3=20;
let angtotal= ang1 + ang2 + ang3
if (angtotal== 180) 
{
    document.write("La suma de los 3 angulos es igual a 180")
} else {
    document.write("La suma de los 3 angulos no suman 180")
}
//ejercicio4

const a=2;
if ( a % 2==0)
 { 
    document.write("Es par")   
}
 else 
{ 
    document.write("No es par")
}
//ejercicio5
let x=4
let y=2
let z=3
if (x>y && x>z)
    {
    console.log(`El numero mayor es ${x}`)}
         else
        {
        if(y>z)
        {
         console.log(`El numero mayor es ${y}`)
        }
        else    
        {
        console.log(`El numero mayor es ${z}`)
        }
    }
//Ejercicios condicional -switch
let dia= "miercoles";
{
    case("lunes");
       console.log (`Hoy es lunes`);
    break;
    case "martes"=
        console.log(`Hoy es martes`);
    break;
    case "miercoles"=
       console.log(`Hoy es miercoles`);
    break;
    case "jueves"=
        console.log(`Hoy es jueves`);
    break;
    case "viernes"=
        console.log(`Hoy es viernes`);
    break;
    case "sabado"=
        console.log(`Hoy es sabado`);
    break;
    default=
    console.log(`Hoy es domingo`);
}
let fecha = new Date();
let mes = fecha.getMonth();
switch (mes) {
    case 0:
        document.write("Es enero");
    break;
    case 1:
        document.write("Es febrero");
        break;
    case 2:
        document.write("Es marzo");
        break;
    case 3: 
    document.write("Es abril");
        break;
    case 4:
        document.write("Es mayo");
        break;
    default:
        break;


}
