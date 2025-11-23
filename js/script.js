const skils = document.querySelector("dl.skill-list");

skils.data = [
    {name:"c++", level:50, image:"c++.svg"},
    {name:"c", level:30,image:"c.svg"},
    {name:"html", level:20, image:"html.svg"},
    {name:"css", level:20, image:"css.svg"}
];

skils.sortMode = null;

skils.generateList = function(elem) {
    elem.innerHTML = "";
    elem.data.forEach((item) => {
        const dt = document.createElement("dt");
        dt.style.backgroundImage = "url(img/"+item.image+")";
        dt.className = "skill-item";
        dt.textContent = item.name;
        elem.append(dt);

        const div = document.createElement("div");
        div.style.width = item.level + "%";
        div.textContent = item.level + "%";

        const dd = document.createElement("dd");
        dd.className = "skill-level";
        dd.append(div);
        elem.append(dd);
    })
}

skils.generateList(skils);

//---------------------------------------

function getComparer(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        }
        
        if (a[prop] > b[prop]) {
            return 1;
        }

        return 0;
    }
};

//---------------------------------------

skils.sortList = function (object_sort) {
    if(this.sortMode === object_sort) {
        this.data.reverse();
    }
    else {
        this.data.sort(getComparer(object_sort));
        this.sortMode = object_sort;
    }
};

const skills_sort = document.querySelector("div.skills-sort");

skills_sort.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const _type = e.target.dataset.type;
        switch (_type) {
            case 'name':
                skils.sortList(_type);
                skils.generateList(skils);
            break;

            case 'level':
                skils.sortList(_type);
                skils.generateList(skils);
            break;

            default:
                console.log('not find button');
            break;
        }
    }
});


