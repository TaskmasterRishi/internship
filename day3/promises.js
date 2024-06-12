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

document.getElementById("fetchDataBtn").addEventListener("click", () => {
    displayOutput(`Loading.....`)
    myPromise().then((res) => {
        displayOutput(`suscess : ${res}`)
    }).catch((err) => {
        displayOutput(`Failure : ${err}`)
    })
})

function displayOutput(message) {
    document.getElementById("output").innerHTML += `<p>${message}</p>`
}