const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15;
let passwordContainerLeftEl = document.querySelector("#password-container-left")
let passwordContainerRightEl = document.querySelector("#password-container-right")

function getRandomCharacter(){
    let randomCharacter = Math.floor(Math.random()*characters.length)
    return characters[randomCharacter]
}

function generatePasswords(){
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < passwordLength; i++){
        passwordOne += getRandomCharacter()
    }
    for (let i = 0; i < passwordLength; i++){
        passwordTwo += getRandomCharacter()
    }
    passwordContainerLeftEl.textContent = passwordOne
    passwordContainerRightEl.textContent = passwordTwo
}