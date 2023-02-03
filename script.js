const input = document.querySelector("input");
const showHideBtn = document.querySelector(".showBtn");
const indicator = document.querySelector(".indicator");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");

let regExpWeak = /[a-z]/;
let regExpmedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


function trigger() {
    if (input.value != "") {
        
        if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpmedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpmedium)) || (input.value.match(regExpmedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpmedium) && input.value.match(regExpStrong))no=3;
        if(no == 1) {
            weak.classList.add("active");
            text.textContent = "Your Password is too weak";
            text.classList.add("weak");
        }
        if(no == 2) {
            medium.classList.add("active");
            text.textContent = "Your Password is medium";
            text.classList.add("medium");
        }
        else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if(no == 3) {
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your Password is strong";
            text.classList.add("strong");
        }
        else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        passWordDetailes();
        text.style.opacity = 1;
        showHideBtn.style.display = "block";
        showHideBtn.innerHTML = "Show"
        showHideBtn.onclick = function() {
            if(input.type == "password") {
                input.type = "text";
                showHideBtn.innerHTML = "Hide";
            }else{
                input.type = "password";
                showHideBtn.innerHTML = "Show";
            }
        }

    }
    else {
        weak.classList.remove("active");
        text.style.opacity = 0;
        showHideBtn.style.display = "none";
    }
}

input.addEventListener("keyup", trigger);

function passWordDetailes() {

    const passWordLength = document.querySelector(".passwordLength");
    const passWordLetters = document.querySelector(".passwordLetters");
    const passWordNumbers = document.querySelector(".passwordNumbers");
    const specialChrts = document.querySelector(".passwordSpecialChrts");
    
    if (input.value.length >= 6) {
        passWordLength.classList.add("active");
    }
    else {
        passWordLength.classList.remove("active");
    }
    
    if (/[A-Z]/.test(input.value)) {
        passWordLetters.classList.add("active");
    }
    else {
        passWordLetters.classList.remove("active");
    }
    
    if (/\d+/.test(input.value)) {
        passWordNumbers.classList.add("active");
    }
    else {
        passWordNumbers.classList.remove("active");
    }
    
    if (/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(input.value)) {
        specialChrts.classList.add("active");
    }
    else {
        specialChrts.classList.remove("active");
    }
}

/* const password = document.querySelector(".password");
const generate = document.querySelector(".generateButton");
const copyIcon = document.querySelector(".reguler");
const copyIconActive = document.querySelector(".solid");



// ***** Generate Password ***** --------------------------
function newPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()__-=+[]{}/~<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLength = 20;
    let generatedPassword = "";
    function genPassword(){
        copyIcon.style.display = "inline-block";
        copyIconActive.style.display = "none";
        for(let i=0; i<=passLength; i++){
            let randomPassword =  chars.charAt( Math.floor(Math.random() * chars.length));
            generatedPassword += randomPassword;
        }
        return generatedPassword;
    }
    password.value = genPassword();
    console.log(password.value);
}

generate.addEventListener("click", newPassword);



// ***** Copy Generated Password ***** --------------------------
function copyPassword(){
    copyIcon.style.display = "none";
    copyIconActive.style.display = "inline-block";
    let copyText = password;
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
}

copyIcon.addEventListener("click", copyPassword);
copyIconActive.addEventListener("click", copyPassword);
*/