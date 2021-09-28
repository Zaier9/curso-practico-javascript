// Codigo del circulo
console.group("Circulos")

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");


// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


