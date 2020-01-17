//paginea lucreaza in jurul obiectelor "autori" care au nume, prenume, poze,id,locatie, etc
//structuri de date.2


// daca pagina este goala, inseamna ca nu e nimic in local storage, 
//intoarce in pagina anterioara si apasa dublu click pentru a salva imaginile ce sunt pe acea pagina
function createNode(element) {
    return document.createElement(element); //creare nou element
  }

  function append(parent, el) {		//lipire element
    return parent.appendChild(el); 
  }


const ul = document.getElementById('friends');


 //punem in array lista de prieteni salvata in local storage
	var friendlist = [];
	var storedString = localStorage.getItem('myEventsArray');
	if( storedString  ){
    friendlist = JSON.parse(storedString);
	}
	var friendnames  = [];
	var authorobjects = [];
	var filteredFriends = [];
	 friendlist.map(function(author){ //pentru fiecare autor primit se aplica functia 
		  var li = createNode('li'),
		  img = createNode('img'),
		  span = createNode('span'),
		  spanadd = createNode('span'),
		  spanrem = createNode('span'),
		  addf = createNode('button'),
		  remf = createNode('button');
		  img.src = author.picture.medium;
		  span.innerHTML= `${author.name.first} ${author.name.last}`; 
		  spanadd.innerHTML = "add ";
		  spanrem.innerHTML = "remove";
			
			authorobjects.push(author);
		  append(li,spanadd);
		  append(li,spanrem);
		  append(li,addf);
		  append(li,remf);
		  append(li,img);
		  append(li,span);
		  append(ul,li); //adaugarea noilor noduri in elementul "autori" din html
		    addf.style.position = "relative";
			remf.style.position = "relative";
			remf.style.background = "red";
			remf.style.left = "-5px";
			remf.style.top = "-5px";
			addf.style.top = "-5px";
			remf.style.height = "7px";
			addf.style.height = "7px";
			remf.style.width = "15px";
			addf.style.width = "15px";
			addf.style.background = "green";
			addf.style.left = "-6px";
			addf.style.border = "none";
			remf.style.border = "none";
			addf.style.cursor = "pointer";
			remf.style.cursor = "pointer";
			  
			spanadd.style.fontSize ="7px";
			spanadd.style.position = "relative";
			spanadd.style.left ="28px";
			
			spanrem.style.position = "relative";
			spanrem.style.left ="28px";
			spanrem.style.top ="-12px";
			spanrem.style.fontSize ="7px";
		
			addf.onclick = function(){
				var ok = 1;
				for(var i = friendnames.length-1;i>=0;i--){
					if(friendnames[i]==author.name.first){
						ok = 0;
					}
				}
				if(ok == 1){
					friendnames.push(author.name.first);
				    console.log(friendnames);
				    console.log(author.name.first);
				}
				}
				//evenimente.1
			remf.onclick = function(){
				for(var i = friendnames.length-1;i>=0;i--){
					if(friendnames[i]==author.name.first){
						friendnames.splice(i,1);
						console.log(friendnames);
					}
				}
			}

	  })
	  //remove last friend added button
	  var pop = document.createElement("div");
				//style
		pop.style.background = "red";
		pop.style.border = "4px solid #000";
		pop.style.width="100px";
		pop.style.height="40px";
		pop.style.position="absolute";
		pop.style.top="20px";
		pop.style.right="100px";
		pop.style.color = "black";
		pop.className = "animated  zoomInLeft ";
		pop.innerHTML = "Remove last friend added";
		pop.style.opacity = "0.6";
		
	    document.body.appendChild(pop);
		
		pop.onclick = function(){
			friendnames.pop();  //structuri de date.1
			console.log(friendnames);
			pop.style.opacity = Math.random();  //schimba opacitatea la nimereala altele.8
		}
		
	 
	  
	//text deasupra audio playerului
	var textaudio = createNode("p");
	textaudio.innerHTML = "tu cu array-ul gol";
	textaudio.style.textAlign = "left";
	textaudio.style.display = "block";
	document.body.appendChild(textaudio);
	
	//audio altele.6
	var player = document.createElement("AUDIO");
	if(player.canPlayType("audio/mpeg")){
		player.setAttribute("src","tom.mp3");
		player.setAttribute("controls","controls");
	}
	//npm animation 1 : altele.4
	player.style.float = "left";
	player.className = "animated  zoomInLeft ";
	document.body.appendChild(player);
	
	//text deasupra video playerului
	var textvideo = createNode("p");
	textvideo.innerHTML = "tu cu array-ul plin";
	textvideo.style.display = "block";
	textvideo.style.position = "relative";
	textvideo.style.top = "80px";
	textvideo.style.right = "120px";
	textvideo.style.fontSize = "20px";

	document.body.appendChild(textvideo);
	
	//video altele.7
	var playerv = document.createElement("VIDEO");
	if(playerv.canPlayType("video/webm")){
		playerv.setAttribute("src","tom.webm");
		playerv.setAttribute("controls","controls");
		playerv.style.display = "block";
		textvideo.style.position = "relative";
		
	}
	playerv.style.float = "right";
	document.body.appendChild(playerv);
	
	

	//un input box pentru filtrat oamenii dupa tara de provenienta, e input dinamic,deci va cauta pe parcurs ce scriem
	//filtru(input)are un hitbox foarte mic, trebuie apasat pe marginea de jos pentru a scrie, va fi autofocusata la incaracarea paginii
	//input creat din javascript in loc de html, dar nu pentru formular. formulare.3 partial
	var filtruState = document.createElement("p");
	filtruState.innerHTML = "Filtru dupa stat";
	document.body.appendChild(filtruState);
	var filtru = document.createElement("input");
	filtru.setAttribute("type", "text");
	filtru.autofocus = true;
	filtru.onclick = function(){
		filtru.focus;
	}	
	document.body.appendChild(filtru);
	
	//filtrarea va fi aratata aici
	 var searchres = document.createElement("div");
		searchres.style.background = "white";
		searchres.style.width="300px";
		searchres.style.height="400px";
		searchres.style.position="absolute";
		searchres.style.border = "4px solid #000";		
	    document.body.appendChild(searchres);
	
	
	
	//dinamic input validation, va scrie rezultatele cautarii pe ecran pe parcurs ce le scriem
	//se vor filtra autorii(oamenii din poze) dupa tara de zona de provenienta(location.state)
	//:altele.1, validare in timp real:formulare.5
	filtru.oninput= function(e){
		var rezults = [];
		for (var i = 0; i<=authorobjects.length-1; i++)
		{
			if(authorobjects[i].location.state.includes(this.value)){
				//structuri de date.1 array.push
				rezults.push(authorobjects[i].location.state);	
			}
		}	
		for(var i = 0; i<=rezults.length-1;i++){
		searchres.innerHTML = rezults.join(',   \n');
		}
	}
	
	