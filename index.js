const popupBoxEl = document.getElementById("popupBox");
const closeIconEl = document.querySelector(".closeIcon");

document.onmouseleave = function () {
    popupBoxEl.style.display = "block";
}

closeIconEl.addEventListener("click", ()=> {
    popupBoxEl.style.display = "none";
})