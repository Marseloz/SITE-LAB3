const menu = document.querySelector("nav.main-nav");
const nav_button = document.querySelector("button.nav-btn");

menu.open = function(){
    this.classList.remove('main-nav_closed');
    nav_button.classList.remove('nav-btn_open');
    nav_button.classList.add('nav-btn_close');
    nav_button.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
}

menu.close = function(){
    this.classList.add('main-nav_closed');
    nav_button.classList.remove('nav-btn_close');
    nav_button.classList.add('nav-btn_open');
    nav_button.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
}

menu.close();

nav_button.addEventListener('click', (e) => {
    console.log("njukm");
    if(e.target.classList.contains('nav-btn_open')){
        menu.open();
    } 
    else {
        menu.close();
    }
});