//pentru range update value
function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }
		
function subf(){		
 document.getElementById("regfrm").submit();
}

let str = document.getElementById("user");


//
function checkRegex(){
	let ok = 0; //ok numara erorile, returneaza false daca e mai mare decat 1
	//stringurile ce vor fi verificate
	let usr = document.getElementById("user").value;
	let email = document.getElementById("email").value;
	let pass1 = document.getElementById("pass1").value;
	let pass2 = document.getElementById("pass2").value;
	//regulile de verificare
	let usrp = new RegExp(".{5,15}");	
	let emailp = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}");	
	let pass1p = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}");	
	let pass2p = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}");	
	//testul,daca e negativ, se sterge inputul si se inlocuieste cu placeholder
	//1.
	let res = usrp.test(usr);
	if(!res){
		document.getElementById("user").value = "";
		document.getElementById("user").placeholder= "username invalid, intre 5 si 15 caractere";
		ok++;
		}
	//2.
	res = emailp.test(email)
	if(!res){
		document.getElementById("email").value = "";
		document.getElementById("email").placeholder= "email invalid"; 
		ok++;
		}
	//3.
	res = pass1p.test(pass1)
	if(!res){
		document.getElementById("pass1").value="";
		document.getElementById("pass2").value="";
		document.getElementById("pass1").placeholder = "parola invalida, majuscule,cifre, simboluri, lungime mai mare de 8";
		ok++;
	}		
		
	//parolele trebuie sa se potriveasca
	if(pass1!=pass2){document.getElementById("pass2").value="";
	document.getElementById("pass2").placeholder = "parolele nu se potrivesc";
	ok++;}
	
	//prevent default opreste reincarcarea paginii la failure
	
	if(ok>0){
		return false;
		e.preventDefault();
	}
}