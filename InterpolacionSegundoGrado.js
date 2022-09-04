'use strict';

function limpiar(){
    document.getElementById('Interpolación').reset();
}

function solucionar(){
    var X = Number(document.getElementById('numero1').value);
    var X0 = Number(document.getElementById('numero2').value);
    var fX0 = Number(document.getElementById('numero3').value);
    var X1 = Number(document.getElementById('numero4').value);
    var fX1 = Number(document.getElementById('numero5').value);
    var X2 = Number(document.getElementById('numero6').value);
    var fX2 = Number(document.getElementById('numero7').value);
    let f1;

    const parte1 = (`f1(${X}) = (((${X} - ${X1}) / (${X0} - ${X1})) * ((${X} - ${X2}) / (${X0} - ${X2}))) * (${fX0})`);
    const parte2 = (` + (((${X} - ${X0}) / (${X1} - ${X0})) * ((${X} - ${X2}) / (${X1} - ${X2}))) * (${fX1})`);
    const parte3 = (` + (((${X} - ${X0}) / (${X2} - ${X0})) * ((${X} - ${X1}) / (${X2} - ${X1}))) * (${fX2})`);

    const parte12 = (`f1(${X}) = (((${X - X1}) / (${X0 - X1})) * ((${X - X2}) / (${X0 - X2}))) * (${fX0})`);
    const parte22 = (` + (((${X - X0}) / (${X1 - X0})) * ((${X - X2}) / (${X1 - X2}))) * (${fX1})`);
    const parte32 = (` + (((${X - X0}) / (${X2 - X0})) * ((${X - X1}) / (${X2 - X1}))) * (${fX2})`);

    const parte13 = (`f1(${X}) = ((${(X - X1) / (X0 - X1)}) * (${(X - X2) / (X0 - X2)})) * (${fX0})`);
    const parte23 = (` + ((${(X - X0) / (X1 - X0)}) * (${(X - X2) / (X1 - X2)})) * (${fX1})`);
    const parte33 = (` + ((${(X - X0) / (X2 - X0)}) * (${(X - X1) / (X2 - X1)})) * (${fX2})`);

    let paso1 = (parte1 + parte2 + parte3);;
    let paso2 = (parte12 + parte22 + parte32);
    let paso3 = (parte13 + parte23 + parte33);
    let paso4 = (`f1(${X}) = ` + (((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * (fX0) + " + " + (((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * (fX1) + " + " + (((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * (fX2));
    let paso5 = (`f1(${X}) = ` + (((((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * (fX0)) + ((((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * (fX1)) + ((((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * (fX2))));
    f1 = ((((((X - X1) / (X0 - X1)) * ((X - X2) / (X0 - X2))) * (fX0)) + ((((X - X0) / (X1 - X0)) * ((X - X2) / (X1 - X2))) * (fX1)) + ((((X - X0) / (X2 - X0)) * ((X - X1) / (X2 - X1))) * (fX2))));
    let resultado = ("f1 =", f1);

    document.getElementById("primerR").innerHTML = paso1;
    document.getElementById("segundoR").innerHTML = paso2;
    document.getElementById("tercerR").innerHTML = paso3;
    document.getElementById("cuartoR").innerHTML = paso4;
    document.getElementById("quintoR").innerHTML = paso5;
    document.getElementById("respuesta").innerHTML = resultado;

    var bug = (document.getElementById('error').value);

    document.getElementById("errorVerdadero").innerHTML = bug - f1;

    document.getElementById("errorPorcentual").innerHTML = ((bug - f1) / bug) * (100) + "%";
}
