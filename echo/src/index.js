"use strict";
/* // Definicija tipa User
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

// Funkcija koja prima podatke i vraća korisnika
function createUser(name: string, age: number, isActive: boolean): User {
  return {
    name,
    age,
    isActive,
  };
}

// Primjer korištenja
const newUser = createUser("Mile", 25, true);
console.log(newUser);

function printUserInfo(user:User){
  console.log(`Korisnik ${user.name} ima ${user.age} godina i trenutno je aktivan`)
} */
function describePet(pet) {
    if (pet.type === "dog") {
        console.log(`Pas pasmine ${pet.breed} laje jačinom ${pet.barkVolume}.`);
    }
    else {
        console.log(`Mačka ${pet.color} boje mijauče na ${pet.meowPitch}Hz.`);
    }
}
