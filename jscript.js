window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function init(){
    tabla();
}

var ikonok = [{
    ikon: "x",
    eleres: "ikonok/x.png",
},
{
    ikon: "o",
    eleres: "ikonok/o.png"
}
]

var index = 1;
var mezoIndex = 1;

function tabla(){
    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt += 
        `
            <div class="mezo" id="${index}">
                <img src="">
            </div>
        `
    }

    //console.log(txt);
    
    ID("fotarolo").innerHTML = txt;
    //CLASS("mezo")[index].innerHTML = ikonok.eleres;

    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", valasztottMezo)
        /*CLASS("mezo").addEventListener("click", valasztottMezo);
        CLASS("mezo")[index].innerHTML = megjelenit();*/
    }
    
    console.log(valasztottMezo);

}

function valasztottMezo() {
    console.log(event.target.id)
    mezoIndex = event.target.id;
    megjelenit();
}

function megjelenit(){
    ID("mezo").src= ikonok[index].eleres
    ID("mezo").alt= ikonok[index].ikon
}
