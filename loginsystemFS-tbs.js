const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "imron" && password === "imron07") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/imron-ahmad-s_15.html";
        return;
    } else if (username === "faisal" && password === "hfaisal998") {
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
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
