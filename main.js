let horizontalUnderline = document. getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:a")
console .log (horizontalMenus;)

horizontalMenus.forEach(menu=>menu.addEventListener("click",(e)=>horizontalIndecator(e))

function horizontalIndecator(e) {
    horizontalUnderline. style.left = e. currentTarget.offsetLeft+ "px";
    horizontalUnderline. style.width = e. currentTarget.offsetWidth + "px";
    horizontalUnderline. style.top = 
     e.currentTarget. offsetTop + e.currentTarget.offsetHeight + "px";
}