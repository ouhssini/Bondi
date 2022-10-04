let menus = document.getElementById("top-menu");

function show_menu() {
    if(menus.style.display=="block") {
        
        menus.style.display="none";
    }
    else {

        menus.style.display="block";
    }
    
}

function toggle_menu () {
    menus.classList.toggle('active');
}