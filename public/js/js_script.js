




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



document.getElementById("burger1").innerHTML = burger1.iteam();

document.getElementById("burger2").innerHTML = burger2.iteam();

document.getElementById("burger3").innerHTML = burger3.iteam();

document.getElementById("burger4").innerHTML = burger4.iteam();

document.getElementById("burger5").innerHTML = burger5.iteam();