<script>
  var objPeople = [
	{ // Object @ 0 index
		username: "admin-01",
		password: "admin-fs01"
	},
	{ // Object @ 1 index
		username: "admin-02",
		password: "admin-fs02"
	},
	{ // Object @ 2 index
		username: "admin-03",
		password: "admin-fs03"
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
