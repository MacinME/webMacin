//crear una lista donde solo tenga los salarios
const salariosMex = mexico.map(
    function(personita) {
        return personita.salary;
    }
);
//ordenar mi array de menor a mayor
const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);
//Calcular la mediana de salarios
function esPar(numerito) {
    return (numerito & 2 === 0);
}

//calcular mediana formula
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}


//calcular la mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personitaMitad1, personitaMitad2);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

//Mediana del top 10%


const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(
    medianaGeneralMex,
    medianaTop10Mex,
);