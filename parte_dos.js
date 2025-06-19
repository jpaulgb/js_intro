
// 1. Evento click en un botón
document.getElementById("miBoton").addEventListener("click", function () {
    alert("¡Botón presionado!");
});

// 2. Evento submit en un formulario
document.getElementById("miFormulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe
    const nombre = document.querySelector("#miFormulario input").value;
    document.getElementById("resultado").innerText = "Hola, " + nombre + "!";
});

// 3. Evento keydown en el documento
document.addEventListener("keydown", function (event) {
    console.log("Tecla presionada:", event.key);
});

// 4. Evento change en un campo de selección
document.getElementById("colorSelector").addEventListener("change", function () {
    const color = this.value;
    document.body.style.backgroundColor = color;
});
