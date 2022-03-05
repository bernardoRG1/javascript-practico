let resultadoCuadrado = document.getElementById("squareResult");
let resultadoTriangulo = document.getElementById("triangleResult");
let resultadoCirculo = document.getElementById("resultadoCirculo");

let ProbabilidadInput = document.getElementById("resultadoProbabilidad")

let resultadoDesc = document.getElementById("resultadoDesc")

let cupones = {
    "manzana": 15,
    "platano": 20,
    "pera": 35,
};

const circulo = (diametro) => {
    let radio = diametro / 2;
    let pi = Math.PI;

    let perimetro = (2 * pi) * radio
     perimetro = perimetro.toFixed(2)

    let area = (2 * pi) * radio
    area = area.toFixed(2)

    return `El perimetro de este circulo es de ${perimetro} cm y su area es de ${area} cm`
}

function calcularPerimetroCuadrado()  {
    let InputLadoDelCuadrado = document.getElementById("lado");
    InputLadoDelCuadrado = Number(InputLadoDelCuadrado.value);

    let perimetro = InputLadoDelCuadrado * 4
    resultadoCuadrado.innerHTML = perimetro;
}

function calcularAreaCuadrado() {
    let InputLadoDelCuadrado = document.getElementById("lado");
    InputLadoDelCuadrado = Number(InputLadoDelCuadrado.value);

    let area = InputLadoDelCuadrado * InputLadoDelCuadrado
    resultadoCuadrado.innerHTML = area;
}


function calcularPerimetroTriangulo() {
    let base = document.getElementById("triangleBase");
    let altura = document.getElementById("triangleHigh");
    let hipotenusa = document.getElementById("triangleHip");

    let baseValue = Number(base.value)
    let alturaValue = Number(altura.value)
    let HipotenusaValue = Number(hipotenusa.value)

    let perimetro = alturaValue + baseValue + HipotenusaValue;

    resultadoTriangulo.innerHTML = perimetro
}


function calcularAreaTriangulo() {
    let base = document.getElementById("triangleBase");
    let altura = document.getElementById("triangleHigh");

    let baseValue = Number(base.value)
    let alturaValue = Number(altura.value)

    let area = (alturaValue * baseValue) / 2;

    resultadoTriangulo.innerHTML = area
}


function calcularPerimetroCirculo() {
    let radio = document.getElementById("circleRadius");
    let pi = Math.PI

    let radioValue = Number(radio.value)

    let perimetro = (pi * 2) * radioValue

     perimetro = perimetro.toFixed(2)

    resultadoCirculo.innerHTML = perimetro

}

function calcularAreaCirculo() {
    let radio = document.getElementById("circleRadius");
    let pi = Math.PI

    let radioValue = Number(radio.value)

    let area = pi * (radioValue * radioValue)

     area = area.toFixed(2)

    resultadoCirculo.innerHTML = area

}


function descuento() {

    let cuponInput = document.getElementById("cupon")
    let cuponValue = cuponInput.value.toLowerCase()

    let cuponDescuento = cupones[cuponValue] || 0


    let precio = document.getElementById("precio_input")
    let precioValue = Number(precio.value)

    let descuento = document.getElementById("descuento_input")
    let descuentoValue = Number(descuento.value)

    let precioTotal = (precioValue * (100 - cuponDescuento - descuentoValue ))/100 

    resultadoDesc.value = precioTotal

    
}

let arrayOperaciones = [];


let arrayCalculator = () => {
    let arrayInput = document.getElementById("listaArrayInput");
    arrayInputValue = Number(arrayInput.value)

    arrayOperaciones.push(arrayInputValue)

    console.log(arrayOperaciones)
}





function promedio() {
    let promedio = arrayOperaciones.reduce((valorAnterior, nuevoValor) => {
        return (valorAnterior + nuevoValor);
    })
    
    let promedioFinal = promedio / arrayOperaciones.length

    ProbabilidadInput.value = promedioFinal.toFixed(2)
}






let mediana = () => {
    let medianaDecimal = arrayOperaciones.length / 2

    let numeroTipo = (arrayOperaciones) => {
        if (arrayOperaciones % 2 === 0) {
            return false
        } else {
            return true
        }
    }
    
    if(numeroTipo(arrayOperaciones.length)) {
        let mediana =Math.ceil(medianaDecimal) - 1
        ProbabilidadInput.value = arrayOperaciones[mediana]
    } else {
        let medianaParPrimera = Math.ceil(medianaDecimal);
        let medianaParSegunda = Math.ceil(medianaDecimal) - 1;

        ProbabilidadInput.value = (arrayOperaciones[medianaParPrimera] + arrayOperaciones[medianaParSegunda]) / 2;
        
    }
    
}


let moda = () => {
    
let lista1cuenta = {};

arrayOperaciones.map(
    function(elemento) {
        if(lista1cuenta[elemento]) {
            lista1cuenta[elemento] +=1;
        } else {
            lista1cuenta[elemento] = 1; 
        }
    }
)

    let lista1Array = Object.entries(lista1cuenta).sort(
    function(valorAcumulado,nuevoValor){
        return valorAcumulado[1] - nuevoValor[1]
    }

);

    ProbabilidadInput.value = Number(lista1Array[lista1Array.length - 1][0])
}





