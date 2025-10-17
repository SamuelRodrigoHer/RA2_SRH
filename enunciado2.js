//Pedimos al usuario introducir 3 números
let numero1 = prompt('Ingresa el primer número')
let numero2 = prompt('Ingresa el segundo número')
let numero3 = prompt('Ingresa el tercer número')

//Comparamos los numero para determinar el menor
if(numero1 < numero2 && numero1 < numero3){
    document.writeln(`${numero1} es el menor`)
}else if(numero2 < numero1 && numero2 < numero3){
    document.writeln(`${numero2} es el menor`)
}else if(numero3 < numero2 && numero3 < numero1){
    document.writeln(`${numero3}es el menor`)
}else{
    document.writeln('No se puede determinar un número menor')
}