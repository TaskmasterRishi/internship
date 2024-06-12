let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.push(10)
console.log("Push => ",arr)
let poopedItem = arr.pop()
console.log("Pop => ",arr, poopedItem)

// join 
//make string from array with spreater provided as argument
let joinedIrems = arr.join("-")
console.log("Join => ",joinedIrems)

//reduce
//it performs cumulative addition
// arr = ["a","b","c","d"]
let redeucedItem = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
)
console.log("reducedItems", redeucedItem)

//map
const mappedItems = arr.map((item, index) => { 
    if (index > 2) {
        return item;
      } else {
        return null; 
      }
});
console.log(mappedItems); 

