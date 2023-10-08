
let cross = document.querySelector(".cross");
cross.style.display = "none"
let menubar = document.querySelector(".manubar");
menubar.addEventListener("click", () =>{
    document.querySelector(".profile").classList.toggle("toggle");
    if(document.querySelector(".profile").classList.contains("toggle")){
        setTimeout(() => {
            document.querySelector(".bar").style.display = "inline";
            
        }, 100);
        document.querySelector(".cross").style.display = "none";
    }
    else{
        document.querySelector(".bar").style.display = "none";
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline";
            
        }, 100);
    }
})



