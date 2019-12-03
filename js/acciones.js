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
	var palabras = [];
	
	function inicializarvariables(){
	encontradas=0;
	oportunidades=7;
	temporal="";
	posicionactual=0;
	letraactual=0;
			alert ("comenzar");

	palabraoculta= palabras[encontradas].textoPalabra.toUpperCase();
			alert (palabraoculta);

	ocultarpalabra(palabraoculta);
	

	$('#imagen').attr('src','images/'+oportunidades+'.png');
	$('#palabra').text(palabraactual);
	
	$('#actual').text(abecedario[posicionactual]);
	}
	
    //document.addEventListener("deviceready", function(){
	$('#btn-comenzar').on('click',function(){
		inicializarvariables();
	});
function ocultarpalabra(palabra)
{
	palabraactual="";
	for (x=0; x<palabra.length;x++)
	{
		if (abecedario.includes(palabra.charAt(x)))
	{
		palabraactual=palabraactual+"_";
	}
	else 
	{
		palabraactual=palabraactual+palabra.charAt(x);
	}
		
	}
	return palabraactual;
	
}
	


function obtenercolecciones(txtIP) {
	alert (txtIP);
	 return $.post("http://"+txtIP+"/ahorcado/obtenercolecciones.php",function(){
	 });
}
		
		
		 $('#btnbuscarcolecciones').on('click', function(){
			 $('#cargando').show();
			  $('#seleccion-opciones').hide();
	$.when(obtenercolecciones($('#txtIP').val())).then(function successHandler(datos){
		var arreglo= JSON.parse(datos);
		for(var i=0;i<arreglo.length;i++)
		{
			var option=new Option(arreglo[i].coleccion,arreglo[i].coleccion);
			$('#optcolecciones').append(option);
			$('#optcolecciones').trigger("change");
			
			
		}
		$('btnbuscarcolecciones').hide();
		$('seleccion').trigger("change");
					 $('#cargando').hide();
			$('#seleccion-opciones').show();
		}, function errorHandler(){
						 $('#cargando').hide();

		 alert("Error");
		 $('btnbuscarcolecciones').show();
		 $('#seleccion-opciones').hide();
		});
		return false;

	   
	 });//click btnenviar
	   var colecciones=[];
	   $('#btnseleccionar').on('click',function(){
	   $.when($.post("http://"+$('#txtIP').val()+"/ahorcado/obtenerpalabras.php",{cual: $('#optcolecciones').val(),cuantas: $('#txtcuantas').val()})).then( function exito(datos){
		   palabras=JSON.parse(datos);
		   //alert (palabras[0].textoPalabra);
	   }, function error(e) {
		   alert ('error' + e);
		   
	   }
	   );
	   });
	 //click btnseleccionar 
	   
      $('#siguiente').on('click', function(){
		if (posicionactual<26)
		{
			posicionactual=posicionactual+1;
		}
		else 
		{
			posicionactual=0;
		}
		  $('#actual').text(abecedario[posicionactual]);
		 
	  });
	  
      $('#anterior').on('click', function(){
		  if (posicionactual>0)
		{
			posicionactual=posicionactual-1;
		}
		else 
		{
			posicionactual=26;
		}
		  $('#actual').text(abecedario[posicionactual]);
	  });
	  
  $('#actual').on('click',function(){
	 letraactual = $('#actual').html();
		  temporal="";
		  for(x=0; x<palabraoculta.length;x++)
		  {
			  if(letraactual.charAt(0)==palabraoculta.charAt(x))
			  {
				 temporal=temporal+letraactual;
				  
			 }  
			 else 
			 {
				 temporal=temporal+palabraactual.charAt(x);
				 
		  }		  
		  }
		  if(palabraactual==temporal)
		  {
			  oportunidades=oportunidades-1;
	$('#imagen').attr('src','images/'+oportunidades+'.png');
			  if(oportunidades<=0)
			  {
				  alert ('Fin del juego');
				  $('#palabra').text(palabraoclta);
			  }
		  }
		  else
		  {
			  palabraactual=temporal;
			  $('#palabra').text(palabraactual);
			  	  encontradas+=1;

			  if(palabraactual==palabraoculta)
			  {
				  alert('adivinado');
				  if(encontradas < palabras.length)
  {
	  palabraoculta = palabras[encontradas].textoPalabra.toUpperCase();
	 ocultarpalabra(palabraoculta);
	  $('#palabra').text(palabraactual);
	  oportunidades=7;
	  $('#imagen').attr('src','images/'+oportunidades+'.png');
	  
  }
  else
  {
	  fin
	    }
			  }
		  }
		  
  });
  //Win 
  
  
}); //ready