import './scss/style.scss';

var init = () => {
    let el  = document.getElementById("main-page");
    if (el){
        let anchor = document.createElement("a");
        anchor.href = "page1.html";
        anchor.innerHTML = "next page &raquo;";
        el.append(anchor);
    }     
}
document.addEventListener("DOMContentLoaded", init);
