
/*

function menuIteams(n, k, i,a, p, pth){

    this.namn = n;
    this.cal = k;
    this.ingredienser = i;
    this.allergier = a;
    this.price = p;
    this.image =  pth;
    this.iteam = function(){
        return  this.namn + ' '  + this.cal ;
    };

}

function show_image(src, width, height, alt){
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}


let burger1 = new  menuIteams('Halloumi', '645 kcal',  'Halloumi, briochebröd och majonnäs',
    'gluten', '60kr', '/img/burger1.jpg');
let burger2 = new menuIteams('Halloumi2.0', '700 kcal',  'Umamidressing, halloumi, briochebröd',
    'gluten, laktos', '70kr', '/img/burger2.jpg');
let burger3 = new menuIteams('Halloumi3.0', '800 kcal',  'halloumi, lökringar, majonnäs',
    'gluten, laktos', '80kr', '/img/burger3.jpg');
let burger4 = new menuIteams('Vegburgare', '670 kcal',  'vegoburgare, majonnäs, sötpotatisbröd',
    'gluten, laktos', '85kr', '/img/burger4.jpg');
let burger5 = new menuIteams('Veganburgare', '720 kcal',  'veganburgare, vegan-majonnäs, sötpotatisbröd', 'gluten', '80kr', '/img/burger5.jpg');



let myButton = document.getElementById('button1');

myButton.addEventListener("click", myFunction);



function myFunction() {
    console.log ("Button clicked!");
    var namnid = document.getElementById("namn").value;
    console.log(namnid);
    var mailid = document.getElementById("mail").value;
    console.log(mailid);
    var streetid = document.getElementById("street").value;
    console.log(streetid);
    var hnumberid = document.getElementById("hnumber").value;
    console.log(hnumberid);
    var betalingsmetodid = document.getElementById("betalingsmetod").value;
    console.log(betalingsmetodid);
    var checkBox = document.getElementById("man");
    if(document.getElementById("man").checked){
        console.log("Man");
    }
    if(document.getElementById("kvinna").checked){
        console.log("Kvinna");
    }
    if(document.getElementById("annat").checked){
        console.log("Annat");
    }
    if(document.getElementById("anonymt").checked){
        console.log("Anonymt");
    }

}



var menu =  [ burger1, burger2, burger3, burger4, burger5];


let myElement = document.getElementById("burgare");
let i = 0;
for (i in menu)
{
    let burgerdiv = document.createElement("div" )
    let listnamn = document.createElement("h3");
    let listkcal = document.createElement("li");
    let listingredienser = document.createElement("li");
    let listallergier = document.createElement("li")
    let listpris = document.createElement("li");
    let listimage = document.createElement("p");
    let namn = document.createTextNode(menu[i].namn);
    let kcal = document.createTextNode(menu[i].cal);
    let ingredienser = document.createTextNode(menu[i].ingredienser)
    let allergier = document.createTextNode(menu[i].allergier)
    let pris = document.createTextNode(menu[i].price)
    listnamn.appendChild(namn);
    listimage.appendChild(show_image(menu[i].image, 200, 150, menu[i].namn))
    listkcal.appendChild(kcal);
    listingredienser.appendChild(ingredienser);
    listallergier.appendChild(allergier);
    listpris.appendChild(pris);
    burgerdiv.appendChild(listnamn);
    burgerdiv.appendChild(listimage);
    burgerdiv.appendChild(listkcal);
    burgerdiv.appendChild(listingredienser);
    burgerdiv.appendChild(listallergier);
    burgerdiv.appendChild(listpris);
    myElement.appendChild(burgerdiv);

}



*/
