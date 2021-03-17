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
    
    else if (username === "psg16") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-psg-sambarata.html";
        return;
    }
    
    else if (username === "psg-pd") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-psg-padaidi.html";
        return;
    }
    
    else if (username === "mkp09") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-mkp-sesayap.html";
        return;
    }
    
    // RML Sesayap
    else if (username === "rml18") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/abcd.html";
        return;
    }
    
    else if (username === "bumasdj04") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-sungai-danau.html";
        return;
    }
    
    else if (username === "bumabng06") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-binungan.html";
        return;
    }
    
    else if (username === "bumatbg25") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-tabang.html";
        return;
    }
    
    else if (username === "bumaadaro03") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-adaro.html";
        return;
    }
    
    else if (username === "bumaibp05") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-ibp.html";
        return;
    }
    
    else if (username === "sisadr19") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-sis-adaro.html";
        return;
    }
    
    else if (username === "kblroto31") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-kbl-roto.html";
        return;
    }
    
    else if (username === "kbltbg30") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-kbl-tabang.html";
        return;
    }
    
    else if (username === "ck-mhu") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ck-mhu.html";
        return;
    }
    
    else if (username === "ck-bmb2") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ck-bmb.html";
        return;
    }
    
    else if (username === "ck071") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ck-dmp.html";
        return;
    }
    
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
