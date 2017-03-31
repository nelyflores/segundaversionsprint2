
function Objeto(titulo){
  this.titulo = titulo;

}


var dataListas=[];

function crearLista(){

  var titulo = document.getElementById("crearlista").value;
  var lista = new Objeto(titulo);
  dataListas.push(lista);
  imprime(lista);
}


 function imprime(contenido){
  var numeroId = Date.now();

  var node = document.createElement("section");
  node.style.fontSize = "30px";

  node.id=numeroId-1;
  var titulo = document.createTextNode(contenido.titulo);
  node.appendChild(titulo);
  document.getElementById("semana").appendChild(node);
 var elementosdelista = document.createElement("ul");
          elementosdelista.id = numeroId;
  var subtitulo = document.createElement("h5");
          subtitulo.innerHTML = "Agrega un pendiente:";
  var boton = document.createElement("button");
          boton.innerHTML = "Agregar Pendiente";
  var texto = document.createElement("input");
          texto.type = "text";
          texto.id = numeroId+1;

  var linea = document.createElement("hr");

  boton.onclick = function(){

    var id = texto.id;
    console.log(id);

    var pendienteTexto = document.getElementById(texto.id).value;
    var node = document.createElement("li");
      node.innerHTML = pendienteTexto + " <button onclick='eliminar(this)'>X</button> "+ "<br>";
			document.getElementById(id-1).appendChild(node);
    document.getElementById(texto.id).value = "";

  }




  //por cada lista pone un input y botn agregar y boton borrar
  document.getElementById("semana").appendChild(elementosdelista);
  document.getElementById("semana").appendChild(subtitulo);
  document.getElementById("semana").appendChild(texto);
  document.getElementById("semana").appendChild(boton);
  document.getElementById("semana").appendChild(linea);
   document.getElementById("crearlista").value = "";

}


function borrarTodo(){                                    //borra todas las lilstas y sus pendientes
	var element = document.getElementById("semana");
        while (element.firstChild) {
        element.removeChild(element.firstChild);
}
}

function eliminar(elemento)
			{
				elemento.parentNode.remove();

			}
