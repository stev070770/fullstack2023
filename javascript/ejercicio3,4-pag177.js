//sumar
const sumar= (num1,num2,callback)=>{
    callback(num1+num2);
};
sumar(5,1,(resultado)=> {
    console.log(resultado);
});
//resta
 const resta= (num1,num2,callback) =>{
    callback(num1-num2);
 };
 resta(5,1,(resultado) =>{
 console.log(resultado)
});
//multiplicacion
const multi=(num1,num2,callback)=>{
    callback(num1*num2)
};
multi(6,2,(resultado)=>{
    console.log(resultado)
});
//
const div=(num1,num2,callback)=>{
    callback(num1/num2);
}
div(20,2,(resultado)=>{
    console.log(resultado)
});