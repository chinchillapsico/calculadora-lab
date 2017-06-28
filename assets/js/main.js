$(document).ready(function() { 
	$("input:button").click(function(){

		btn = $(this).val();/* esta variable guarda el valor ingresado gracias a this,
		                    this selecciona el elemento que activó el evento, de esta 
		                    manera el evento corre individualmente con cada elemento
		                    */

		pantalla = $("#resultado").val(); /* etsa variable guarda los valores input */

		if(btn=="C"){ /*si se presiona c los valores vuelven a cero, en blanco */

			$("#resultado").val("");

		}else{
		    if(btn=="="){ /*  si se presiona = se muestra el resultado*/
		    	$("#resultado").val(eval(pantalla));/*eval evalua el string que se va concatenando para ir 
		    	                                    desifrándolo como operación, sus funciones son básicas 
		    	                                    (suma, resta, multiplicación y división) */

		    }else{ /* si se presiona cualquier otro valor distinto de = se comcatena a los valres en pantalla*/
		    	$("#resultado").val(pantalla + btn);
		    }
		}
	})
});