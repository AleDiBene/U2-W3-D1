// esercizio 1)

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}.`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}.`;
    } else {
      return `${this.firstName} e ${altroUtente.firstName} hanno la stessa età.`;
    }
  }
}

const ale = new User("ale", "di bene", 22, "caltagirone");
const marco = new User("Marco", "Rossi", 25, "Roma");

console.log(ale.confrontaEta(marco));
console.log(marco.confrontaEta(ale));

// esercizio 2)

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita il refresh della pagina

  // Prendere i valori dal form
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // Creare un nuovo oggetto Pet
  const newPet = new Pet(petName, ownerName, species, breed);

  // Aggiungere l'animale alla lista visibile
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `${newPet.petName} (${newPet.species}, ${newPet.breed}) - Proprietario: ${newPet.ownerName}`;
  petList.appendChild(listItem);

  // Resettare il form dopo l'invio
  document.getElementById("petForm").reset();
});
