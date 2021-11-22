// Codigo del cuadrado

console.group('Cuadrado');


function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4
};
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado(9) + ' cm');

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado
};
console.log('El area del cuadrado es: ' + areaCuadrado(9) + ' cm^2');

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo");



function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
};
console.log('El perimetro del triangulo es: ' + perimetroTriangulo(5, 5, 7) + ' cm');


function areaTriangulo(baseTriangulo, alturaTriangulo) { 
    return (baseTriangulo * alturaTriangulo) / 2
};
console.log('El area del triangulo es: ' + areaTriangulo(7, 5.5) + ' cm^2');

function alturaIsoseles(lado1,base){
    return Math.sqrt((lado1*lado1)-((base*base)/4))

}


console.groupEnd();

// Codigo del circulo

console.group("Circulo");


function diametroCirculo(radioCirculo){
    return radioCirculo * 2
};
console.log('El diametro del circulo es: ' + diametroCirculo(6) + ' cm');

const PI = Math.PI;


function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo)
    return diametro * PI
};
console.log('El perimetro del circulo es: ' + perimetroCirculo(5) + ' cm');

function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI
};
console.log('El area del circulo es: ' + areaCirculo(9) + ' cm^2');

console.groupEnd();

// funciones para el cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const valor = input.value

    const perimetro = perimetroCuadrado(valor)
    alert("El perimetro del cuadrado es: " + perimetro + " cm")

};

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const valor = input.value

    const area = areaCuadrado(valor)
    alert("El area del cuadrado es: " + area + " cm^2")

};


// funciones para el triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1")
    const valor1 = Number(input1.value)
    const input2 = document.getElementById("inputTriangulo2")
    const valor2 = Number(input2.value)
    const input3 = document.getElementById("inputTriangulo3")
    const valor3 = Number(input3.value)
    
    const perimetro = perimetroTriangulo(valor1, valor2, valor3)
    alert("El perimetro del triangulo es: " + perimetro + " cm")


};


function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo3")
    const valor3 = Number(input3.value)
    const input4 = document.getElementById("inputTriangulo4")
    const valor4 = Number(input4.value)
    
    const area = areaTriangulo( valor3, valor4)
    alert("El area del triangulo es: " + area + " cm^2")
    

}

// funciones para el circulo

function calcularAreaCirculo(){
    const inputCirculo = document.getElementById("inputCirculo1")
    const valor1 = Number(inputCirculo.value)

    const area = areaCirculo(valor1)
    alert("El area del circulo es: " + area + " cm^2")
  
};

function calcularPerimetroCirculo(){
    const inputCirculo = document.getElementById("inputCirculo1")
    const valor1 = Number(inputCirculo.value)
    const diametro = diametroCirculo(valor1)

    const perimetro = perimetroCirculo(valor1)
    alert("El perimetro del circulo es: " + perimetro + " cm")

}



function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo1")
    const valor1 = Number(input.value)

    const diametro = diametroCirculo(valor1)
    alert("El diametro del circulo es: " + diametro + " cm")

};

function calcularAlturaIsoseles(){

    const input1 = document.getElementById("inputIsoseles1")
    const valor1 = Number(input1.value)
    const input2 = document.getElementById("inputIsoseles2")
    const valor2 = Number(input2.value)
    const input3 = document.getElementById("inputIsoseles3")
    const valor3 = Number(input3.value)

    if (valor1 === valor2 &&  valor1 != valor3){

        const altura = alturaIsoseles(valor1, valor3)
        alert("La altura del triangulo isoseles es: " + altura + " cm")
    }
    
    else{
        alert("Las medidas no corresponden a un triangulo isoseles")
    };
    

};