const menu = {
    menu: document.querySelector("nav.main-nav"),
    button: document.querySelector("button.nav-btn"),
    open(){
        this.menu.classList.remove('main-nav_closed');
        this.button.classList.remove('nav-btn_open');
        this.button.classList.add('nav-btn_close');
        this.button.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    },
    close(){
        this.menu.classList.add('main-nav_closed');
        this.button.classList.remove('nav-btn_close');
        this.button.classList.add('nav-btn_open');
        this.button.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    }
}

menu.close();

menu.button.addEventListener('click', (e) => {
    if(e.target.classList.contains('nav-btn_open')){
        menu.open();
    } 
    else {
        menu.close();
    }
});