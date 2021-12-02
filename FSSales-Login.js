const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const site = loginForm.site.value;
    
    //FLUID SERVICE SPAREPART - Balikpapan
    if ((username === "ariyanto023" && site === "fssp-bpp") || 
       (username === "ali098" && site === "fssp-bpp") || 
       (username === "muhklis487" && site === "fssp-bpp") || 
       (username === "armuhadi992" && site === "fssp-bpp") || 
       (username === "haris668" && site === "fssp-bpp") || 
       (username === "dwik925" && site === "fssp-bpp") || 
       (username === "robbi213" && site === "fssp-bpp") || 
       (username === "fiorel256" && site === "fssp-bpp") || 
       (username === "rama73" && site === "fssp-bpp") || 
       (username === "fs-bpp" && site === "fssp-bpp") || 
        // SUPER USER
       (username === "marselkl17" && site === "fssp-bpp") || 
       (username === "Arsy12nisa" && site === "fssp-bpp") || 
       (username === "moedianto" && site === "fssp-bpp") || 
       (username === "renita1906" && site === "fssp-bpp") || 
       (username === "wahyu497" && site === "fssp-bpp") ||
       (username === "super-user" && site === "fssp-bpp") ||
       (username === "fikri236" && site === "fssp-bpp") || 
       (username === "teguhbs7" && site === "fssp-bpp")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-balikpapan.html";
        return;
        
       //FLUID SERVICE SERVICE - Balikpapan
    } else if ((username === "angga898" && site === "fssr-bpp") || 
       (username === "wahyu497" && site === "fssr-bpp") || 
       (username === "pram152" && site === "fssr-bpp") || 
       (username === "subi123" && site === "fssr-bpp") || 
       (username === "nuryanto73" && site === "fssr-bpp") || 
       (username === "nurhasan432" && site === "fssr-bpp") || 
       (username === "hendra231" && site === "fssr-bpp") || 
       (username === "jonwidyo211" && site === "fssr-bpp") || 
       (username === "isman989" && site === "fssr-bpp") || 
       (username === "aris438" && site === "fssr-bpp") || 
       (username === "dwisy573" && site === "fssr-bpp") || 
       (username === "faisal485" && site === "fssr-bpp") || 
       (username === "rahmat658" && site === "fssr-bpp") || 
       (username === "lukmanf375" && site === "fssr-bpp") || 
       (username === "fs-bpp" && site === "fssr-bpp") || 
        // SUPER USER
       (username === "marselkl17" && site === "fssr-bpp") || 
       (username === "Arsy12nisa" && site === "fssr-bpp") || 
       (username === "moedianto" && site === "fssr-bpp") || 
       (username === "renita1906" && site === "fssr-bpp") || 
       (username === "wahyu497" && site === "fssr-bpp") ||
       (username === "super-user" && site === "fssr-bpp") ||
       (username === "fikri236" && site === "fssr-bpp") || 
       (username === "teguhbs7" && site === "fssr-bpp")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-service-balikpapan.html";
        return;
        
    //FLUID SERVICE - Banjarmasin
    } else if ((username === "Galih999" && site === "fs-bjm") || 
                // SUPER USER
       (username === "marselkl17" && site === "fs-bjm") || 
       (username === "Arsy12nisa" && site === "fs-bjm") || 
       (username === "moedianto" && site === "fs-bjm") || 
       (username === "renita1906" && site === "fs-bjm") || 
       (username === "wahyu497" && site === "fs-bjm") ||
       (username === "super-user" && site === "fs-bjm") ||
       (username === "fikri236" && site === "fs-bjm") || 
       (username === "teguhbs7" && site === "fs-bjm")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-banjarmasin.html";
        return;
        
    //FLUID SERVICE - Jakarta
    } else if ((username === "bondan212" && site === "fs-jkt") || 
       (username === "munir2351" && site === "fs-jkt") || 
       (username === "maman31" && site === "fs-jkt") || 
       (username === "iwan02" && site === "fs-jkt") || 
       (username === "iman99" && site === "fs-jkt") || 
       (username === "Doni471" && site === "fs-jkt") || 
        // SUPER USER
       (username === "marselkl17" && site === "fs-jkt") || 
       (username === "Arsy12nisa" && site === "fs-jkt") || 
       (username === "moedianto" && site === "fs-jkt") || 
       (username === "renita1906" && site === "fs-jkt") || 
       (username === "wahyu497" && site === "fs-jkt") ||
       (username === "super-user" && site === "fs-jkt") ||
       (username === "fikri236" && site === "fs-jkt") || 
       (username === "teguhbs7" && site === "fs-jkt")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-jakarta.html";
        return;
        
    //FLUID SERVICE - Samarinda
    } else if (
        // SUPER USER
       (username === "marselkl17" && site === "fs-smd") || 
       (username === "Arsy12nisa" && site === "fs-smd") || 
       (username === "moedianto" && site === "fs-smd") || 
       (username === "renita1906" && site === "fs-smd") || 
       (username === "wahyu497" && site === "fs-smd") ||
       (username === "super-user" && site === "fs-smd") ||
       (username === "fikri236" && site === "fs-smd") || 
       (username === "teguhbs7" && site === "fs-smd")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-samarinda.html";
        return;
        
    //FLUID SERVICE - Sangatta
    } else if ((username === "fluid-sangatta" && site === "fs-sgt") || 
        // SUPER USER
       (username === "marselkl17" && site === "fs-sgt") || 
       (username === "Arsy12nisa" && site === "fs-sgt") || 
       (username === "moedianto" && site === "fs-sgt") || 
       (username === "renita1906" && site === "fs-sgt") || 
       (username === "wahyu497" && site === "fs-sgt") ||
       (username === "super-user" && site === "fs-sgt") ||
       (username === "fikri236" && site === "fs-sgt") || 
       (username === "teguhbs7" && site === "fs-sgt")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-sangatta.html";
        return;
        
    //FLUID SERVICE - Tanjung Redeb
    } else if ((username === "fluid-tjredeb" && site === "fs-tjr") || 
        // SUPER USER
       (username === "marselkl17" && site === "fs-tjr") || 
       (username === "Arsy12nisa" && site === "fs-tjr") || 
       (username === "moedianto" && site === "fs-tjr") || 
       (username === "renita1906" && site === "fs-tjr") || 
       (username === "wahyu497" && site === "fs-tjr") ||
       (username === "super-user" && site === "fs-tjr") ||
       (username === "fikri236" && site === "fs-tjr") || 
       (username === "teguhbs7" && site === "fs-tjr")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-fluid-service-jakarta.html";
        return;
        
    // ADARO - 35
    } else if (
       (username === "marselkl17" && site === "adaro35") || 
       (username === "Arsy12nisa" && site === "adaro35") || 
       (username === "moedianto" && site === "adaro35") || 
       (username === "renita1906" && site === "adaro35") || 
       (username === "wahyu497" && site === "adaro35") ||       
       (username === "super-user" && site === "adaro35") ||
       (username === "fikri236" && site === "adaro35") || 
       (username === "teguhbs7" && site === "adaro35")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-adaro-35.html";
        return;
    
    //ADARO - BUMA
    } else if ((username === "daniel460" && site === "buma-adaro") || 
       (username === "chrism663" && site === "buma-adaro") || 
       (username === "veridwi985" && site === "buma-adaro") || 
       (username === "himawan497" && site === "buma-adaro") || 
       (username === "afajar22" && site === "buma-adaro") || 
        // SUPER USER
       (username === "marselkl17" && site === "buma-adaro") || 
       (username === "Arsy12nisa" && site === "buma-adaro") || 
       (username === "moedianto" && site === "buma-adaro") || 
       (username === "renita1906" && site === "buma-adaro") || 
       (username === "wahyu497" && site === "buma-adaro") ||
       (username === "super-user" && site === "buma-adaro") ||
       (username === "fikri236" && site === "buma-adaro") || 
       (username === "teguhbs7" && site === "buma-adaro")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-adaro.html";
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
       (username === "fikri236" && site === "sis-adaro") || 
       (username === "teguhbs7" && site === "sis-adaro")) {
        window.location.href = "https://fs-sales.blogspot.com/p/my-fs-adaro-sis.html";
        return;
        
       //AJP - LOA KULU
    } else if ((username === "imron07" && site === "ajp-lku") || 
       (username === "heru66" && site === "ajp-lku") || 
        // SUPER USER
       (username === "marselkl17" && site === "ajp-lku") || 
       (username === "Arsy12nisa" && site === "ajp-lku") || 
       (username === "moedianto" && site === "ajp-lku") || 
       (username === "renita1906" && site === "ajp-lku") || 
       (username === "wahyu497" && site === "ajp-lku") ||
       (username === "super-user" && site === "ajp-lku") ||
       (username === "fikri236" && site === "ajp-lku") || 
       (username === "teguhbs7" && site === "ajp-lku")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-ajp-loa-kulu.html";
        return;
               
       // BERAU - BINUNGAN
    } else if ((username === "azhar456" && site === "berau-bng") || 
       (username === "faisal485" && site === "berau-bng") || 
       (username === "mjad046" && site === "berau-bng") || 
       (username === "krisna27" && site === "berau-bng") || 
                // SUPER USER
       (username === "marselkl17" && site === "berau-bng") || 
       (username === "Arsy12nisa" && site === "berau-bng") || 
       (username === "moedianto" && site === "berau-bng") || 
       (username === "renita1906" && site === "berau-bng") || 
       (username === "wahyu497" && site === "berau-bng") ||
       (username === "super-user" && site === "berau-bng") ||
       (username === "fikri236" && site === "berau-bng") || 
       (username === "teguhbs7" && site === "berau-bng")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-berau-binungan.html";
        return;
        
       // BUMA - IBP
    } else if ((username === "hendranjr" && site === "buma-ibp") || 
               // SUPER USER
       (username === "marselkl17" && site === "buma-ibp") || 
       (username === "Arsy12nisa" && site === "buma-ibp") || 
       (username === "moedianto" && site === "buma-ibp") || 
       (username === "renita1906" && site === "buma-ibp") || 
       (username === "wahyu497" && site === "buma-ibp") ||       
       (username === "super-user" && site === "buma-ibp") ||
       (username === "fikri236" && site === "buma-ibp") || 
       (username === "teguhbs7" && site === "buma-ibp")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-ibp.html";
        return;
        
       // BUMA - Kideco
    } else if ((username === "buma-kideco" && site === "buma-kideco") || 
               // SUPER USER
       (username === "marselkl17" && site === "buma-kideco") || 
       (username === "Arsy12nisa" && site === "buma-kideco") || 
       (username === "moedianto" && site === "buma-kideco") || 
       (username === "renita1906" && site === "buma-kideco") || 
       (username === "wahyu497" && site === "buma-kideco") ||       
       (username === "super-user" && site === "buma-kideco") ||
       (username === "fikri236" && site === "buma-kideco") || 
       (username === "teguhbs7" && site === "buma-kideco")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-kideco.html";
        return;
        
      // BUMA - LATI
    } else if ((username === "ssanto468" && site === "buma-lati") || 
       (username === "ari735" && site === "buma-lati") || 
       (username === "rachmad57" && site === "buma-lati") || 
       (username === "indrabudikusuma" && site === "buma-lati") || 
       (username === "frohman173" && site === "buma-lati") || 
       (username === "rovky496" && site === "buma-lati") || 
               // SUPER USER
       (username === "marselkl17" && site === "buma-lati") || 
       (username === "Arsy12nisa" && site === "buma-lati") || 
       (username === "moedianto" && site === "buma-lati") || 
       (username === "renita1906" && site === "buma-lati") || 
       (username === "wahyu497" && site === "buma-lati") ||       
       (username === "super-user" && site === "buma-lati") ||
       (username === "fikri236" && site === "buma-lati") || 
       (username === "teguhbs7" && site === "buma-lati")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-lati.html";
        return;
        
       // BUMA - SDJ
    } else if ((username === "ardhi53" && site === "buma-sdj") || 
       //(username === "afajar22" && site === "buma-sdj") || 
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
       (username === "fikri236" && site === "buma-sdj") || 
       (username === "teguhbs7" && site === "buma-sdj")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-sdj.html";
        return;
        
       // BUMA - Tabang
    } else if ((username === "aji698" && site === "buma-tbg") || 
       (username === "Rd888" && site === "buma-tbg") || 
       (username === "rizkyns646" && site === "buma-tbg") || 
       (username === "agungcn51" && site === "buma-tbg") || 
               // SUPER USER
       (username === "marselkl17" && site === "buma-tbg") || 
       (username === "Arsy12nisa" && site === "buma-tbg") || 
       (username === "moedianto" && site === "buma-tbg") || 
       (username === "renita1906" && site === "buma-tbg") || 
       (username === "wahyu497" && site === "buma-tbg") ||       
       (username === "super-user" && site === "buma-tbg") ||
       (username === "fikri236" && site === "buma-tbg") || 
       (username === "teguhbs7" && site === "buma-tbg")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-buma-tabang.html";
        return;
        
       // DarmaHenwa - Asam Asam
    } else if ((username === "supri98" && site === "dh-asm") || 
               // SUPER USER
       (username === "marselkl17" && site === "dh-asm") || 
       (username === "Arsy12nisa" && site === "dh-asm") || 
       (username === "moedianto" && site === "dh-asm") || 
       (username === "renita1906" && site === "dh-asm") || 
       (username === "wahyu497" && site === "dh-asm") ||       
       (username === "super-user" && site === "dh-asm") ||
       (username === "fikri236" && site === "dh-asm") || 
       (username === "teguhbs7" && site === "dh-asm")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-darmahenwa-asam-asam.html";
        return;
        
       // HPU - Damai
    } else if ((username === "Rifky121" && site === "hpu-damai") || 
       (username === "raditia98" && site === "hpu-damai") || 
       (username === "heru98" && site === "hpu-damai") || 
       (username === "arridlo66" && site === "hpu-damai") || 
               // SUPER USER
       (username === "marselkl17" && site === "hpu-damai") || 
       (username === "Arsy12nisa" && site === "hpu-damai") || 
       (username === "moedianto" && site === "hpu-damai") || 
       (username === "renita1906" && site === "hpu-damai") || 
       (username === "wahyu497" && site === "hpu-damai") ||       
       (username === "super-user" && site === "hpu-damai") ||
       (username === "fikri236" && site === "hpu-damai") || 
       (username === "teguhbs7" && site === "hpu-damai")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-hpu-damai.html";
        return;
        
       // HPU - MGM
    } else if ((username === "adis86" && site === "hpu-mgm") || 
       (username === "yudii02" && site === "hpu-mgm") || 
       (username === "ruwanto566" && site === "hpu-mgm") || 
       (username === "rivai23" && site === "hpu-mgm") || 
               // SUPER USER
       (username === "marselkl17" && site === "hpu-mgm") || 
       (username === "Arsy12nisa" && site === "hpu-mgm") || 
       (username === "moedianto" && site === "hpu-mgm") || 
       (username === "renita1906" && site === "hpu-mgm") || 
       (username === "wahyu497" && site === "hpu-mgm") ||       
       (username === "super-user" && site === "hpu-mgm") ||
       (username === "fikri236" && site === "hpu-mgm") || 
       (username === "teguhbs7" && site === "hpu-mgm")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-hpu-mgm.html";
        return;
        
       // HPU - Separi
     } else if ((username === "maiky43" && site === "hpu-spr") || 
       (username === "muhar39" && site === "hpu-spr") || 
               // SUPER USER
       (username === "marselkl17" && site === "hpu-spr") || 
       (username === "Arsy12nisa" && site === "hpu-spr") || 
       (username === "moedianto" && site === "hpu-spr") || 
       (username === "renita1906" && site === "hpu-spr") || 
       (username === "wahyu497" && site === "hpu-spr") ||       
       (username === "super-user" && site === "hpu-spr") ||
       (username === "fikri236" && site === "hpu-spr") || 
       (username === "teguhbs7" && site === "hpu-spr")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-hpu-separi.html";
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
       (username === "fikri236" && site === "mkp-sesayap") || 
       (username === "teguhbs7" && site === "mkp-sesayap")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-mkp-sesayap.html";
        return;
        
    // MKR Toka Tindung
    }  else if ((username === "yanuar51" && site === "mkr-toka") || 
       (username === "fauzi33" && site === "mkr-toka") || 
                // SUPER USER
       (username === "marselkl17" && site === "mkr-toka") || 
       (username === "Arsy12nisa" && site === "mkr-toka") || 
       (username === "moedianto" && site === "mkr-toka") || 
       (username === "renita1906" && site === "mkr-toka") || 
       (username === "wahyu497" && site === "mkr-toka") ||
       (username === "super-user" && site === "mkr-toka") ||
       (username === "fikri236" && site === "mkr-toka") || 
       (username === "teguhbs7" && site === "mkr-toka")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-mkr-toka-tindung.html";
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
       (username === "fikri236" && site === "mtl-binungan") || 
       (username === "teguhbs7" && site === "mtl-binungan")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-mtl-binungan.html";
        return;
        
    // PAMA adaro
    }  else if ((username === "pama-adaro-site" && site === "pama-adr") || 
                // SUPER USER
       (username === "marselkl17" && site === "pama-adr") || 
       (username === "Arsy12nisa" && site === "pama-adr") || 
       (username === "moedianto" && site === "pama-adr") || 
       (username === "renita1906" && site === "pama-adr") || 
       (username === "wahyu497" && site === "pama-adr") ||
       (username === "super-user" && site === "pama-adr") ||
       (username === "fikri236" && site === "pama-adr") || 
       (username === "teguhbs7" && site === "pama-adr")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-pama-adaro.html";
        return;
        
       // Petrosea Freeport
    }  else if ((username === "p-freeport" && site === "petrosea-frp") || 
                // SUPER USER
       (username === "marselkl17" && site === "petrosea-frp") || 
       (username === "Arsy12nisa" && site === "petrosea-frp") || 
       (username === "moedianto" && site === "petrosea-frp") || 
       (username === "renita1906" && site === "petrosea-frp") || 
       (username === "wahyu497" && site === "petrosea-frp") ||
       (username === "super-user" && site === "petrosea-frp") ||
       (username === "fikri236" && site === "petrosea-frp") || 
       (username === "teguhbs7" && site === "petrosea-frp")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-petrosea-freeport.html";
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
       (username === "fikri236" && site === "petrosea-kdc") || 
       (username === "teguhbs7" && site === "petrosea-kdc")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-petrosea-kideco.html";
        return;
        
    // Petrosea KSM
    } else if ((username === "petrosea-ksm" && site === "petrosea-ksm") || 
        // SUPER USER
       (username === "marselkl17" && site === "petrosea-ksm") || 
       (username === "Arsy12nisa" && site === "petrosea-ksm") || 
       (username === "moedianto" && site === "petrosea-ksm") || 
       (username === "renita1906" && site === "petrosea-ksm") || 
       (username === "wahyu497" && site === "petrosea-ksm") ||
       (username === "super-user" && site === "petrosea-ksm") ||
       (username === "fikri236" && site === "petrosea-ksm") || 
       (username === "teguhbs7" && site === "petrosea-ksm")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-petrosea-ksm.html";
        return;
        
       // Petrosea Roto
    }  else if ((username === "rahmat53" && site === "petrosea-roto") || 
       (username === "endi83" && site === "petrosea-roto") || 
                // SUPER USER
       (username === "marselkl17" && site === "petrosea-roto") || 
       (username === "Arsy12nisa" && site === "petrosea-roto") || 
       (username === "moedianto" && site === "petrosea-roto") || 
       (username === "renita1906" && site === "petrosea-roto") || 
       (username === "wahyu497" && site === "petrosea-roto") ||
       (username === "super-user" && site === "petrosea-roto") ||
       (username === "fikri236" && site === "petrosea-roto") || 
       (username === "teguhbs7" && site === "petrosea-roto")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-petrosea-roto.html";
        return;
        
       // Petrosea Tabang
    }  else if ((username === "fikry85" && site === "petrosea-tbg") || 
       (username === "ahrio96" && site === "petrosea-tbg") || 
       (username === "argha75" && site === "petrosea-tbg") || 
                // SUPER USER
       (username === "marselkl17" && site === "petrosea-tbg") || 
       (username === "Arsy12nisa" && site === "petrosea-tbg") || 
       (username === "moedianto" && site === "petrosea-tbg") || 
       (username === "renita1906" && site === "petrosea-tbg") || 
       (username === "wahyu497" && site === "petrosea-tbg") ||
       (username === "super-user" && site === "petrosea-tbg") ||
       (username === "fikri236" && site === "petrosea-tbg") || 
       (username === "teguhbs7" && site === "petrosea-tbg")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-petrosea-tabang.html";
        return;
        
    // PPA Satui
    }  else if ((username === "ppa15" && site === "ppa-satui") || 
       (username === "chrism663" && site === "ppa-satui") || 
       (username === "veridwi985" && site === "ppa-satui") || 
       (username === "marselkl17" && site === "ppa-satui") || 
       (username === "Arsy12nisa" && site === "ppa-satui") || 
       (username === "moedianto" && site === "ppa-satui") || 
       (username === "renita1906" && site === "ppa-satui") || 
       (username === "wahyu497" && site === "ppa-satui") ||
       (username === "super-user" && site === "ppa-satui") ||
       (username === "fikri236" && site === "ppa-satui") || 
       (username === "teguhbs7" && site === "ppa-satui")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-ppa-satui.html";
        return;
        
    // PPA SKS
    }  else if (
       (username === "marselkl17" && site === "ppa-sks") || 
       (username === "Arsy12nisa" && site === "ppa-sks") || 
       (username === "moedianto" && site === "ppa-sks") || 
       (username === "renita1906" && site === "ppa-sks") || 
       (username === "wahyu497" && site === "ppa-sks") ||
       (username === "super-user" && site === "ppa-sks") ||
       (username === "fikri236" && site === "ppa-sks") || 
       (username === "teguhbs7" && site === "ppa-sks")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-ppa-sks.html";
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
       (username === "fikri236" && site === "psg-berau") || 
       (username === "teguhbs7" && site === "psg-berau")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-psg-berau.html";
        return;
        
       // PSG Padaidi
    }  else if ((username === "hycmat14" && site === "psg-padaidi") || 
       (username === "jator532" && site === "psg-padaidi") || 
       (username === "zazin221" && site === "psg-padaidi") || 
       (username === "rusmadi566" && site === "psg-padaidi") || 
                // SUPER USER
       (username === "marselkl17" && site === "psg-padaidi") || 
       (username === "Arsy12nisa" && site === "psg-padaidi") || 
       (username === "moedianto" && site === "psg-padaidi") || 
       (username === "renita1906" && site === "psg-padaidi") || 
       (username === "wahyu497" && site === "psg-padaidi") ||
       (username === "super-user" && site === "psg-padaidi") ||
       (username === "fikri236" && site === "psg-padaidi") || 
       (username === "teguhbs7" && site === "psg-padaidi")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-psg-padaidi.html";
        return;
        
       // SMA Manado
    }  else if ((username === "yanuar51" && site === "sma-mdo") || 
       (username === "fauzi33" && site === "sma-mdo") || 
                // SUPER USER
       (username === "marselkl17" && site === "sma-mdo") || 
       (username === "Arsy12nisa" && site === "sma-mdo") || 
       (username === "moedianto" && site === "sma-mdo") || 
       (username === "renita1906" && site === "sma-mdo") || 
       (username === "wahyu497" && site === "sma-mdo") ||
       (username === "super-user" && site === "sma-mdo") ||
       (username === "fikri236" && site === "sma-mdo") || 
       (username === "teguhbs7" && site === "sma-mdo")) {
        window.location.href = "https://fs-sales.blogspot.com/p/sales-sma-manado.html";
        return;
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
