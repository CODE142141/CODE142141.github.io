function validarFormulario() {
    // Obtener los valores de los campos
    var nombres = document.getElementById("nombres").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var consulta = document.getElementById("consulta").value;

    // Expresión regular para validar el correo electrónico
    var regexCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Verificar si los campos obligatorios están llenos
    if (nombres === "" || correo === "" || consulta === "") {
        alert("Por favor, completa los campos obligatorios (Nombres y Apellidos, Correo electrónico, y Consulta).");
        return false;
    }

    // Validar formato de correo electrónico
    if (!regexCorreo.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validar si el número telefónico es numérico (opcional)
    if (telefono !== "" && isNaN(telefono)) {
        alert("Por favor, ingresa un número telefónico válido.");
        return false;
    }
    alert("Datos enviados correctamente");
    // Si todo está bien, se envía el formulario
    return true;
}



