## Map and Set
Map and Set are **data structures** that
### Map
* Collection of Keyed data items (like Object, but not quite).
*  Has the following properties / methods
   - new Map() – creates the map.
   - map.set(key, value) – stores the value by the key.
   - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
   - map.has(key) – returns true if the key exists, false otherwise.
   - map.delete(key) – removes the element (the key/value pair) by the key.
   - map.clear() – removes everything from the map.
   - map.size – returns the current element count.


### Set
* Collection. A set of values without keys. Sets can store a value onl once.
  * Has the following properties / methods.
    - new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    - set.add(value) – adds a value, returns the set itself.
    - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    - set.has(value) – returns true if the value exists in the set, otherwise false.
    - set.clear() – removes everything from the set.
    - set.size – is the elements count.
  
### Object vs Map / Set vs Array


*From: https://javascript.info/map-set*
