//Codigo del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Aqui interatuamos con el HTML
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1, value2, value3);
    alert("El perimetro del triangulo es: " + area);
}

function alturaTriangulo(ladoA, ladoB, ladoC) {
    //...
}

function alturaTrianguloIsoceles() {
    if (ladoA != ladoB) {
        console.log("Los lados a y b no son iguales");
    } else{
        let trianguloPequenoLadoA; //PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}