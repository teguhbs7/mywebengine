const navTogglerBtn=document.querySelector(".hamburger-icon"),
          aside=document.querySelector(".main-hamburger");

    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
        // asideSectionTogglerBtn();

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }


// Catalog filter

<div class='title-text'>
// Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
    filterBtns=filterContainer.children,
    totalFilterBtn=filterBtns.length,
    portfolioItems=document.querySelectorAll(".catalog-content"),
    totalPortfolioItem=portfolioItems.length;

    for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue=this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide")
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show")
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide")
                    portfolioItems[k].classList.add("show");
                }
            }
        })
    }
