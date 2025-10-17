let formulario = document.getElementById("formulario")

let resultado = document.getElementById("resultado")

formulario.addEventListener("submit",function(evento){
    //Evita que la paguina se recargue al enviar el formulario
    evento.preventDefault();

    //Obtener los valores introducidos por el usuario
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value

    //Validar la edad
    if(edad < 18 && edad >= 0){
        resultado.innerHTML = `
        <p>Hola ${nombre}, tienes ${edad}, eres menor de edad.</p>`
    }else if (edad >= 18){
        resultado.innerHTML = `
        <p>Hola ${nombre}, tienes ${edad}, eres mayor de edad.</p>`
    }else{
        resultado.innerHTML = `
        Ingresa una edad valida.<p>`
    }
})


