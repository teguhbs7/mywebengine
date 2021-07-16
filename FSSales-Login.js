const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    //ADARO - SIS
    if ((username === "daniel460" && site === "buma-adaro") || 
       (username === "chrism663" && site === "buma-adaro") || 
       (username === "veridwi985" && site === "buma-adaro") || 
       (username === "marselkl17" && site === "buma-adaro") || 
       (username === "Arsy12nisa" && site === "buma-adaro") || 
       (username === "moedianto" && site === "buma-adaro") || 
       (username === "renita1906" && site === "buma-adaro") || 
       (username === "teguhbs7" && site === "buma-adaro") || ) {
        window.location.href = "https://fs-sales.blogspot.com/p/my-fs-adaro-sis.html";
        return;
    } else if (username === "1399" && password === "hfaisal998") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-faisal-habib-9827372.html";
        return;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
