
function proximoEnLaFila(arreglo, elemento){

    arreglo.push(elemento);
    return arreglo.shift();
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));

console.log(" ");

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 7));

console.log("Despues: " + JSON.stringify(miArreglo));

console.log(" ");

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 8));

console.log("Despues: " + JSON.stringify(miArreglo));