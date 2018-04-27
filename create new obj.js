/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/



var RandomizedSet = function() {
  this.set = [];
  this.check = {};
  this.len = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(!this.check[val]){
    this.check[val] = true;
    this.set.push(val);
    this.len += 1;
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  let index = this.set.indexOf(val);
  if(index !== -1) {
    this.set.splice(index, 1);
    this.len--;
    delete this.check[val];
    return true;
  } else {
    return false;
  }

};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * this.len);
    console.log(random, this.set, this.len)

    return this.set[random];
};


var obj = new RandomizedSet()
 obj.insert(5)
  obj.insert(6)
 obj.remove(5)
 obj.getRandom()
