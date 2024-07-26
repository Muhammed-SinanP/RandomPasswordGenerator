const charLength = document.getElementById('charLength');
let display = document.getElementById("charLengthDisplay");
let add = document.getElementById("plusBtn");
let sub = document.getElementById("minusBtn");

let displayPassword = document.getElementById("displayPassword");

let alphabets = document.getElementById("alphabets");
let uCase = document.getElementById("upperCase");
let lCase = document.getElementById("lowerCase");
let bothCase = document.getElementById("bothCase")

let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");


const listAlphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listAlphabetsLower = "abcdefghijklmnopqrstuvwxyz"
const listNumbers = "0123456789";
const listSymbols = "!@#$&*_";



charLength.addEventListener('input', () => {
    
    const newValue = charLength.value;
    if (charLengthDisplay.textContent !== newValue) {
      charLengthDisplay.textContent = newValue;
    }
  });








add.addEventListener("click",() => {
    if(charLength.value < 20){
        charLength.value++; 
        charLengthDisplay.textContent = charLength.value;
    }
});

sub.addEventListener("click",() => {
    if(charLength.value > 4){
        charLength.value--;
        charLengthDisplay.textContent = charLength.value;
    }
})




function generatePassword(){
    let num = Number(display.innerText);


    let listAllowed = "";

    if(alphabets.checked){
        listAllowed += uCase.checked ? listAlphabetsUpper : "" ;
        listAllowed += lCase.checked ? listAlphabetsLower : "" ;
        listAllowed += bothCase.checked ? listAlphabetsUpper+listAlphabetsLower : "" ;
    }
    
    listAllowed += numbers.checked ? listNumbers : "" ;
    listAllowed += symbols.checked ? listSymbols : "" ;
    
    let newPassword = "";

    if(listAllowed === ""){
        
        displayPassword.innerText = "00000000";
        window.alert("Please include atleast one condition!");
    }

    else{
        

    for(let i=1;i<=num;i++){
        let random = Math.floor(Math.random() * listAllowed.length);
        newPassword += listAllowed[random];
    }
    displayPassword.innerText = newPassword;

    }
    
    

}

async function copy(){
    try{
    await navigator.clipboard.writeText(displayPassword.innerText);
    window.alert(`Password copied!\nPress "Ctrl + v" to paste`);
    }
    catch(error){
        console.log(error);
        window.alert("Failed to copy password!");
    }
}

function reload(){
    location.reload();
}