/***************EJERCICIO DE PRODUCTOS ARREGLOS*******************/
function printList(list)
{
	var listHTML= '<ol>';
	for (var i=0; i < list.length; i += 1)
	{
		listHTML += '<p>'+ list[i] + '</p>';
	}
	listHTML += '</ol>';
	print(listHTML);
}


var busqueda;

var pelicula = [];
pelicula.push("El hobbit","Jorge Perero","Suspenso","Sipnosis","Imagen");
pelicula.push("Capitán América","Luis Pérez","Acción","Sipnosis","Imagen");
pelicula.push("X-Men","Juan Vera","Acción","Sipnosis","Imagen");
pelicula.push("Como entrenar a tu dragón 2","Holger Suárez","Aventura","Sipnosis","Imagen");
pelicula.push("Foxcatcher","Felipe Lopez","Drama","Sipnosis","Imagen");

//var productos = productos.toString();
while(true){
		var buscar = prompt("Ingrese el nombre del estudiante o visualice toda la B/D");
		
		if(buscar=='q')
		{
			break;
		}


		else if (buscar=='l')
		{
			document.write( pelicula + "<br/> <br/>")
		}
		else
		{
			var list = pelicula.indexOf(buscar);
			if (list >= 0)
			{
				alert("La pelicula " + buscar + " si existe en nuestro cine ");
				for (i=list;i<list+5;i++)
					{ 
						document.write("N°" + i + ": " + pelicula[i] + "<br  />") 
					}

				document.write( "<br  />") 

			}

			

			else
			{
				alert("La película" + buscar + " no existe en nuestros cines. ");
			}

		}

	}