const navTogglerBtn=document.querySelector(".hamburger-icon"),
          aside=document.querySelector(".main-container");

    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
        // asideSectionTogglerBtn();

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }
