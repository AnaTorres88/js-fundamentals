// Creating the map
let myMap = new map();

// Setting a value
myMap.set('cavalier', 'Gideon');
myMap.set('necromancer', 'Harrow');
myMap.set(3, true);
myMap.set({character: 'the emperor John Gaius'}, 'the boss');

console.log(myMap.size); // 4

console.log(`These are the types of those valyes ${typeof myMap.get('cavalier')}, ${typeof myMap.get('necromancer')}, ${typeof myMap.get(3)}`);
// string, string, number

// Iteration

// Over keys
for(let key of myMap.keys()) {
    console.log(key); // cavalier, necromancer, 3,{character: 'the emperor John Gaius'}
}

// Over values
for(let key of myMap.values()) {
    console.log(key); // gideon, harrow, true, the boss}
}

// Over entries

for (let entry of myMap) { // cavalier, Gideon ... 
    console.log(entry); 
  }