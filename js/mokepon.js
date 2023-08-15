let AtaqueJugador
let VidasJugador = 3
let AtaqueEnemigo
let VidasEnemigo = 3 
var nombre;
obtenerNombreJugador();

function iniciarJuego(){  
    let SectionSeleccionaTuAtaque = document.getElementById("selecciona-tu-ataque")
    SectionSeleccionaTuAtaque.style.display = "none"

    let SectionReiniciar = document.getElementById("Reiniciar")
    SectionReiniciar.style.display = "none"

    let BotonMascota = document.getElementById("Boton-Mascota")
    BotonMascota.addEventListener("click",SeleccionarMascotaJugador)

    let BotonFuego = document.getElementById("Boton-Fuego")
    BotonFuego.addEventListener("click", AtaqueFuego)
    let BotonAgua = document.getElementById("Boton-Agua")
    BotonAgua.addEventListener("click", AtaqueAgua)
    let BotonTierra = document.getElementById("Boton-Tierra")
    BotonTierra.addEventListener("click", AtaqueTierra)
    let BotonReiniciar = document.getElementById("Boton-Reiniciar")
    BotonReiniciar.addEventListener("click", ReiniciarJuego)
}

function obtenerNombreJugador(){
    nombre = prompt("Cual es tu nombre entrenador?");

    alert("Bienvenido entrenador "+nombre+" has entrado a un gimnasio de entrenamiento y has de escoger tu pokemon, mucha suerte colega!") 
}

function SeleccionarMascotaJugador(){

    let imagenPokemon = document.createElement("img")
    imagenPokemon.width = "70";

    let SectionseleccionaTuChango = document.getElementById("selecciona-tu-chango")
    SectionseleccionaTuChango.style.display = "none"

    let SectionSeleccionaTuAtaque = document.getElementById("selecciona-tu-ataque")
    SectionSeleccionaTuAtaque.style.display = "block"

    let imputName = document.getElementById("TRAINER-NAME")
    let imputPokemon = document.getElementById("TRAINER-POKEMON")
    let imputSQUIRTLE = document.getElementById("SQUIRTLE")
    let imputCHARIZARD = document.getElementById("CHARIZARD")
    let imputEEVEE = document.getElementById("EEVEE")
    let imputPIKACHU = document.getElementById("PIKACHU")
    let imputCHARMANDER = document.getElementById("CHARMANDER")
    let imputBULBASAUR = document.getElementById("BULBASAUR")
    let Spanchangojugador = document.getElementById( "chango-jugador")

if (imputSQUIRTLE.checked) {
    Spanchangojugador.innerHTML = "SQUIRTLE"

    imagenPokemon.src = "./assets/gif/squirtlegb.gif";
    imagenPokemon.alt = "SQUIRTLE";
    imputPokemon.appendChild(imagenPokemon);
} 
 else if (imputCHARIZARD.checked) {
    Spanchangojugador.innerHTML = "CHARIZARD"

    imagenPokemon.src = "./assets/gif/charizardgb.gif";
    imagenPokemon.alt = "CHARIZARD";
    imputPokemon.appendChild(imagenPokemon);
}
 else if (imputEEVEE.checked) {
    Spanchangojugador.innerHTML = "EEVEE"

    imagenPokemon.src = "./assets/gif/eeveegb.gif";
    imagenPokemon.alt = "EEVEE";
    imputPokemon.appendChild(imagenPokemon);
}
 else if (imputPIKACHU.checked) {
    Spanchangojugador.innerHTML = "PIKACHU"

    imagenPokemon.src = "./assets/gif/pikachugb.gif";
    imagenPokemon.alt = "PIKACHU";
    imputPokemon.appendChild(imagenPokemon);
}
 else if (imputCHARMANDER.checked) {
    Spanchangojugador.innerHTML = "CHARMANDER"

    imagenPokemon.src = "./assets/gif/charmandergb.gif";
    imagenPokemon.alt = "CHARMANDER";
    imputPokemon.appendChild(imagenPokemon);
}
 else if (imputBULBASAUR.checked) {
    Spanchangojugador.innerHTML = "BULBASAUR"

    imagenPokemon.src = "./assets/gif/bulbasaurgb.gif";
    imagenPokemon.alt = "BULBASAUR";
    imputPokemon.appendChild(imagenPokemon);
}
 else {
 alert("Selecciona a tu MOKEPON")
}
imputName.innerHTML = nombre
SeleccionarMascotaEnemigo()
}

