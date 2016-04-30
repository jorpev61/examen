var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p><p/>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});

$overlay.click(function(){
	$overlay.hide();
});


/********MENU PARA MOVILES*********/

//Creamos el menú lateral
var $select = $("<select></select>");
$("#menu").append($select);

//Recorrer el menú
$("#menu a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option>");
	$option.val($anchor.attr("href"));
	$option.text($anchor.text());
	$select.append($option);

	if ($(this).hasClass("select")) 
	{
		$option.prop("selected",true);
	}
});

/*var $button = $("<button>Go</button>");
$("#menu").append($button);

$button.click(function(){
	window.location = $select.val();
});*/


$select.change(function(){
	window.location = $select.val();
});

/*********REGISTRO DE USUARIOS*********/

//ESCONDE AYUDAS
var $password = $("#password");
var $confirmPassword = $("#confirm_Password");

$("form span").hide();

function eventoPassword(){
	//validar si la clave es valida
	if ($password.val().length > 8) {
		//Esconder ayuda si clave es valida
		$password.next().hide();
	}else{
		//Caso contrario mostrar ayuda
		$password.next().show();
	}
}

function usuarioIngresado(){
	return ($("username").val().length>0);
}

function validacionCompleta(){
	return esPasswordValido() && coincidenPasswords() && usuarioIngresado;
}

function confirmarPassword(){
	if ($password.val() === $confirmPassword.val()) {
		$confirmPassword.next().hide();
	}else{
		$confirmPassword.next().show();
	}
}

function puedeEnviar(){
	$("#submit").prop("disabled", !validacionCompleta());
}

$password.focus(eventoPassword).keyup(eventoPassword);