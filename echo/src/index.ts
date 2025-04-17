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

// DAN1 TIPOVI PODATAKA,FUNKCIJE ITD

/* type Book = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};

function createBook(
  title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean
): Book {
  return { title, author, publishedYear, isAvailable };
}

function printBookInfo(book: Book) {
  console.log(
    ` ${
      book.isAvailable
        ? `Knjiga ${book.title} autora ${book.author} je dostupna`
        : `Knjiga ${book.title} autora ${book.author} nije dostupna`
    }`
  );
}
 */

//DAN2 Interface, Tuple, Enum, Optional i Readonly

/*Definiraj interface Vehicle sa sljedećim:

brand: string

model: string

year: number

fuel: FuelType (enum koji sadrži PETROL, DIESEL, ELECTRIC)

coordinates?: [number, number] (optional tuple)

readonly vin: string

Napiši funkciju printVehicleInfo(vehicle: Vehicle) koja ispisuje informacije o vozilu, npr:

"Audi A4 (2018) koristi DIESEL. VIN: 123ABC."

Ako postoje koordinate: "Lokacija vozila: [45.0, 16.5]"

  */

/* enum FuelType {
  Petrol = "PETROL",
  Diesel = "DIESEL",
  Electric = "ELECTRIC",
}

interface Vehicle {
  brand: string;
  model: string;
  year: number;
  fuel: FuelType;
  coordinates?: [number, number];
  readonly vin: string;
}

function printVehicleInfo(vehicle: Vehicle) {
  console.log(
    `${vehicle.brand} ${vehicle.model} (${vehicle.year}) koristi ${vehicle.fuel}. VIN: ${vehicle.vin}.`
  );
}
 */

//DAN 3 - Type Narrowing, Type Guards, Unknown, Discriminated Unions

/* type Dog = {
  type: "dog";
  breed: string;
  barkVolume: number;
};

type Cat = {
  type: "cat";
  color: string;
  meowPitch: number;
};

type Pet = Dog | Cat;

function describePet(pet: Pet) {
  if (pet.type === "dog") {
    console.log(`Pas pasmine ${pet.breed} laje jačinom ${pet.barkVolume}.`);
  } else {
    console.log(`Mačka ${pet.color} boje mijauče na ${pet.meowPitch}Hz.`);
  }
} */

//DAN 4 - Generics, Utility Types, Mapped Types
/* 

type User<T> = {
  name: string;
  age: number;
  data: T;
};

// Demonstracija generičke funkcije
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numberArray = wrapInArray(42); // [42]
const stringArray = wrapInArray("Hello"); // ["Hello"]

// Demonstracija mapped types
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type UserOptional = Optional<User<{ hobbies: string[] }>>;

const optionalUser: UserOptional = {
  name: "Ana",
  age: 30,
  data: { hobbies: ["reading", "traveling"] },
};

*/

//1 
export function wrapInObject<T>(value: T): { value: T } {
  return { value };
}


//2
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
}

