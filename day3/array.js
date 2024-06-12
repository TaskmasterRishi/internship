let myObj = {
    name: "Rishi Patodiya",
    phone: "8980402010",

    nestedObj: {
        key: "value1",
        array: [1, 2, 3, 4, 5, 6,]
    }
}

let arr = ["Rishi Patodiya", 5, true, "sdfssefwe", myObj, 1, 2, 3, 4, 5, 6, 7, 8]
//simmilar way of definig ibject in array
// let arr = ["Rishi Patodiya",5,true,"sdfssefwe",
//     {
//         name: "Rishi Patodiya",
//     phone: "8980402010",

//     nestedObj: {
//         key: "value1",
//         array: [1, 2, 3, 4, 5, 6,]
//     }
//     }
// ]
//for pass by value use spread operator
let arr2 = arr
arr2[1] = 6
arr[3] = "asdf"
console.log("array", arr)
console.log("array", arr2)
let arr3 = { ...arr }
arr3[1] = 10;
console.log("array", arr3)

console.log(arr, arr[4].nestedObj.array)

//to concate 2 array
// arr3 = arr3.concat(arr2)
console.log("array", arr3)

let arr4 = [...arr2, 1, 2, 3, 4, 5, 6, 7, 8, "Rishi Patodiya"]
console.log("array", arr4)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//found the vaue and returns it in new array
let filter = num.filter(
    (item) => item % 2 == 0
)
console.log("array", num, filter)


let arrayObj = [{
    name: "Rishi Patodiya",
    age: 18,
    isAuth : true
},
{ name: "Nit patel", age: 18 ,isAuth : false},
{ name: "Rushi patel", age: 19, isAuth: true},
{ name: "Dev patel", age: 20 ,isAuth : true}]

let arrayObj2 = arrayObj.filter(
    (item, index) => item.isAuth == true
)
console.log("array",arrayObj,arrayObj2)

