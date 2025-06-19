
---
//Este archivo contiene ejemplos ejecutables de los comandos vistos:

// Imprimir en consola
console.log("✅ Hola Mundo");

// Variables
let nombre = "Carlos";
const edad = 25;
console.log("Nombre:", nombre);
console.log("Edad:", edad);

// Tipos de datos
let texto = "Esto es un string";
let numero = 42;
let booleano = true;
let nulo = null;
let indefinido;

console.log("Tipos de datos:");
console.log("Texto:", texto);
console.log("Número:", numero);
console.log("Booleano:", booleano);
console.log("Null:", nulo);
console.log("Undefined:", indefinido);

// Operadores aritméticos
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 2;
let division = 8 / 2;
let modulo = 9 % 4;

console.log("Operaciones matemáticas:");
console.log("Suma: 5 + 3 =", suma);
console.log("Resta: 10 - 4 =", resta);
console.log("Multiplicación: 6 * 2 =", multiplicacion);
console.log("División: 8 / 2 =", division);
console.log("Módulo: 9 % 4 =", modulo);

// Condicionales
if (edad >= 18) {
    console.log("✅ Eres mayor de edad");
} else {
    console.log("❌ Eres menor de edad");
}

// Bucles
console.log("Bucle for (0 al 4):");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("Bucle while (0 al 2):");
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}

// Funciones
function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Ana"));

// Arrays
let frutas = ["Manzana", "Banano", "Naranja"];
console.log("Frutas:", frutas);
console.log("Primera fruta:", frutas[0]);
frutas.push("Uva");
console.log("Agregué Uva:", frutas);

// Objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

console.log("Persona:", persona);
persona.saludar();

// Eventos (ver index.html para ejemplo)
