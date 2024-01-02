
// function que imprima los 30 proximos años bisiestos siguientes a uno dado.
        
const esBisiesto = (year) => {
    return (year % 4 == 0 && year % 100 != 0) ||
        year % 400 == 0;
    }

const proximos30Bisiestos = (yearInicial) => {
    let contador = 0;
    let añoActual = yearInicial;

    while (contador < 30) {
        if (esBisiesto(añoActual)) {

            console.log(añoActual);
            contador++;
        }
        añoActual++;
    }
}
proximos30Bisiestos(2024);

/*
const AñosBisiestos = () => {
    
    let añoActual = new Date().getFullYear();
    console.log(`Año actual: ${añoActual}`);

    for (let i = 0; i <= 30; i++) {
        i++;
        console.log("Es o no es año Bisiesto"+i);

    }
}
*/