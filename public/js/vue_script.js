

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


let burger1 = new  menuIteams('Halloumi', '645 kcal',  'Halloumi, briochebröd och majonnäs',
    'gluten', '60kr', '/img/burger1.jpg');
let burger2 = new menuIteams('Halloumi2.0', '700 kcal',  'Umamidressing, halloumi, briochebröd',
    'gluten, laktos', '70kr', '/img/burger2.jpg');
let burger3 = new menuIteams('Halloumi3.0', '800 kcal',  'halloumi, lökringar, majonnäs',
    'gluten, laktos', '80kr', '/img/burger3.jpg');
let burger4 = new menuIteams('Vegburgare', '670 kcal',  'vegoburgare, majonnäs, sötpotatisbröd',
    'gluten, laktos', '85kr', '/img/burger4.jpg');
let burger5 = new menuIteams('Veganburgare', '720 kcal',  'veganburgare, vegan-majonnäs, sötpotatisbröd', 'gluten', '80kr', '/img/burger5.jpg');

const vm = new Vue({
    el: '#burgare',
    data: {
        mat: food,
        burgers: []

    }, methods:{

        getBurgers: function(){

            return this.burgers;
        }

    }



});




const vm2 = new Vue({
    el: '#kontaktinfo',
    data: {
        namn: '',
        mail: '',
        betalingsmetod: '',
        man: '',
        kvinna: '',
        annat:  '',
        anonymt: '',


    },
    methods: {

        markDone: function(namn, mail, betalingsmetod, man, kvinna, annat, anonymt) {
            let myElement = document.getElementById("order");
            let burgers = vm.getBurgers();
            let burgerid = document.createElement('p');
            burgerid.appendChild(document.createTextNode(burgers));
            let namnid = document.createElement('p');
            let mailid = document.createElement("p");
            let checkedid = document.createElement("p");
            let manid = document.createElement("p");
            let kvinnaid = document.createElement("p");
            let annatid = document.createElement("p");
            let anonymtid = document.createElement("p");
            namnid.appendChild(document.createTextNode(namn));
            mailid.appendChild(document.createTextNode(mail));
            checkedid.appendChild(document.createTextNode(betalingsmetod));
            myElement.appendChild(namnid);
            myElement.appendChild(mailid);
            myElement.appendChild(checkedid);
            if (man) {
                manid.appendChild(document.createTextNode(man));
                myElement.appendChild(manid);
            }
            if (kvinna) {
                kvinnaid.appendChild(document.createTextNode(kvinna));
                myElement.appendChild(kvinnaid);
            }
            if (annat) {
                annatid.appendChild(document.createTextNode(annat));
                myElement.appendChild(annatid);
            }
            if (anonymt) {
                anonymtid.appendChild(document.createTextNode(anonymt));
                myElement.appendChild(anonymtid);
            }
            myElement.appendChild(burgerid);
        }
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