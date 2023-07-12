document.getElementById("myBtn").addEventListener("click", function () {

    generateSquare();

    const numRandomArray = []

    for (let i = 1; i <= 16; i++) {
        const numRandom = Math.round(Math.random() * 99) + 1;
        //console.log(numRandom)
        numRandomArray.push(numRandom)
    }
    console.log(numRandomArray)

    addToggle(numRandomArray);

})

function generateSquare() {
    const div = document.querySelector("div.row")

    for (let i = 1; i <= 100; i++) {
        const singleSquare = `<div class="${i} border border-1 square">${i}</div>`
        div.innerHTML += singleSquare
    }

}

function addToggle(numRandomArray) {
    const squareList = document.querySelectorAll(".square")

    for (let i = 0; i < squareList.length; i++) {

        squareList[i].addEventListener("click", function () {
            squareList[i].classList.toggle("bg-success")
            //console.log(squareList[i].innerHTML)
            for (let j = 0; j < numRandomArray.length; j++) {
                const bomb = numRandomArray[j]
                console.log(bomb)
                if (bomb === (i + 1)) {
                    squareList[i].classList.toggle("bg-danger")
                    console.log("bomba")
                    break;
                }
            }
        })
    }
}