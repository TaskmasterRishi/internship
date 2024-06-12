function onSubmit() {
    data.array.forEach((item, index) => {

    });
}

let myObj = {
    name: "Rishi Patodiya",
    phone: "8980402010",

    nestedObj: {
        key: "value1",
        array: [1, 2, 3, 4, 5, 6,]
    }
}
//const object - can change instance of object - can't redefined object
//to freez the object, so it can't be changed
// Object.freeze(myObj);

console.log(">>>>>", myObj.name, myObj["phone"], myObj.email, myObj.nestedObj)
console.log(myObj.nestedObj.array[3])

//here it creates pointer
let myObj2 = myObj;
myObj2.name = "Rishi"
console.log(">>>>>>>>>",myObj,myObj2)

//spread operator, this works as pass by value
let myObj3 = {... myObj, address : "sndfjsdf"}
myObj3.name="sdaf"
console.log(">>>>>>>>>",myObj,myObj3)

console.log(">>>>>>>>>",Object.values(myObj),Object.keys(myObj))

function objFun(){
    console.log("Fun Object")
}

let myObj4 = {
    name: "Rishi Patodiya",
    phone: "8980402010",
    fun : objFun,
    nestedObj: {
        key: "value1",
        array: [1, 2, 3, 4, 5, 6,]
    }
}

console.log("This is example of function inside a obiject", myObj4.fun())