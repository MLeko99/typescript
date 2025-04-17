// Funkcija koja prima podatke i vraća korisnika
function createUser(name, age, isActive) {
    return {
        name: name,
        age: age,
        isActive: isActive,
    };
}
// Primjer korištenja
var newUser = createUser("Mile", 25, true);
console.log(newUser);
function printUserInfo(user) {
    console.log("Korisnik ".concat(user.name, " ima ").concat(user.age, " godina i trenutno je aktivan"));
}
