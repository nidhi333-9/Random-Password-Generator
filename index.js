
let passOne = document.getElementById("password-one");
let passTwo = document.getElementById("password-two");



function generatePassword() {
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];

    let passwordLenght = 15;
    var passwordOne = "";
    let passwordTwo = "";
    for (let i = 0; i < passwordLenght; i++) {
        let charOne = Math.floor(Math.random() * characters.length);
        passwordOne += characters.slice(charOne, charOne + 1);
        let charTwo = Math.floor(Math.random() * characters.length);
        passwordTwo += characters.slice(charTwo, charTwo + 1);

    }

    passOne.textContent = passwordOne;
    passTwo.textContent = passwordTwo;

}


function copyOne() {
    alert("Copy to clipboard")
    var r = document.createRange();
    r.selectNode(passOne);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
function copyTwo() {
    var r = document.createRange();
    r.selectNode(passTwo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
