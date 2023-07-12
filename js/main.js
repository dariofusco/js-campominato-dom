document.getElementById("myBtn").addEventListener("click", function () {

    const div = document.querySelector("div.row")

    for (let i = 1; i <= 100; i++) {
        const singleSquare = `<div class="${i} border border-1 square">${i}</div>`
        div.innerHTML += singleSquare
    }

    const numRandomArray = []
    for (let i = 1; i <= 16; i++) {
        const numRandom = Math.round(Math.random() * 99) + 1;
        console.log(numRandom)
        numRandomArray.push(numRandom)
    }

    for (let i = 0; i < numRandomArray.length; i++) {
        const bomb = numRandomArray[i]
        console.log(bomb)
    }

    const squareList = document.querySelectorAll(".square")

    for (let i = 0; i < squareList.length; i++) {
        squareList[i].addEventListener("click", function () {
            squareList[i].classList.toggle("bg-success")
            console.log(squareList[i].innerHTML)
        })
    }

})
