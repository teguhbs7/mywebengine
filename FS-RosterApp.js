const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    
    
    if (username === "ajp01") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ajp.html?m=1";
        return;
    }
    
    else if (username === "bumalati02") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-lati.html";
        return;
    }
    
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
