function calcularModa(numbers = []) {
    const lista1Count = {};

    numbers.map(
        function(elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }

        }
    )

    const listaArray = Object.entries(lista1Count).sort(
        function(a, b) {
            return a[1] - b[1];
        }
    );
    console.log(listaArray);
    const moda = listaArray[listaArray.length - 1];
    return moda;

}

console.log(calcularModa([1, 2, 1, 1, 1, 3, 3, 3, 2, 2, 1, 3]))
    // lista1 = [
    //     1,
    //     2,
    //     3,
    //     1,
    //     1,
    //     2,
    //     2,
    //     3,
    //     1,
    // ];