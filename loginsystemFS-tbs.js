const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "imron" && password === "imron07") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/imron-ahmad-s_15.html?m=1";
        return;
    } else if (username === "faisal" && password === "hfaisal998") {
        window.location.href = "https://www.google.com/";
        return;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
