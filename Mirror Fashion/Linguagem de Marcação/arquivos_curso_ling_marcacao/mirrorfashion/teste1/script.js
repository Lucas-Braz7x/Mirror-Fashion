        function soma(){
            var v1 = Number(document.getElementById("v1").value);
            var v2 = Number(document.getElementById("v2").value);
            document.getElementById("texto").innerHTML = "+="+(v1+v2); 
            
        }
        function subtracao(){
	    var v1 = Number(document.getElementById("v1").value);
            var v2 = Number(document.getElementById("v2").value);
	    document.getElementById("texto").innerHTML = "-="+(v1-v2);

	}

	function multiplicacao(){
	    var v1 = Number(document.getElementById("v1").value);
            var v2 = Number(document.getElementById("v2").value);
	    document.getElementById("texto").innerHTML = "X="+(v1*v2);
	}
	
	function divisao(){
	    var v1 = Number(document.getElementById("v1").value);
            var v2 = Number(document.getElementById("v2").value);
	    document.getElementById("texto").innerHTML = "/="+(v1/v2);
	}

