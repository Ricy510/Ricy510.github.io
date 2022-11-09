function toggleTheme(){
    let page = document.querySelector("body");
    page.classList.toggle("dark-mode");

}

let button = document.getElementById("toggleButton");
button.onclick=toggleTheme;
