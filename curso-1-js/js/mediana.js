function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}


let mediana;

function calcularMediana(numbers = []) {
    numbers = numbers.sort(function(a, b) {
        return a - b;
    });
    console.log(numbers);
    mitadLista = parseInt(numbers.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    if (esPar(numbers.length)) {
        const elemento1 = numbers[mitadLista - 1];
        const elemento2 = numbers[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElemento1y2;
        console.log(mediana);
    } else {
        mediana = numbers[mitadLista];
        console.log(mediana);
    }


}

calcularMediana([100, 101, 900, 9900, 300, 302]);


// lista1 = [
//     100,
//     200,
//     900,
//     700,
//     1000,
//     12,
// ];

// lista1.sort(function(a, b) {
//     return a - b;
// })