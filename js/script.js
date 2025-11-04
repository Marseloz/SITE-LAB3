skillList = document.querySelector("dl.skill-list");
skillList.data = [
   {name:"c++", num:50, css:"skill-item_cpp", image:"c++.svg"},
    {name:"c", num:30, css:"skill-item_c", image:"c.svg"},
    {name:"html", num:20, css:"skill-item_html", image:"html.svg"},
    {name:"css", num:20, css:"skill-item_css", image:"css.svg"}
];

skillList.generateList = function(elem) {
    let buff = ""
    elem.data.forEach((item) => {
        buff += "<dt class=\"skill-item\" style=\"background-image: url(../img/"+item.image+")\">"+item.name+"</dt>"
        buff += "<dd class=\"skill-level\">"
        buff += "<div style=\"width: "+item.num+"%;\">"+item.num+"%</div></dd>"
    })
    elem.innerHTML = buff
}

console.log(skillList)

skillList.generateList(skillList)
