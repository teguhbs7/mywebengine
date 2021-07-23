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
       (username === "wahyu497" && site === "buma-adaro") ||
       (username === "super-user" && site === "buma-adaro") ||
       (username === "teguhbs7" && site === "buma-adaro")) {
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
       (username === "wahyu497" && site === "sis-adaro") ||       
       (username === "super-user" && site === "sis-adaro") ||
       (username === "teguhbs7" && site === "sis-adaro")) {
        window.location.href = "https://fs-sales.blogspot.com/p/my-fs-adaro-sis.html";
        return;
        
       // BUMA - SDJ
    } else if ((username === "ardhi53" && site === "buma-sdj") || 
       (username === "afajar22" && site === "buma-sdj") || 
       (username === "nrro464" && site === "buma-sdj") || 
       (username === "halsum513" && site === "buma-sdj") || 
       (username === "dwisy573" && site === "buma-sdj") || 
       (username === "miftah37" && site === "buma-sdj") || 
               // SUPER USER
       (username === "marselkl17" && site === "buma-sdj") || 
       (username === "Arsy12nisa" && site === "buma-sdj") || 
       (username === "moedianto" && site === "buma-sdj") || 
       (username === "renita1906" && site === "buma-sdj") || 
       (username === "wahyu497" && site === "buma-sdj") ||       
       (username === "super-user" && site === "buma-sdj") ||
       (username === "teguhbs7" && site === "buma-sdj")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-sdj.html";
        return;
      
        
    // MKP Sesayap
    }  else if ((username === "arahmat569" && site === "mkp-sesayap") || 
       (username === "valdy07" && site === "mkp-sesayap") || 
       (username === "serbis337" && site === "mkp-sesayap") || 
       (username === "santo359" && site === "mkp-sesayap") || 
       (username === "dena175" && site === "mkp-sesayap") || 
       (username === "akhul229" && site === "mkp-sesayap") || 
       (username === "agus855" && site === "mkp-sesayap") || 
       (username === "hfaisal998" && site === "mkp-sesayap") ||                
       (username === "marselkl17" && site === "mkp-sesayap") || 
       (username === "Arsy12nisa" && site === "mkp-sesayap") || 
       (username === "moedianto" && site === "mkp-sesayap") || 
       (username === "renita1906" && site === "mkp-sesayap") || 
       (username === "wahyu497" && site === "mkp-sesayap") ||
       (username === "super-user" && site === "mkp-sesayap") ||
       (username === "teguhbs7" && site === "mkp-sesayap")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-mkp-sesayap.html";
        return;
    
    // MTL Binungan
    }  else if ((username === "daniel460" && site === "mtl-binungan") || 
       (username === "chrism663" && site === "mtl-binungan") || 
       (username === "veridwi985" && site === "mtl-binungan") || 
       (username === "marselkl17" && site === "mtl-binungan") || 
       (username === "Arsy12nisa" && site === "mtl-binungan") || 
       (username === "moedianto" && site === "mtl-binungan") || 
       (username === "renita1906" && site === "mtl-binungan") || 
       (username === "wahyu497" && site === "mtl-binungan") ||
       (username === "super-user" && site === "mtl-binungan") ||
       (username === "teguhbs7" && site === "mtl-binungan")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-mtl-binungan.html";
        return;
    
    // Petrosea Kideco
    }  else if ((username === "afif35" && site === "petrosea-kdc") || 
       (username === "riandc40" && site === "petrosea-kdc") || 
       (username === "ekacahya51" && site === "petrosea-kdc") || 
       (username === "marselkl17" && site === "petrosea-kdc") || 
       (username === "Arsy12nisa" && site === "petrosea-kdc") || 
       (username === "moedianto" && site === "petrosea-kdc") || 
       (username === "renita1906" && site === "petrosea-kdc") || 
       (username === "wahyu497" && site === "petrosea-kdc") ||
       (username === "super-user" && site === "petrosea-kdc") ||
       (username === "teguhbs7" && site === "petrosea-kdc")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-petrosea-kideco.html";
        return;
        
    // PPA Satui
    }  else if ((username === "daniel460" && site === "ppa-satui") || 
       (username === "chrism663" && site === "ppa-satui") || 
       (username === "veridwi985" && site === "ppa-satui") || 
       (username === "marselkl17" && site === "ppa-satui") || 
       (username === "Arsy12nisa" && site === "ppa-satui") || 
       (username === "moedianto" && site === "ppa-satui") || 
       (username === "renita1906" && site === "ppa-satui") || 
       (username === "wahyu497" && site === "ppa-satui") ||
       (username === "super-user" && site === "ppa-satui") ||
       (username === "teguhbs7" && site === "ppa-satui")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-ppa-satui.html";
        return;
        
        // PSG Berau
    }  else if ((username === "ramadhan551" && site === "psg-berau") || 
       (username === "yanuar51" && site === "psg-berau") || 
       (username === "marselkl17" && site === "psg-berau") || 
       (username === "Arsy12nisa" && site === "psg-berau") || 
       (username === "moedianto" && site === "psg-berau") || 
       (username === "renita1906" && site === "psg-berau") || 
       (username === "wahyu497" && site === "psg-berau") ||
       (username === "super-user" && site === "psg-berau") ||
       (username === "teguhbs7" && site === "psg-berau")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-psg-berau.html";
        return;
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
