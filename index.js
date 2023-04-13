const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let group = []
let generateEl = document.querySelector("#generate-el")
let passwordOne = document.querySelector("#password-one")
let passwordTwo = document.querySelector("#password-two")

generateEl.addEventListener("click", function() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    for (let i = 0; i < 15; i++) {
        let char = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[char]
        passwordTwo.textContent += characters[char]
    }
})

