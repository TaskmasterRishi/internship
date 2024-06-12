// localStorage.setItem("key1",[1,2,3,4,5].toString())
//two constrains as argument 1st key and value and snf both in string formate
//to store array in local storgae it need to be converted in string
localStorage.setItem("key1",JSON.stringify([1,2,3,4,5,6]))
let localItem = localStorage.getItem("key1")
console.log(JSON.parse(localItem)) // JSON.parse convert string into array
document.getElementById("local").innerHTML = `<h3>${localItem}</h3>`

// localStorage.removeItem("key1") // remove specified key and value
// localStorage.clear() // clear entire local storage