// MEDIA

function calcularMedia(){
    var notaPrimeiroBimestre = parseFloat(document.getElementById("nota1").value);
    var notaSegundoBimestre = parseFloat(document.getElementById("nota2").value);
    var notaTerceiroBimestre = parseFloat(document.getElementById("nota3").value);
    var notaQuartoBimestre = parseFloat(document.getElementById("nota4").value);
    
    var somaDasNotas = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre;
    var media = somaDasNotas / 4;
    var valorMedia = media.toFixed(1);

    document.getElementById("media").innerHTML = "A sua média é " + + valorMedia;
    
}

// CALCULADORA 

function calcular (n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);

    seletor = document.getElementById("seletor").value;

    switch(seletor) {
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma ${n1} + ${n2} é = ${calculo}`
            break;
        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração ${n1} - ${n2} é = ${calculo}`
            break;
        case '/':
            calculo = Math.round((n1 / n2))
            if(Number.isNaN(calculo))
            {
                document.getElementById("resultado").innerHTML = `Insira um divisor válido.`
                break;
            }
            else 
            {
                document.getElementById("resultado").innerHTML = `O resultado da divisão ${n1} / ${n2} é = ${calculo}`
                break;
            }
        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação ${n1} * ${n2} é = ${calculo}`
            break;
        case '%':
            calculo = (n1 % n2)
            document.getElementById("resultado").innerHTML = `O resultado da porcentagem ${n1} % ${n2} é = ${calculo}`
            break;
    }
}

// TIMER 
var segundos = 00;
var minutos = 00;
var horas = 00;
var interval

function iniciar() {
    timer()
    interval = setInterval(timer, 1);
}
function pause() {
    clearInterval(interval);
}
function parar() {
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    document.getElementById('timer').innerText = '00:00:00';
}

function doisDigitos(digito) {
    if(digito < 10){
        return('0' + digito)
    }
    else {
        return(digito)
    }
}

function timer(){
    segundos = segundos + 1;
    if(segundos == 60){
        minutos = minutos + 1;
        segundos = 0;
        if(minutos == 60){
            minutos = 0;
            horas = horas + 1;
        }
    }
    document.getElementById('timer').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}