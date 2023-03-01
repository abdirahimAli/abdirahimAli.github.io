const number = document.getElementById("number");
const smallletters = document.getElementById("small_letters");
const Capitalletters = document.getElementById("Capital_letters");
const Charachterlength = document.getElementById("Charachter_length");
const Symbol = document.getElementById("symbols");

const btn = document.getElementById("btn");
const password = document.getElementById("Password");
const length = document.getElementById("length");


const numbers = [0,1,2,3,4,5,6,7,8,9];
const sletters= ["g","z","m","d","e","x","a","h","r","u","w",
                "o","c","y","l","t","p","i","s","q","k","j","k",
                "f","n","b"];
const Cletters= ["A","B","C","D","E","F","G","H","I","J","K",
                "L","M","N","O","P","Q","R","S","T","V","U","W",
                "X","Y","Z"]; 

const Symbols= ["!","£","$","%","^","&","*","()","?","#","~","/","@","=","+"]


let Password = [];   
let n;
let numberticked = false;
let slettersticked = false;
let Clettersticked = false;
let Symbolsticked = false;


//////////Adding//////////////
function addnumber(nindex){
    Password.push(numbers[nindex]);
}

function addsletter(sindex){
    Password.push(sletters[sindex]);
}

function addCletter(Cindex){
    Password.push(Cletters[Cindex]);
}
function addSymbols(sindex){
    Password.push(Symbols[sindex]);
}


//////////////////Bolean//////////////////////////
function Tick1(){
if(numberticked)
    numberticked = false;
    else{numberticked = true}
}

function Tick2(){
    if(slettersticked)
    slettersticked = false;
        else{slettersticked = true}
    }

function Tick3(){
        if(Clettersticked)
        Clettersticked = false;
            else{Clettersticked = true}
        }  

function Tick4(){
    if(Symbolsticked)
    Symbolsticked = false;
        else{Symbolsticked = true}
    }  

        

//////////////Generate/////////////////////////
function Generate(){


btn.classList.add('translateY');
Password = [];   //clears the array//
Select();

let array_El_D = Password.length - Charachterlength.value;
Math.abs(array_El_D);

for(let i =0; i<array_El_D; i++){
Password.pop();
}
const shuffledArray = Password.sort((a, b) => 0.5 - Math.random());

// converts password into string and then gets rid of comma //
password.textContent = shuffledArray.toString().split(',').join('');

}


////////////// update Text //////////////////

console.log("Charachterlength is:",Charachterlength.value);
console.log("Password length is:",Password.length);
length.textContent = Charachterlength.value;

function Show_Charachterlength(){
length.textContent = Charachterlength.value;
}



////////////// RUN //////////////////
function Select(){
 
    for(let i =0; i<Charachterlength.value; i++){
    // random number is generated to select an element //
    // of the inbuilt arrays //
        let index = Math.floor(Math.random() * 10);
        let Cindex = Math.floor(Math.random() * 26);
        let sindex = Math.floor(Math.random() * 15);

// The logic behind chosen elements from the inbuilt arrays //
        if ( numberticked){
        addnumber(index);
        }

        if ( slettersticked){
        addsletter(Cindex);
        }

        if ( Clettersticked){
            addCletter(Cindex);
        }

        if ( Symbolsticked){
            addSymbols(sindex);
    }   
    }
    length.textContent = Charachterlength.value;
    // btn.classList.remove('R_translateY')    
    
            }


// ///////////addEventListener////////////////////


number.addEventListener('change',Tick1);

smallletters.addEventListener('change',Tick2);

Capitalletters.addEventListener('change',Tick3);


Charachterlength.addEventListener('input',Show_Charachterlength);

Symbol.addEventListener('change',Tick4);
