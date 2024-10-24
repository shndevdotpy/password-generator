let passwordLength = 16;
let uppercase = false;
let uppercaseChecker = document.getElementById("uppercase");
let lowercase = false;
let lowercaseChecker = document.getElementById("lowercase");
let numbers = false;
let numbersChecker = document.getElementById("numbers");
let symbols = false;
let symbolsChecker = document.getElementById("symbols");
let generatedPassword = "";
let range = document.getElementById("length-range")
let rangeValue = 16;
let lengthPreview = document.getElementById("length-value")

const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbersChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?"];


function random(x){
    Math.floor(Math.random() * x + 1);
}

function mix(str) {
    let arr = str.split('');
    
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    return arr.join('');
}



function generate(){
    generatedPassword = "";
    passwordLength = rangeValue;
    if (uppercaseChecker.checked){
        for (let i=0;i<25;i++){
            generatedPassword += uppercaseChars[i]
        }
    }

    if (lowercaseChecker.checked){
        for (let i=0;i<25;i++){
            generatedPassword += lowercaseChars[i]
        }
    }

    if (numbersChecker.checked){
        for (let i=0;i<25;i++){
            generatedPassword += numbersChars[i]
        }
    }

    if (symbolsChecker.checked){
        for (let i=0;i<25;i++){
            generatedPassword += symbolsChars[i]
        }
    }

    generatedPassword = mix(generatedPassword);
    generatedPassword = generatedPassword.slice(0, passwordLength)

    if (generatedPassword == ""){
            alert("Please select at least one of the options!")
        }
    else{
        
        document.getElementById("generated-password").value = generatedPassword;
    }
}

function copy(){
    let text = document.getElementById("generated-password");

    if (text.value !== "Waiting for generation..."){
        text.select();
        text.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(text.value);
        alert(`Generated password "${text.value}" copied your clipboard!`);
    }
    else{
        alert("Please generate a password before copying!");
    }
}

range.addEventListener("input", function() {
    rangeValue = range.value;
    lengthPreview.innerHTML = range.value;
}, false); 
