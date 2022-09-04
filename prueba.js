'use strict';
function limpiar(){
    document.getElementById('Interpolación').reset();
}

const opcion = Number(prompt("Coloque el numero de la ecuacion solicitada: 1: Interpolacion Lineal / 2: Lagrange de 1° Orden / 3: Interpolacion de segundo grado"));

if(opcion === 1){
    const X = Number(prompt("Interpolacion Lineal: Coloque el valor del la cordenada objetivo:"));
    const X0 = Number(prompt("Coloque el valor del la cordenada x0:"));
    const fX0 = Number(prompt("Coloque el valor del la cordenada f(x0):"));
    const X1 = Number(prompt("Coloque el valor del la cordenada x1:"));
    const fX1 = Number(prompt("Coloque el valor del la cordenada f(x1):"));
    let f1
 
    console.log(`f1(${X}) = ${fX0} + ((${fX1} - ${fX0}) / (${X1} - ${X0}))(${X} - ${X0})`);
    console.log(`f1(${X}) = ${fX0} + ((${fX1 - fX0}) / (${X1 - X0}))(${X - X0})`);
    console.log(`f1(${X}) = ${fX0} + (${(fX1 - fX0) / (X1 - X0)})(${X - X0})`);
    console.log(`f1(${X}) = ${fX0} + (${(((fX1 - fX0) / (X1 - X0)) * (X - X0))})`);
    console.log(`f1(${X}) = ${(fX0) + ((fX1 - fX0) / (X1 - X0)) * (X - X0)}`);
    f1 = (fX0) + ((fX1 - fX0) / (X1 - X0)) * (X - X0)
    console.log("f1 =", f1)
} else if(opcion === 2){
    const X = Number(prompt("Lagrange de 1° Orden: Coloque el valor del la cordenada objetivo:"));
    const X0 = Number(prompt("Coloque el valor del la cordenada x0:"));
    const fX0 = Number(prompt("Coloque el valor del la cordenada f(x0):"));
    const X1 = Number(prompt("Coloque el valor del la cordenada x1:"));
    const fX1 = Number(prompt("Coloque el valor del la cordenada f(x1):"));
    let f1

    console.log(`f1(${X}) = (((${X} - ${X1}) / (${X0} - ${X1})) * (${fX0})) + (((${X} - ${X0}) / (${X1} - ${X0})) * (${fX1}))`);
    console.log(`f1(${X}) = (((${X - X1}) / (${X0 - X1})) * (${fX0})) + (((${X - X0}) / (${X1 - X0})) * (${fX1}))`);
    console.log(`f1(${X}) = ((${((X - X1) * (fX0))}) / (${X0 - X1})) + ((${((X - X0) * (fX1))}) / (${X1 - X0})))`);
    console.log(`f1(${X}) = ((${((X - X1) * (fX0)) / (X0 - X1)}) + (${((X - X0) * (fX1)) / (X1 - X0)}))`);
    console.log(`f1(${X}) = ` + ((((X - X1) * (fX0)) / (X0 - X1)) + (((X - X0) * (fX1)) / (X1 - X0))));
    f1 = ((((X - X1) * (fX0)) / (X0 - X1)) + (((X - X0) * (fX1)) / (X1 - X0)))
    console.log("f1 =", f1)
} else if (opcion === 3){
    const X = Number(prompt("Interpolacion de segundo grado: Coloque el valor del la cordenada objetivo:"));
    const X0 = Number(prompt("Coloque el valor del la cordenada x0:"));
    const fX0 = Number(prompt("Coloque el valor del la cordenada f(x0):"));
    const X1 = Number(prompt("Coloque el valor del la cordenada x1:"));
    const fX1 = Number(prompt("Coloque el valor del la cordenada f(x1):"));
    const X2 = Number(prompt("Coloque el valor del la cordenada x2:"));
    const fX2 = Number(prompt("Coloque el valor del la cordenada f(x2):"));
    let f1

    const parte1 = (`f1(${X}) = (((${X} - ${X1}) / (${X0} - ${X1})) * ((${X} - ${X2}) / (${X0} - ${X2}))) * (${fX0})`);
    const parte2 = (` + (((${X} - ${X0}) / (${X1} - ${X0})) * ((${X} - ${X2}) / (${X1} - ${X2}))) * (${fX1})`);
    const parte3 = (` + (((${X} - ${X0}) / (${X2} - ${X0})) * ((${X} - ${X1}) / (${X2} - ${X1}))) * (${fX2})`);
    
    console.log(parte1 + parte2 + parte3);

    const parte12 = (`f1(${X}) = (((${X - X1}) / (${X0 - X1})) * ((${X - X2}) / (${X0 - X2}))) * (${fX0})`);
    const parte22 = (` + (((${X - X0}) / (${X1 - X0})) * ((${X - X2}) / (${X1 - X2}))) * (${fX1})`);
    const parte32 = (` + (((${X - X0}) / (${X2 - X0})) * ((${X - X1}) / (${X2 - X1}))) * (${fX2})`);

    console.log(parte12 + parte22 + parte32);

    const parte13 = (`f1(${X}) = ((${(X - X1) / (X0 - X1)}) * (${(X - X2) / (X0 - X2)})) * (${fX0})`);
    const parte23 = (` + ((${(X - X0) / (X1 - X0)}) * (${(X - X2) / (X1 - X2)})) * (${fX1})`);
    const parte33 = (` + ((${(X - X0) / (X2 - X0)}) * (${(X - X1) / (X2 - X1)})) * (${fX2})`);

    console.log(parte13 + parte23 + parte33);

    console.log(`f1(${X}) = ` + (((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * (fX0) + " + " + (((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * (fX1) + " + " + (((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * (fX2));
    
    console.log(`f1(${X}) = ` + (((((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * (fX0)) + ((((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * (fX1)) + ((((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * (fX2))));
    f1 = ((((((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * (fX0)) + ((((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * (fX1)) + ((((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * (fX2))));
    console.log("f1 =", f1)
} else {
    console.log("Ecuacion no encontrada ¯\_(ツ)_/¯");
}