
function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbol){

    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '@!#$%^&*_+';

    let password = '';
    let allowedChar = '';

    allowedChar += includeLowercase ? lowercaseChar : '';
    allowedChar += includeUppercase ? uppercaseChar : '';
    allowedChar += includeNumber ? numbers : '';
    allowedChar += includeSymbol ? symbols : '';


    if (length <= 0){
        return(`Password length must be at least 1`)
    }
    if(allowedChar.length === 0){
        alert(`At least 1 set of characters needs to be selected`)
        return ('')
    }


    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomIndex]
        
    } 

    return password

    
}

const passwordLength = 12;
let includeLowercase = false 
let includeUppercase = false
let includeNumber = false
let includeSymbol = false


let upperCase = document.getElementById("upperCaseCheckBox")
let lowerCase = document.getElementById("lowerCaseCheckBox")
let symbol = document.getElementById("symbolCheckBox")
let number = document.getElementById("numberCheckBox")

upperCase.addEventListener('click', ()=>{
     includeUppercase = upperCase.checked});

lowerCase.addEventListener('click', ()=>{
     includeLowercase = lowerCase.checked})

number.addEventListener('click', ()=>{
     includeNumber = number.checked})

symbol.addEventListener('click', ()=>{
     includeSymbol = symbol.checked})


reset = ()=> document.getElementById('inputBox').value = '';

let input = document.getElementById('inputBox')
let passwordBtn = document.getElementById('pswBtn')
let resetBtn = document.getElementById('resetBtn')

passwordBtn.addEventListener('click', ()=>{
    const password = generatePassword(passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumber,
        includeSymbol);
    input.value = password
});

resetBtn.addEventListener('click', reset);


