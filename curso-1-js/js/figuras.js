//Perímetro y Ärea del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Función para el Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    result.innerHTML = "El perímetro del cuadrado es: " + perimetro + "cm";

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    result.innerHTML = "El área del cuadrado es: " + area;
}

//Perímetro y Ärea del Tríangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;

}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(value, value2, value3);
    result2.innerHTML = "El perímetro del tríangulo es: " + perimetro;
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputTriangulo");
    const input2 = document.getElementById("inputTriangulo2");
    const value = input.value;
    const value2 = input2.value;
    const area = areaTriangulo(value, value2);
    result2.innerHTML = "El área del triangulo es: " + area;
}
//Perímetro , circunferencia(Díametro) y Ärea del circulo
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
console.log(perimetroCirculo(2));

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.log(areaCirculo(2));
//Función para el Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    result3.innerHTML = "El Diámetro del circulo es: " + diametro;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    result3.innerHTML = "El perímetro del circulo es: " + perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    result3.innerHTML = "El área del circulo es: " + area;
}

//Función para calcular la altura de un iscoceles

function alturaIsoceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        return Math.sqrt(lado1 ** 2 - base ** 2);
    } else {
        alert("La medida del isoceles no es igual");
    }
}

//Función para Isoceles

function calcularAlturaIsoceles() {
    const input = document.getElementById("lado");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("base");
    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const altura = alturaIsoceles(value, value2, value3);
    result4.innerHTML = "La altura del isoceles es: " + altura;

}