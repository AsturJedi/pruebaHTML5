

function saluda(element){	
	element.innerHTML="Bienvenid@s al Restaurante Casa Adela. ";
	element.style.fontSize="1em";
		
}


function pulsado(elemento) {

	alert("La Reserva a enviar debe contener al menos los siguientes campos: \n Nombre \n Telf. \n Fecha de la Reserva  \n\n Muchas Gracias");
}


/*
//$("#resv").click("submit", enviar);
function enviar(){ //Envío de reserva

	cliente = $("#cliente").val();
	telf = $("#telf").val();
	date = $("#fechaReserva").val();
	
	if(cliente.length == 0 || telf.length == 0 || date.length == 0 )
	{
		alert("Debes rellenar los campos vacíos.");
	}
	else 	
		alert("Reserva:"+"\n\nNombre: "+cliente+"\nCorreo: "+correo+"\nTeléfono: "+telf+"\nAsistentes: "+asistentes+"\nFecha: "+date+"\nComedor"+prefer);

	return false;
}
*/