let btn = document.getElementById("toggle-theme-btn");
btn.addEventListener("click", e => {
    document.body.classList.toggle("dark");
    document.getElementById("toggle-theme-image").classList.toggle("moon");
    document.getElementById("toggle-theme-image").classList.toggle("sun");
},false)