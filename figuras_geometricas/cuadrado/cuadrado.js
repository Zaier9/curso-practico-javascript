// Codido del cuadrado
console.group("Cuadrados")

function perimetroCuadrado (lado) {
    return lado * 4;
}
perimetroCuadrado()

function areaCuadrado(lado) {
    return lado * lado;
} 
areaCuadrado()

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}