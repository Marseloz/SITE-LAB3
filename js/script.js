let skillList = document.querySelector("dl.skill-list");
console.log(skillList);
skillList.data = [
    {name:"c++", num:50, image:"c++.svg"},
    {name:"c", num:30,image:"c.svg"},
    {name:"html", num:20, image:"html.svg"},
    {name:"css", num:20, image:"css.svg"}
];

skillList.generateList = function(elem) {
    elem.data.forEach((item) => {
        let dt = document.createElement("dt");
        dt.style.backgroundImage = "url(img/"+item.image+")";
        dt.className = "skill-item"
        dt.textContent = item.name;
        elem.append(dt);
        let div = document.createElement("div");
        div.style.width = item.num + "%";
        div.textContent = item.num + "%";
        let dd = document.createElement("dd");
        dd.className = "skill-level"
        dd.append(div)
        elem.append(dd);
    })
}

skillList.generateList(skillList);
