const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolsChar = "!£$%^&*?@~#";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase ? lowerCaseChar : "";
    allowedChar += includeLowerCase ? upperCaseChar : "";
    allowedChar += includeLowerCase ? numberChar : "";
    allowedChar += includeLowerCase ? symbolsChar : "";

    if(length < 0){
        return `Length should atleast be 1.`
    }
    if(allowedChar.length === 0){
        return `Include atleast 1 set of chracters.`
    }
    for(let i=0; i < length; i++){
        let random = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[random];
    }

    return password;
}

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(password);