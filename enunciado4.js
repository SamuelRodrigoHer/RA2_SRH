let suma = 0
let contador = 0

//Obetener referencias de los elementos del DOM
const numero = document.getElementById("numero")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")

//Escuchar el evento "click" del botón
boton.addEventListener("click", () =>{
    //Convertimos a número
    const n = Number(numero.value)

    //Validar que es un número
    if(isNaN(n)){
        resultado.innerHTML = "<span> Error: Introduce un número </span>"
        return
    }

    suma += n
    contador ++

    //Verificar si la suma ha llegado a 100
    if(suma > 100){
        resultado.innerHTML = `<p>La suma ha superado 100</p><br>
                                Total acumulado : ${suma}<br>
                                Números Introducidos ${contador}`
    //Desactivamos el input y el botón para que no se puedan agregar más números
    boton.disabled = true
    numero.disabled = true
    }else{
        resultado.innerHTML = `<p> Suma actual ${suma}<br>
                                numeros introducidos ${contador}`
    }
    //Limpiamos el input para el siguiente número
    numero.value = ""
    //Coloca el cursor automáticamente en el input
    numero.focus()


})