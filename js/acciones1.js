// JavaScript Document
$(document).ready(function(e){
	var abecedario=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var encontradas=0;
	var oportunidades=0;
	var plabraoculta="";
	var palabraactual="";
	var temporal="";
	var posicionactual=0;
	var letraactual="";
	
	function inicializarvariables(){
	encontradas=0;
	oportunidades=6;
	temporal="";
	posicionactual=0;
	letraactual=0;
	palabraoclta= obtenerpalabras(encontradas);
	palabraactual= ocultarpalabra(palabraoculta);
	$('#imagen').attr('src','imagenes/'+oportnidades+'.png');
	$('#palabra').text(plabractual);
	$('#actual').text(abecedario[posicionactual]);
	}
	
    //document.addEventListener("deviceready", function(){
	$('#btncomenzar').on('click',function(){
		inicializarvariables();
	});

});
