
const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

// console.dir(pokemon, { maxArrayLength: null })

// thats a lot of pokemon

// console.log(game)


// game.party will hold an array of Pokemon objects that will be retrieved from the pokemon array we reviewed in Exercise 1. These are Pokemon that you have caught!

// game.gyms holds an array of objects, each representing a gym (checkpoints placed throughout the game). Note the completed boolean property on each. This will be important later.

// game.items holds an array of objects, each representing an item in a player’s inventory.

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


game.difficulty = "Easy";

// is this what it was asking for?

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/


const charmander = pokemon.find(poke => poke.name === 'Charmander');
game.party.push(charmander);

// console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/



const PokeTeam = [
  pokemon.find(p => p.name === 'Riolu'), 
  pokemon.find(p => p.name === 'Gible'),
  pokemon.find(p => p.name === 'Sudowoodo')
];
// I added these pokemon to the list because they are some of my favorite pokemon

game.party.push(...PokeTeam);
// ... means to separate each individual item in the array here. to my undesrtanding.

// console.log(game.party);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

const gyms = [
  { name: 'Pewter Gym', difficulty: 2, completed: false },
  { name: 'Cerulean Gym', difficulty: 3, completed: false },
  { name: 'Vermilion Gym', difficulty: 1, completed: false },
  { name: 'Celadon Gym', difficulty: 4, completed: false }
];


gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

// console.log(gyms);


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/


// const starterIndex = game.party.findIndex(p => p.Charmander === 'Charmander');


// console.log("Evolved Pokemon:", game.PokeTeam);



/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < game.party.length; i++) {

  // console.log(game.party[i].name);

}


for (let i = 0; i < PokeTeam.length; i++) {
  if (PokeTeam[i].starter) {
    PokeTeam.splice(i, 1, Charmander);
    break;
  }
}
// console.log(PokeTeam);

//  i had been struggling trying to get all the names down and i figurred it out i just used poketeam in the wrong spots.


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
for (let i = 0; i < game.party.length; i++) {
  // console.log(game.party[i].name);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
const starters = pokemon.filter(p => p.starter === true);

// starters.forEach(p => console.log('exercise 9',p.name));


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
const Machamp = pokemon.find(p => p.name === 'Machamp');
game.catchPokemon(Machamp);
// console.log(game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballs = this.items.find(item => item.name === "pokeball");

  if (pokeballs && pokeballs.quantity > 0) {
    pokeballs.quantity--;
  } else {
    console.log("No pokeballs left!");
  }
};

// had tons of help online its getting more difficult the further down i go! i still hardly undesrstand what i did 
//further study is definitely need 




/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = function() {
  let completed = 0;
  let incomplete = 0;

  gyms.forEach(gym => {
    if (gym.completed) {
      completed++;
    } else {
      incomplete++;
    }
  });
console.log(`Completed Gyms: ${completed}`);
console.log(`Incomplete Gyms: ${incomplete}`);
}
//not sure how to console.log this i tried but its not popping up
// checked everywhere online im pretty sure im just not understanding.


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
game.partyCount = function() {
  return this.party.length;
};

console.log(`You have ${game.partyCount()} Pokémon in your party.`);

// I like this one i enjoy knowing how many pokemon i have solving this one was pleasing.


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

gyms.forEach(gym => {
  if (gym.difficulty < 8){
    gym.completed = true;//?
  }
});
// looping through gyms and updating the completed gyms was similar but this was easier
// insted of 6 it was 8 so it was a bit easier since ive done it before.

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game);

// this makes me wonder how many megabytes this stores. and also that this is just making a record tracker. this is awesome.
// so much fun is being made i want my understanding to be stronger though. i fully stuggled after 10 and took so much time trying to
// fix and get things right.