function SeleccionarMascotaEnemigo() {
    let MascotaAleatorio = aleatorio(1,6)
    let spanchangoenemigo = document.getElementById("chango-enemigo")
    if (MascotaAleatorio== 1) {
        spanchangoenemigo.innerHTML = "SQUIRTLE"
    } 
    else if (MascotaAleatorio == 2) { 
        spanchangoenemigo.innerHTML = "CHARIZARD" 
    } 
    else if (MascotaAleatorio == 3) { 
        spanchangoenemigo.innerHTML = "EEVEE" 
    }
    else if (MascotaAleatorio == 4) { 
        spanchangoenemigo.innerHTML = "PIKACHU" 
        }
    else if (MascotaAleatorio == 5) { 
        spanchangoenemigo.innerHTML = "CHARMANDER" 
    }
    else {
        spanchangoenemigo.innerHTML = "BULBASAUR"
     }
}

function AtaqueFuego(){
    AtaqueJugador = "FUEGO 🔥"
    AtaqueAleatorioEnemigo()
    }
function AtaqueAgua(){
    AtaqueJugador = "AGUA 💧"
    AtaqueAleatorioEnemigo()
    }
function AtaqueTierra(){
    AtaqueJugador = "TIERRA 🌱"
    AtaqueAleatorioEnemigo()
    }

function AtaqueAleatorioEnemigo(){
 let AtaqueAleatorio = aleatorio(1,3)

    if (AtaqueAleatorio == 1) { 
        AtaqueEnemigo = "FUEGO 🔥"
        }
        else if (AtaqueAleatorio == 2) { 
            AtaqueEnemigo = "AGUA 💧"
        }
        else { 
            AtaqueEnemigo = "TIERRA 🌱"
            }

    combate()  

}

function combate(){

    let spanVidasJugador=document.getElementById('Vidas-Jugador')
    let spanVidasEnemigo=document.getElementById('Vidas-Enemigo')
    

    if (AtaqueEnemigo == AtaqueJugador){
        CrearMensaje("EMPATE➰")
    }
    else if(AtaqueJugador == "FUEGO 🔥" && AtaqueEnemigo == "TIERRA 🌱"){
        CrearMensaje("GANASTES 🍾")
        VidasEnemigo --
        spanVidasEnemigo.innerHTML=VidasEnemigo
    }
    else if (AtaqueJugador == "AGUA 💧" && AtaqueEnemigo == "FUEGO 🔥"){ 
        CrearMensaje("GANASTES 🍾")
        VidasEnemigo --
        spanVidasEnemigo.innerHTML=VidasEnemigo
    }
    else if (AtaqueJugador == "TIERRA 🌱" && AtaqueEnemigo == "AGUA 💧"){
        CrearMensaje("GANASTES 🍾")
        VidasEnemigo --
        spanVidasEnemigo.innerHTML=VidasEnemigo
    }
    else {
        CrearMensaje("PERDISTES 😥")
        VidasJugador --
        spanVidasJugador.innerHTML=VidasJugador
    }
    RevisarVidas()

} 

function RevisarVidas(){
    if(VidasEnemigo == 0 ){ 
        CrearMensajeFinal("FELICITACIONES GANASTES! 🍾")
    }  
    else if (VidasJugador == 0){
        CrearMensajeFinal("DEDICATE A OTRA COSA POR QUE PERDISTES! 😥")
    }
}
function CrearMensaje(resultado) {
    let SectionMensajes = document.getElementById("Mensajes")
    
  let parrafo = document.createElement("p")  
  parrafo.innerHTML = "Tu chango ataco con " + AtaqueJugador +  ", El chango del enemigo ataco con " +  AtaqueEnemigo +  "" + resultado
  SectionMensajes.appendChild(parrafo)
}

function CrearMensajeFinal(resultadoFinal) {
    let SectionMensajes = document.getElementById("Mensajes")
    
  let parrafo = document.createElement("p")  
  parrafo.innerHTML = resultadoFinal
  SectionMensajes.appendChild(parrafo)

  let BotonFuego = document.getElementById("Boton-Fuego")
  BotonFuego.disabled = true
  let BotonAgua = document.getElementById("Boton-Agua")
  BotonAgua.disabled = true
  let BotonTierra = document.getElementById("Boton-Tierra")
  BotonTierra.disabled = true

  let SectionReiniciar = document.getElementById("Reiniciar")
  SectionReiniciar.style.display = "block"

}

function ReiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
