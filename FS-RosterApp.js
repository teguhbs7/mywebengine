const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const section = loginForm.section.value;
    
    
    // AJP
    if (username === "ajp01" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ajp.html?m=1";
        return;
    }
    
    // BUMA Lati
    else if (username === "bumalati02" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-lati.html";
        return;
    }
    
    else if (username === "bumalati02" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-lati-sparepart.html";
        return;
    }
    
    // HPU Damai
    else if (username === "hpu22" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-hpu-damai-sparepart.html";
        return;
    }
    
    // HPU Muara Teweh
    else if (username === "hpu21" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-hpu-muara-teweh-sparepart.html";
        return;
    }
    
    // HPU Separi
    else if (username === "hpu23" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-hpu-separi-sparepart.html";
        return;
    }
    
    // DarmaHenwa
    else if (username === "dh08" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-darmahenwa-asam-asam-sparepart.html";
        return;
    }
    
    // PSG Sambarata
    else if (username === "psg16" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-psg-sambarata.html";
        return;
    }
    
    else if (username === "psg16" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-psg-sambarata-sparepart.html";
        return;
    }
    
    // PSG Padaidi
    else if (username === "psg-pd" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-psg-padaidi.html";
        return;
    }
    
    else if (username === "psg-pd" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-psg-padaidi-sparepart.html";
        return;
    }
    
    // MKP Sesayap
    else if (username === "mkp09" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-mkp-sesayap.html";
        return;
    }
    
    else if (username === "mkp09" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-mkp-sesayap-sparepart.html";
        return;
    }
    
    // RML Sesayap
    else if (username === "rml18" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/abcd.html";
        return;
    }
    
    // BUMA SDJ
    else if (username === "bumasdj04"  && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-sungai-danau.html";
        return;
    }
    
    else if (username === "bumasdj04"  && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-sungai-danau-sparepart.html";
        return;
    }
    
    // Petrosea Kideco
    else if (username === "petrosea13"  && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-petrosea-kideco-sparepart.html";
        return;
    }
    
    // Petrosea Tabang
    else if (username === "petrosea14"  && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-petrosea-tabang-sparepart.html";
        return;
    }
    
    // Roto Kideco
    else if (username === "roto-kdc"  && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-roto-kideco-sparepart.html";
        return;
    }
    
    // BUMA Binungan
    else if (username === "bumabng06" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-binungan.html";
        return;
    }
    
    else if (username === "bumabng06" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-binungan-sparepart.html";
        return;
    }
    
    // BUMA Tabang
    else if (username === "bumatbg25" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-tabang-sparepart.html";
        return;
    }
    
    else if (username === "bumatbg25" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-tabang.html";
        return;
    }
    
    // BUMA Adaro
    else if (username === "bumaadaro03" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-adaro-sparepart.html";
        return;
    }
    
    else if (username === "bumaadaro03" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-adaro.html";
        return;
    }
    
    // BUMA IBP
    else if (username === "bumaibp05" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-buma-ibp.html";
        return;
    }
    
    // SIS adaro    
    else if (username === "sisadr19" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-sis-adaro.html";
        return;
    }
    
    // SIS Kelanis
    else if (username === "sis-kl" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-sis-kelanis.html";
        return;
    }
    
    // KBL Tabang
    else if (username === "kbltbg30" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-kbl-tabang.html";
        return;
    }
    
    // CK MHU
    else if (username === "ck-mhu" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ck-mhu.html";
        return;
    }
    
    // CK BMB
    else if (username === "ck-bmb2" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ck-bmb.html";
        return;
    }
    
    // CK DMP
    else if (username === "ck071" && section === "service") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-ck-dmp.html";
        return;
    }
    
    // SMA Manado
    else if (username === "sma20" && section === "sparepart") {
        window.location.href = "https://fluidserviceroster.blogspot.com/p/roster-sma-manado-sparepart.html";
        return;
    }
    
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
