function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let condition = Math.random() > 0.5
            if (condition) {
                resolve("Date Fatched")
            }
            else {
                reject("Failed to fatch the data")
            }
        }, 2000)
    }
    )
}

let elem = document.getElementById("fetchDataBtn")

document.getElementById("fetchDataBtn").addEventListener("click", async() => {
    displayOutput(`Loading.....`);
    elem.style.display = "none"
    await myPromise().then((res) => {
        displayOutput(`suscess : ${res}`)
    }).catch((err) => {
        displayOutput(`Failure : ${err}`)
    })
    elem.style.display = "block"
    console.log(">>>>>>>>")
})

function displayOutput(message) {
    document.getElementById("output").innerHTML += `<p>${message}</p>`
}