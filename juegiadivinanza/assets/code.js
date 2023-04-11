const main = document.querySelector(".main")
const contVictorias = document.querySelector(".contVictorias");
const vicJug1 = document.querySelector(".vicJug1");
const vicJug2 = document.querySelector(".vicJug2");
const turnoJug1 = document.querySelector(".turnoJug1");
const jug1In = document.querySelector(".jug1In");
const confNum = document.querySelector(".confNum");
const turnoJug2 = document.createElement("div");
const jug2In = document.createElement("input");
const confNum2 = document.createElement("button");
const textoJug2 = document.createElement("p");
textoJug2.clasName="textoJug2"


jug2In.className = "jug2In"
turnoJug2.className=turnoJug2
confNum2.className = "confNum2"
turnoJug2.appendChild(jug2In);
turnoJug2.appendChild(confNum2);
turnoJug2.appendChild(textoJug2);

main.appendChild(turnoJug2);
turnoJug2.style.display = "none"

vicJug1.value = 0;
vicJug2.value = 0;

const jug1 = {
    nombre: "",
    puntos: 0
}

//confNum.addEventListener('click',function(){
//   jug1.nombre = jug1In.value;
//})



turnoJug2.style.textAlign ="center"

turnoJug2.style.justifyContent="center"
textoJug2.style.marginLeft="10px"
textoJug2.style.fontSize="25px"
confNum2.style.height="6vh"
jug2In.style.height="5vh"






var numero = 0
var inforGameOver = document.createElement("div");
inforGameOver.className = "inforGameOver";
var textoGameOver = document.createElement("p");

inforGameOver.appendChild(textoGameOver);
main.appendChild(inforGameOver);
confNum.addEventListener('click', function () {
    textoGameOver.textContent = ""
    numero = jug1In.value;
    textoJug2.textContent = "Jugador 2 ingrese un numero del 1 al 100"
    turnoJug2.style.display = "flex"
    confNum2.textContent = "CONFIRMAR"
    

})
var contadorIntentos = 5;
var numero2 = -3;

//DIV PARA INFORMAR





confNum2.addEventListener('click', function () {
   
    numero2 = jug2In.value;
    if (contadorIntentos < 0) {
        turnoJug2.style.display = "none"
        textoGameOver.innerHTML = "Se ha quedado sin intentos. El <b> Jugador 1 </B> ha ganado"
        vicJug1.value++
        contadorIntentos = 5;
    } else {
        let mensaje;
        if (numero2 == numero) {
            turnoJug2.style.display = "none"
            vicJug2.value++
            textoGameOver.textContent = "¡Felicidades! ¡Ha ganado el juego!"
            mensaje = "¡Felicidades! ¡Ha ganado el juego!"
        } else {
            
            if (numero2 < numero) {
                mensaje = "Ingrese un número mayor";
            } else {
                mensaje = "Ingrese un número menor";
            }
            textoJug2.textContent = "Jugador 2: " + mensaje;
            textoGameOver.innerHTML = `Número incorrecto.  ${mensaje}  le quedan <b style="color:red">${contadorIntentos}</b> intentos`;
        }
    }
    contadorIntentos--
})

