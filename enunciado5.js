const mostrarTabla = (event) =>{
    //Evita que el formulario recargue al hacer submit
    event.preventDefault()

    //Obtenemos el número ingresado y lo convertimos a número
    const numero = Number(document.getElementById("numero").value)


    let tabla = document.getElementById("tabla")
    let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`
    tablaMultiplicar += "<ul>"

    //Bucle para generar la tabla de multiplicar
    for(let i = 0 ; i <= 10 ; i++){
        tablaMultiplicar += `<li> ${numero} * ${i} = ${numero * i}</li>`
    } 
    tablaMultiplicar += "</ul>"
    tabla.innerHTML = tablaMultiplicar
}

//Asocia la función mostarTabla al evento submit
document.getElementById("formulario").addEventListener("submit", mostrarTabla)
