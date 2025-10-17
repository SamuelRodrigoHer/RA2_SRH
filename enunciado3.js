let formulario = document.getElementById("formulario")

let resultado = document.getElementById("resultado")

//Escucha el evento submit del formulario
formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    let numero = document.getElementById("numero").value.trim()

    //Convertir el valor a número.
    let n = Number(numero)
    //Validar que es un número.
    if(isNaN(n)){
        resultado.innerHTML = "<span> Error: introduce un número </span> "
        return
    }
    //validar que es un número entero positivo.
    if(!Number.isInteger(n) || n < 1){
        resultado.innerHTML = "<span> Error: introduce un número positivo </span>"
        return
    }

    //Calcular la suma usando el bucle for
    let suma = 0
    for(let i = 1 ; i <= n ; i++){
        suma += i
    }
    
    resultado.innerHTML = `El resultado de la suma del 1 al ${n} es <strong>${suma}</strong>`
})