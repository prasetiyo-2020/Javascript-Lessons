const user = {};
let object = {key1: "value1", key2: "value2", key3: "value3"}

// CREATE OBJECT
const user = {firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true};

// CREATE OBJECT
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

console.log("Halo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

// CREATE OBJECT
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log("Halo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");
console.log("Saya berasal dari " + user["home world"]);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/

// MODIFICATION
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'
}
*/

// CREATE NEW ATTRIBUTE
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);

/* output
{
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/

// DELETE ATTRIBUTE
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
     
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
     
delete spaceship.manufacturer;
     
console.log(spaceship);
     
/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
*/

// Example 6:
/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// TODO
const restaurant = {
    name: "a",
    city: "b",
    "favorite drink": "c",
    "favorite food": "d",
    isVegan: true,
}

const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];

/**
 * Hiraukan kode di bawah ini
 */
module.exports = { restaurant, name, favoriteDrink };
