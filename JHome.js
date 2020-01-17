function createNode(element) {
    return document.createElement(element); //creare nou element
  }

  function append(parent, el) {		//lipire element
    return parent.appendChild(el); 
  }
  
 
//portiunea care updateaza in ajax siteul adaugand autori in pagina
const http = new XMLHttpRequest();
const url = 'https://randomuser.me/api/?results=10'; //se vor cere 10 poze deodata 
const ul = document.getElementById('authors');
var list = [];
console.log(list);
//incaracare poze din api "url" folosind ajax
//ajax.1
function update (element){
	//ajax
 fetch(url)
  .then((resp) => resp.json()) // data devine json
  .then(function(data) {
	  let authors = data.results;
	  list = list.concat(authors);
	  console.log(list);
	  
	  return authors.map(function(author){ //pentru fiecare autor primit se aplica functia 
		  let li = createNode('li'),
		  img = createNode('img'),
		  span = createNode('span');
		  li.style="list-style-type:none;";
		  //npm library 2:altele.4
		  span.className ="animated  rollIn delay-3s";
		  img.className ="animated  rollIn delay-3s";
		  img.src = author.picture.medium;
		  span.innerHTML= `${author.name.first} ${author.name.last}`; 
		  append(li,img);
		  append(li,span);
		  append(ul,li); //adaugarea noilor noduri in elementul "autori" din html
		  	//putem salva lista de prieteni in local storage pentru a ramane constanta, tinand cont ca imaginile sunt diferite de fiecare data cand dam reload
			//altele.5
		  window.ondblclick = function () {
			  if (confirm('Are you sure you want to save this thing into the database?')) {
				localStorage.setItem('myEventsArray', JSON.stringify(list));
				alert("lista de prieteni salvata");
				} 
		  }
		  
	  })
  })
		
}
//evenimente.4
var updatePhotos = setInterval(update, 2000);


//buton de oprire a updatarii pozelor
var stopBut = document.getElementById("stopUpdate");
stopBut.style.width = "120px";
stopBut.style.height = "30px";
stopBut.style.position = "fixed";
stopBut.style.left = "250px";
stopBut.style.background = "#5BD2FB";
stopBut.style.color = "black";
stopBut.style.cursor = "pointer";
stopBut.style.opacity = "1";
stopBut.innerHTML = "Stop Update";


//functia butonului de oprire a updatarii pozelor
//Evenimente.4
document.getElementById("stopUpdate").onclick = function(){
	clearInterval(updatePhotos);
}


//Dupa secunde de inactivitate ecranul scade intensitatea culori pana la miscarea mouseului
//evenimente de click.4
var div = document.createElement("div");
console.log(div);
div.style.width = "120%";
//npm library 3:altele.4
div.className ="animated fadeIn";
div.style.height = "120%";
div.style.position = "fixed";
div.style.background = "grey";
div.style.color = "#E6E6E6	";
div.innerHTML = "Move mouse to resume";
div.style.opacity = "0.6";
div.style.zIndex = "1";


//intunecarea ecranului modifica ok = 1, luminarea lui ok = 0;
var ok = 0;
window.onmousemove = function(){
if(ok == 1){
document.getElementById("AfkMask").removeChild(div);
ok = 0;
black_fade();
}
}
//on wheel si on mouse move, dispare perdeaua neagra
window.onwheel = function(){
if(ok == 1){
document.getElementById("AfkMask").removeChild(div);
ok = 0;
black_fade();
}
}

//set timeout
black_fade();
function black_fade(){
	setTimeout(function(){
				document.getElementById("AfkMask").appendChild(div);
				ok = 1;
				}, 4000);
}

//buton catre pagina de friendlist
var friendListButon = document.createElement("div");
	friendListButon.id = "fListButonId";
	friendListButon.style.background = "#5BD2FB";
	friendListButon.style.width="100px";
	friendListButon.style.height="30px";
	friendListButon.style.position="absolute";
	friendListButon.style.top="16px";
	friendListButon.style.left="500px";
		ahref = document.createElement('a');
		ahref.href =  'FriendList.html';
		ahref.innerHTML = "Friendlist"
		ahref.style.textDecoration= "none";
		friendListButon.appendChild(ahref);
	document.body.appendChild(friendListButon);


// scroll la capatul paginii la apasare pe orice buton 
//evenimente.3
window.onkeypress = function()
{
	window.scrollTo(0,document.body.scrollHeight);
}



