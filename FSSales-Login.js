const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const site = loginForm.site.value;
    
    //ADARO - BUMA
    if ((username === "daniel460" && site === "buma-adaro") || 
       (username === "chrism663" && site === "buma-adaro") || 
       (username === "veridwi985" && site === "buma-adaro") || 
       (username === "marselkl17" && site === "buma-adaro") || 
       (username === "Arsy12nisa" && site === "buma-adaro") || 
       (username === "moedianto" && site === "buma-adaro") || 
       (username === "renita1906" && site === "buma-adaro") || 
        (username === "wahyu497" && site === "buma-adaro") || ) 
       (username === "teguhbs7" && site === "buma-adaro") || ) {
        window.location.href = "https://fs-sales.blogspot.com/p/my-fs-adaro-sis.html";
        return;
    
    // ADARO - SIS
    } else if ((username === "rohim14" && site === "sis-adaro") || 
       (username === "zohan49" && site === "sis-adaro") || 
       (username === "mmunir02" && site === "sis-adaro") || 
       (username === "anggara31" && site === "sis-adaro") || 
       (username === "marselkl17" && site === "sis-adaro") || 
       (username === "Arsy12nisa" && site === "sis-adaro") || 
       (username === "moedianto" && site === "sis-adaro") || 
       (username === "renita1906" && site === "sis-adaro") || 
        (username === "wahyu497" && site === "sis-adaro") || ) 
       (username === "teguhbs7" && site === "sis-adaro") || ) {
        window.location.href = "https://fs-sales.blogspot.com/p/my-fs-adaro-sis.html";
        return;
    }  else if ((username === "daniel460" && site === "sis-adaro") || 
       (username === "chrism663" && site === "buma-adaro") || 
       (username === "veridwi985" && site === "buma-adaro") || 
       (username === "marselkl17" && site === "buma-adaro") || 
       (username === "Arsy12nisa" && site === "buma-adaro") || 
       (username === "moedianto" && site === "buma-adaro") || 
       (username === "renita1906" && site === "buma-adaro") || 
        (username === "wahyu497" && site === "buma-adaro") || ) 
       (username === "teguhbs7" && site === "buma-adaro") || ) {
        window.location.href = "https://fs-sales.blogspot.com/p/my-fs-adaro-sis.html";
        return;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
