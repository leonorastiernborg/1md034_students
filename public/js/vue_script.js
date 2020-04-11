

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

const vm = new Vue({
    el: '#myID',
    data: {

        menu: [
            burger1,
            burger2,
            burger3,
            burger4,
            burger5

        ]
    }
})




/*

const vm = new Vue({
    el: '#myID',
    data: {
        b1: burger1.iteam(),
        b2: burger2.iteam(),
        b3: burger3.iteam(),
        b4: burger4.iteam(),
        b5: burger5.iteam()
    }
})

 */