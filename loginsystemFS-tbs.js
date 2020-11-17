const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    //AJP Loa Kulu
    if (username === "imron" && password === "imron07") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/imron-ahmad-s_15.html";
        return;
    }
    
    //BUMA LATI
    else if (username === "faisal" && password === "hfaisal998") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-faisal-habib-9827372.html";
        return;
    } else if (username === "kurnia" && password === "kurniacr820") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-kurnia-cahya-348975sd.html";
        return;
    } else if (username === "susanto" && password === "ssanto468") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-susanto-902349wj3ewrj.html";
        return;
    } else if (username === "wawan" && password === "wawans73") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-susanto-902349wj3ewrj.html";
        return;
    } else if (username === "rachmad" && password === "rachmad57") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-rachmadesorkortdr21g2dg1t3r12445456.html";
        return;
    } else if (username === "ari" && password === "ari735") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-ari-santoso-awere6r556t4er6t5erst45.html";
        return;
    } else if (username === "indra" && password === "indrabudikusuma") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-ari-santoso-awere6r556t4er6t5erst45.html";
        return;
    }
    
    //BUMA adaro
    else if (username === "daniel" && password === "daniel460") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/sdchnzulxlzjjkxcvxcv45xcv456xc4v1654xcv.html";
        return;
    } else if (username === "chrismono" && password === "chrism663") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-chrismono-asdijofjsdfojdgrt54g89d74.html";
        return;
    } else if (username === "elang" && password === "elang396") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-chrismono-asdijofjsdfojdgrt54g89d74.html";
        return;
    } else if (username === "ahmad" && password === "himawan497") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-chrismono-asdijofjsdfojdgrt54g89d74.html";
        return;
    } else if (username === "veri" && password === "veridwi985") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-chrismono-asdijofjsdfojdgrt54g89d74.html";
        return;
    } else if (username === "ruwanto" && password === "ruwanto566") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-chrismono-asdijofjsdfojdgrt54g89d74.html";
        return;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
