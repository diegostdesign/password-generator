const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passwordLength = 15
const passwordEl = document.getElementById("password-el")
const passwordElSecond = document.getElementById("password-el-second")

function generatePassword(){
    let password = []
    let secondPassword = []
    
    for(i = 0; i < passwordLength; i++){
        password.push(characters[Math.floor(Math.random()*characters.length)])
    }
    
    for(i = 0; i < passwordLength; i++){
        secondPassword.push(characters[Math.floor(Math.random()*characters.length)])
    }
    
    passwordEl.textContent = password.join('')
    passwordElSecond.textContent = secondPassword.join('')
}


