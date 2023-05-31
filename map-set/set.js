// Creating the set
let mySet = new Set();

// Adding a value
mySet.add("Necromancer");
mySet.add("Cavalier");
mySet.add("BoE soldier");
mySet.add("Necromancer");

// Size
console.log(mySet.size); // 3. No duplicates allowed

// Iteration

for (let character of mySet) {
    alert(character); // Necromancer, Cavalier, BoE soldier
}
console.log(mySet.keys()); // [Set Iterator] { 'Necromancer', 'Cavalier', 'BoE soldier' }
console.log(mySet.values()); // [Set Iterator] { 'Necromancer', 'Cavalier', 'BoE soldier' }
console.log(mySet.entries());
/*[Set Entries] {
  [ 'Necromancer', 'Necromancer' ],
  [ 'Cavalier', 'Cavalier' ],
  [ 'BoE soldier', 'BoE soldier' ]
}
*/