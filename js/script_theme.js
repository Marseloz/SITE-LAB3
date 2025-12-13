const checkbox = document.querySelector("input.switch-checkbox"), 
body_obj = document.querySelector("body");
if(localStorage.getItem('status_checkbox') === null){
    localStorage.setItem('status_checkbox', 'light');
}

function changeTheme(status){
    switch (status) {
        case true:
            body_obj.classList.remove('dark-theme');
            localStorage.setItem('status_checkbox', 'light');
            break;
        case false:
            body_obj.classList.add('dark-theme');
            localStorage.setItem('status_checkbox', 'dark');
            break;
    }
}

checkbox.checked = localStorage.getItem('status_checkbox') === 'light';
changeTheme(checkbox.checked);

checkbox.addEventListener('change', () => {
    changeTheme(checkbox.checked);
})
