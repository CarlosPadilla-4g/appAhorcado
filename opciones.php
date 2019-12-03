<?php 
include ('conf/config.inc.php');

 echo $tpl->cargar_parte('opciones.html','encabezado');
  $consulta = "SELECT TABLE_NAME as name FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'ahorcado'";
  $resultado = mysqli_query($conexion, $consulta);
  
	 
  while($row = mysqli_fetch_array($resultado))
 {
	 
    

	 print ("<br>");
	 
	 print ("<div id=".'tabs'.">");
	  print ("<form action= 'opciones.php' method='post' id='formPrincipal'>");
      print ("<tr>");
	  print ("<td>");
      print ("<input Type='submit' name='opciones' value='$row[name]'>\n");
	  print ("</td>");
      print ("</tr>");
	  print ("<br>");
	  print ("</form>");
	 print ("</div>");
 }
	 
	 echo $tpl->cargar_parte('opciones.html','formulario');

 	echo $tpl->cargar_parte('opciones.html','pie');
?>