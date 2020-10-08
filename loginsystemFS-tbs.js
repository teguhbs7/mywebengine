
  var objPeople = [
	  // AJP
	{ // Object @ 0 index
		username: "imron",
		password: "imron07"
	},
	  
	  // BUMA LATI
	{ // Object @ 1 index
		username: "faisal",
		password: "hfaisal998"
	},
	{ // Object @ 2 index
		username: "kurnia",
		password: "kurniacr820"
	},
	  { // Object @ 2 index
		username: "susanto",
		password: "ssanto468"
	},
	  { // Object @ 2 index
		username: "nur",
		password: "nurtri553"
	},
	  { // Object @ 2 index
		username: "wawan",
		password: "wawans73"
	},
	  { // Object @ 2 index
		username: "rachmad",
		password: "rachmad57"
	},
	  { // Object @ 2 index
		username: "ari",
		password: "ari735"
	  },
	  { // Object @ 2 index
		username: "indra",
		password: "indrabudikusuma"
	}
	  

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the  objPeople array

		if(username == objPeople[i].username && password == objPeople [i].password) {
            function btntest_onclick(){
            	window.location.href = "https://support-fs.blogspot.com/p/controls.html";
            } btntest_onclick()
          return;
    	}
      
      
      	else if(username !== objPeople[i].username && password !== objPeople [i].password) {
           function btntest_onclick(){
				//alert("Username dan Password Salah!");
             	//var a;
             	document.getElementById("alerts3").style.display = "block";
             	return;
             	//document.getElementByClassName("alerts").innerHTML = "op";
           } btntest_onclick()
          return;
        }
      
      	else if(username !== objPeople[i].username) {
           function btntest_onclick(){
				//alert("Username dan Password Salah!");
             	//var a;
             	document.getElementById("alerts1").style.display = "block";
             	return;
             	//document.getElementByClassName("alerts").innerHTML = "op";
           } btntest_onclick()
          return;
        }
      	
      	else if(password !== objPeople [i].password) {
           function btntest_onclick(){
				//alert("Username dan Password Salah!");
             	//var a;
             	document.getElementById("alerts2").style.display = "block";
             	return;
             	//document.getElementByClassName("alerts").innerHTML = "op";
           } btntest_onclick()
          return;
        }
      
	}
		//console.log("incorrect username or password")
}
