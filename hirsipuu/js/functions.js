
const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "navi",
    "ence",
    "vitality",
    "heroic",
    "falcons",
    "spirit",
    "astralis",
    "faze"
]

let randomizedWord = ''
let maskedWord = ''
let guesses = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    span.innerHTML = guesses
}

const win = () => {
    alert(`Arvasit oikein, sana on ${randomizedWord}.`)
    
    guesses = 0
    span.innerHTML = guesses
    newGame()
}

const replaceFoundCharts = (guess) => {
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        
        guesses++
        span.innerHTML = guesses

        const guess = input.value
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundCharts(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert("Väärin!")
        }
        input.value = ''
    }
})