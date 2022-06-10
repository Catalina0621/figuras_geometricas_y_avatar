function circulo(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("circulo")
}

function rombo(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("rombo")
}

function rectanguloh(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("rectanguloh")
}

function rectangulov(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("rectangulov")
}

function arriba(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("arriba")
}

function abajo(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("abajo")
}

function izquierda(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("izquierda")
}

function derecha(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("derecha")
}

function diagonal(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("diagonal")
}

function triangulo(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("triangulo")
}

function gif(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("gif")
}

function trapecio(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("trapecio")
    
}

function paralelograma(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("paralelograma")
    
}

function banderin(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("banderin")
    
}

function ovalo(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("ovalo")
    
}

function pacman(){
    var figura = document.getElementById("figura")
    figura.classList = "";
    figura.classList.toggle("pacman")
    
}

//Capturar Datos

function capturarDatos(){

    //Capturamos los valores de los campos de formulario

    var nombre = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    //Capturamos los elementos a los cuales les asignaremos los valores

    var micono = document.getElementById("mIcono");
    var mnombre = document.getElementById("mNombres");
    var medad = document.getElementById("mEdad");
    var mfecha = document.getElementById("mFecha");
    var mgenero = document.getElementById("mGenero");
    var memail = document.getElementById("mEmail");
    var mdescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar")

    mnombre.textContent = nombre;
    medad.textContent = edad;
    mfecha.textContent = fecha;
    mgenero.textContent = genero;
    memail.textContent = email;
    mdescripcion.textContent = descripcion;

    //Cambiar icono

    if (genero == "Masculino") {
        micono.src = "img/man.png"
    } else if (genero == "Femenino"){
        micono.src = "img/woman.png"
    } else { 
        micono.src = "img/other.png" 
    };

    //Cambiar color
    switch (color) {
        case "Lila":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("Lila")
            break;
        case "Verde":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("Verde")
            break;
        case "Naranja":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("Naranja")
            break;
        case "Terracota":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("Terracota")
            break;
        case "Cafe":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("Cafe")
            break;
    }


}