function welcome(){
    alert("Üdvözöllek a The Legends klánban! Itt nincsenek szinthez köttöt követelmények ezért szivesen fogadjuk a kezdő magyar játékosokat, de itt is vannak szabályok amit be kell tartani. A klán feladata az ,hogy minéltöbb harcibázist épitsünk és azokat lehető leghoszabb ideig meg kell tartanunk illetve diplomáciát kössünk más klánokal (klán ajánlások privátba jöhetnek). Cél az, hogy segítsük egymást a gyorsabb fejödésben! Remélem jól érzitek majd magatokat itt közöttünk!");
}

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirmpassword');

let registeredUser = {};

function validateInputs() {
    //trim: letördeli a szóközöket
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmpasswordVal = confirmpassword.value.trim();

    let success = true;
    
    // username validáció
    if (usernameVal=== '') {
        success = false;
        setError(username, 'Username is required');
    } else {
        setSucces(username);
    }
    // 
    const validateEmail = (email) =>{
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    if (emailVal=== '') {
        success = false;
        setError(email, 'Email is required');
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Enter valid email');
    }
    else {
        setSucces(email);
    }
    
    // jelszó validáció
    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    }
    else if (passwordVal.lenght < 8) {
        success = false;
        setError(password, 'Password error');
    }
    else {
        setSucces(password);
    }
    if (confirmpasswordVal === '') {
        success = false;
        setError(confirmpassword, 'Password is required');
    }
    else if (confirmpasswordVal!=passwordVal) {
        success = false;
        setError(confirmpassword, 'Password does not match');
    }
    else {
        setSucces(confirmpassword);
    }
    return success
}
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorMessage = inputGroup.querySelector('.error');
    errorMessage.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSucces(element) {
    const inputGroup = element.parentElement;
    const errorMessage = inputGroup.querySelector('.error');
    errorMessage.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
form.addEventListener('submit', (e) => {//event handler
    e.preventDefault();// nem lehet miatta üresen be küldeni
    if (validateInputs()) {
        registeredUser = {
            username: username.value,
            email: email.value,
            password:password.value
        };
        console.log(registeredUser);

    }
});