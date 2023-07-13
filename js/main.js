document.getElementById("generate").addEventListener("click", function () {
    // Invoco la funzione per generare i quadrati
    generateSquare();

    // Genero numero random.
    const numRandomArray = []

    for (let i = 1; i <= 16; i++) {
        const numRandom = Math.round(Math.random() * 99) + 1;
        if (numRandomArray.indexOf(numRandom) >= 0) {
            i--
        } else {
            numRandomArray.push(numRandom)
        }

    }
    console.log(numRandomArray)

    // Invoco la funzione per colorare i quadrati.
    addToggle(numRandomArray);

})
// Funzione per generare i quadrati.
function generateSquare() {
    const div = document.querySelector("div.row")

    for (let i = 1; i <= 100; i++) {
        const singleSquare = `<div class="${i} border border-1 square text-white">${i}</div>`
        div.innerHTML += singleSquare
    }

}
// Funzione per colorare i quadrati al click.
function addToggle(numRandomArray) {
    const squareList = document.querySelectorAll(".square")

    for (let i = 0; i < squareList.length; i++) {

        squareList[i].addEventListener("click", function () {
            squareList[i].classList.toggle("bg-primary")
            console.log(squareList[i].innerHTML)
            score.push(squareList[i].innerHTML)

            for (let j = 0; j < numRandomArray.length; j++) {
                const bomb = numRandomArray[j]
                if (bomb === (i + 1)) {
                    squareList[i].classList.toggle("bg-danger")
                    console.log("bomba")
                    window.alert("Hai Perso! Il tuo punteggio è " + (score.length - 1))
                    window.location.reload()
                }
            }
        })
    }
}
// Array per calcolare il punteggio.
const score = []


