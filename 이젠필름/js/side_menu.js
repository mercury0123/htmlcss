const menu_btn = document.getElementById("menu_btn");
menu_btn.onclick = function(){
    const side_menu = document.getElementById("side_menu");
    side_menu.classList.toggle("active");
};

const to_top_btn = document.getElementById("to_top_btn");
to_top_btn.onclick = () => window.scroll({top: 0, behavior: "smooth"});
