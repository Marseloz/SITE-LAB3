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
    }

    const skills = {
    data: [],
    elem: null,
    sortMode: null,

    getData(path){
        fetch(path)
            .then(value => value.json())
            .then((result) => {
                this.data = result;
                this.generateList();
            })
            .catch(() => {
                console.error('что-то пошло не так')
                this.elem.parentElement.style.display = "none";
            });
    },

    init(selector, path) { 
        this.elem = document.querySelector(selector); 
        this.getData(path);
    },

    generateList() {
        this.elem.innerHTML = "";
        this.data.forEach((item) => {
            const dt = document.createElement("dt");
            dt.style.backgroundImage = `url(img/${item.icone})`;
            dt.className = "skill-item";
            dt.textContent = item.name;
            this.elem.append(dt);

            const div = document.createElement("div");
            div.style.width = item.level + "%";
            div.textContent = item.level + "%";

            const dd = document.createElement("dd");
            dd.className = "skill-level";
            dd.append(div);
            this.elem.append(dd);
        })
    },

    sortList(object_sort) {
        if(this.sortMode === object_sort) {
            this.data.reverse();
        }
        else {
            this.data.sort(getComparer(object_sort));
            this.sortMode = object_sort;
        }
    }
}

skills.init("dl.skill-list", "db/skills.json");

const skills_sort = document.querySelector("div.skills-sort");

skills_sort.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const type = e.target.dataset.type;
        switch (type) {
            case 'name':
                skills.sortList(type);
                skills.generateList(skills);
            break;

            case 'level':
                skills.sortList(type);
                skills.generateList(skills);
            break;

            default:
                console.log('not find button');
            break;
        }
    }
});


