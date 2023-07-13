var realPool = ''
var lowercaseCharacterPool = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseCharacterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numericCharacterPool = '123456789012345678901234567890'
var specialCharacterPool = "~!@#$%^&*()_+?~!@#$%^&*()_+?:"
var jeb = 'aaaaaaaaaaaaasfasdasdgasdgasdgasdfasdfasf'
var poolpool = ['']

console.log(numericCharacterPool.length)


var lengthPassword = prompt("What's the length of the password going to be",'12');
//lowercase, uppercase, numeric, and/or special characters
if(lowercase = confirm('Are there going to be lowercase characters?') == true ){
    poolpool.push(lowercaseCharacterPool)
};
if( uppercase = confirm('Are there going to be uppercase characters?')== true){
    poolpool.push(uppercaseCharacterPool)
};
if( numeric = confirm('Are there going to be numeric characters?')== true){
    poolpool.push(numericCharacterPool)
};
if( special = confirm('Are there going to be special characters?') == true){
    poolpool.push(specialCharacterPool)
};

console.log(`poopool${poolpool}`)

console.log(lengthPassword)
console.log(`lowercase ${lowercase}`)
console.log(`uppercase ${uppercase}`)
console.log(`numeric ${numeric}`)
console.log(`special ${special}`)



function rng(max) {
    return Math.floor(Math.random() * max);
  }



function realPoolGen(){
    for( i=1; i = lengthPassword; i++){
        switch(i < poolpool.length){
            case false:
        var x = i % poolpool.length
            case true:
        var x = i
             }
            var rng2 = rng(24)
        realPool += poolpool[rng(poolpool.length)].slice(rng2,rng2+1)
        console.log(realPool)
        if (realPool.length >= lengthPassword){
            break
        }
    }
}



function buttonClick(){
    realPoolGen()
    printPassword()
}

var jeb = document.getElementById('generate');
jeb.addEventListener("click", buttonClick);

function printPassword(){
    var passwordIguess = document.getElementById('password');
    passwordIguess.innerHTML = realPool
    //yep
    console.log("yep")
}