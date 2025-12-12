const checkbox = document.querySelector("input.switch-checkbox"), 
body = document.querySelector("body");
if(localStorage.getItem('status_checkbox') === null){
    localStorage.setItem('status_checkbox', true);
}

function update(status){
    switch (status) {
        case true:
            body.classList.remove('dark-theme');
            localStorage.setItem("status_checkbox", status);
            break;
        case false:
            body.classList.add('dark-theme');
            localStorage.setItem("status_checkbox", status);
            break;
    }
}

checkbox.checked = localStorage.getItem('status_checkbox') === 'true';
update(checkbox.checked);

checkbox.addEventListener('change', () => {
    update(checkbox.checked);
})
