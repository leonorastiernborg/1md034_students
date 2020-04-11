




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


let burger1 = new  menuIteams('Halloumiburgare', '645 kcal',  'Halloumi, briochebröd och majonnäs',
    'gluten', '60kr', '/img/burger1.jpg');
let burger2 = new menuIteams('Halloumiburgaren2.0', '700 kcal',  'Umamidressing, halloumi, briochebröd',
    'gluten, laktos', '70kr', '/img/burger2.jpg');
let burger3 = new menuIteams('Halloumiburgaren3.0', '800 kcal',  'halloumi, lökringar, majonnäs',
    'gluten, laktos', '80kr', '/img/burger3.jpg');
let burger4 = new menuIteams('Vegburgare', '670 kcal',  'vegoburgare, majonnäs, sötpotatisbröd',
    'gluten, laktos', '85kr', '/img/burger4.jpg');
let burger5 = new menuIteams('Veganburgare', '720 kcal',  'veganburgare, vegan-majonnäs, sötpotatisbröd', 'gluten', '80kr', '/img/burger5.jpg');


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
    let namn = document.createTextNode(menu[i].namn);
    let kcal = document.createTextNode(menu[i].cal);
    let ingredienser = document.createTextNode(menu[i].ingredienser)
    let allergier = document.createTextNode(menu[i].allergier)
    let pris = document.createTextNode(menu[i].price)
    listnamn.appendChild(namn);
    listkcal.appendChild(kcal);
    listingredienser.appendChild(ingredienser);
    listallergier.appendChild(allergier);
    listpris.appendChild(pris);
    burgerdiv.appendChild(listnamn);
    burgerdiv.appendChild(listkcal);
    burgerdiv.appendChild(listingredienser);
    burgerdiv.appendChild(listallergier);
    burgerdiv.appendChild(listpris);
    myElement.appendChild(burgerdiv);

}

