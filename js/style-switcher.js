// =============================Toggle Style Swicher===============================
const styleSwicherToggle = document.querySelector(".style-switcher-toggler");
styleSwicherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide sytle switcer on scroll
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// =============================Theme colour===============================
const alternateStyles = document.querySelectorAll(".alternate-style")
function setActiveStyle(colour){
    alternateStyles.forEach((style) => {
        if(colour === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}
// =============================Theme light and night mode ===============================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})