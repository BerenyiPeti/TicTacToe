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
];

var index = 0;
var mezoIndex = 1;
var kor = 1;

function tabla(){
    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt += 
        `
            <div class="mezo" id="mezo${index}">
                <img src="" alt="" id="${index}">
            </div>
        `
    }
    
    ID("fotarolo").innerHTML = txt;

    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click", valasztottMezo);
    }

    kor = 1;
    index = 0;
    ID("gomb").addEventListener("click", tabla);

    //console.log(valasztottMezo);

}




function valasztottMezo() {
    //console.log("mező")
    mezoIndex = event.target.id;
    //console.log(mezoIndex);

    megjelenit();
    nyertes();
}


function nyertes() {
    if (kor === 10) {
        console.log("játék vége")
    }
}



function megjelenit(){
    var foglaltE = ID(`${mezoIndex}`).alt
    if (foglaltE === "") {
        ID(`${mezoIndex}`).src= ikonok[index].eleres
        ID(`${mezoIndex}`).alt= ikonok[index].ikon
        ID(`${mezoIndex}`).class= ikonok[index].ikon
        index++;
        gyoztes();
        if (index > 1) {
            index = 0;
        } 
        kor++;

    }
   
}

function xVagyO(mezo) {
    if (ID(`${mezo}`).alt == "") {
        var milyenMezo = ",";
    } else {
        var milyenMezo = ID(`${mezo}`).alt;
    }

    return milyenMezo;

}

function gyoztes() {
    var osszesMezo = "";
    var sor1 = "";
    var sor2 = "";
    var sor3 = "";
    var oszl1 = "";
    var oszl2 = "";
    var oszl3 = "";
    var atl1 = "";
    var atl2 = "";
    for (let index = 0; index < 9; index++) {
        var milyenMezo = "";
        if (ID(`${index}`).alt == "") {
            milyenMezo = ",";
        } else {
            milyenMezo = ID(`${index}`).alt;
        }

        if (index < 3) {
            sor1 += milyenMezo;

        } else if (index < 6) {
            sor2 += milyenMezo;
        } else {
            sor3 += milyenMezo;
        }
        
    }

    /*for (let index = -2; index < 9; index+3) {
        oszl1 += ID(`${index+3}`).alt;
        
    }*/
    var o1 = 0;
    var o2 = 1;
    var o3 = 2;
    var i = 0;
    while (o1 < 9) {
        /*var milyenMezo = "";
        if (ID(`${o1}`).alt == "") {
            milyenMezo = ",";
        } else {
            milyenMezo = ID(`${o1}`).alt;
        }*/

        oszl1 += xVagyO(o1);
        oszl2 += xVagyO(o2);
        oszl3 += xVagyO(o3);
        
        o1 += 3;
        o2 += 3;
        o3 += 3;
        i++;
    }

    console.log("sor1:"+sor1)
    console.log("sor2:"+sor2)
    console.log("sor3:"+sor3)
    console.log("oszlop1:"+oszl1)
    console.log("oszlop2:"+oszl2)
    console.log("oszlop3:"+oszl3)

    osszesMezo += sor1 + sor2 + sor3 + oszl1 + oszl2 + oszl3;
    console.log("osszesMezo: "+osszesMezo);
    /*var i = 0;
    while (i < osszesMezo.length && !("xxx" in osszesMezo)) {

    }*/

    var vaneNyertesX = osszesMezo.search("xxx");
    var vaneNyertesO = osszesMezo.search("ooo");

    //console.log(vaneNyertesX);
    //console.log(vaneNyertesO);

    if (vaneNyertesX > -1) {
        console.log("X nyert!")
    } else if (vaneNyertesO > -1) {
        console.log("O nyert!")
    }

}



