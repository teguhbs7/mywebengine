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
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-elang-bangkit-ardianto.html";
        return;
    } else if (username === "ahmad" && password === "himawan497") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-ahmad-himawan-56sdf45df4d6t4rd564gd.html";
        return;
    } else if (username === "veri" && password === "veridwi985") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-veri-dwi-kurniawan.html";
        return;
    } else if (username === "ruwanto" && password === "ruwanto566") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-ruwanto-sd5a6d4as6d54asd3sad654asd6.html";
        return;
    }
    
    //BUMA SDJ
     else if (username === "halsum" && password === "halsum513") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-halsum-se4ers54r54serse54rse57rse2r.html";
        return;
    } else if (username === "eko" && password === "Eko171294") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-eko-suhartono-df546df56s4fs86er5e21.html";
        return;
    } else if (username === "nur" && password === "nrro464") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/farnur-rochim-dfsdf4sdf564sd563f21sd6f5.html";
        return;
    } else if (username === "miftah" && password === "miftah37") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-miftah-arif-hanafi.html";
        return;
    } else if (username === "fajar" && password === "afajar22") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-fajar-ahmadi-df65dsfs6df41sd56f321f.html";
        return;
    } else if (username === "sugeng" && password === "sugeng37") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-sugeng-basuki-ida-nugroho.html";
        return;
    }
    
    //BUMA IBP
    else if (username === "yulius" && password === "yulius03") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-yulius-tanggo-56df13v2drg56g1rd3t4d.html";
        return;
    }
    
    //BUMA Binungan
    else if (username === "azhar" && password === "azhar456") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-azhar-hussamuddin.html";
        return;
    }else if (username === "faisal" && password === "faisal485") {
        window.location.href = "https://far-fluidservice.blogspot.com/p/far-faisal-ambyah-x8c456d6x5f4xdf94xd6f.html";
        return;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
