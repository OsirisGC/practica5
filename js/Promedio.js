let n = cont ('Introduce la cantidad de calificaciones que quieres ingresar') ;
let a = 1 ;
let cont= 0 ;
while ((a-1)< n ){
    let grade = cont("Calificacion No. " + a)
    gradeInt= parseInt(grade, 10);
    cont = cont + gradeInt;
    a++;
}
let prom= cont/5;
alert ("Tu promedio final es: "+ prom);