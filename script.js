const wordText=document.querySelector(".scramble")
const hintText=document.querySelector(".hint b")
const timeText=document.querySelector(".time b")

inputField=document.querySelector("input")

refreshbtn =document.querySelector(".refresh")
checkbtn =document.querySelector(".check")

let correctword ,timer 

const inittimer= maxtime =>{
    clearInterval(timer)

    timer = setInterval (() =>{
        if(maxtime>0){
            maxtime--;
            return timeText.innerText = maxtime
        }
        clearInterval(timer)
        alert(`Time Up ${correctword.toUpperCase()} was the correct answer`)
initGame()

    },1000)
}



const initGame= () =>{
    inittimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)]
    let wordAarry = randomObj.word.split("");
    for(let i= wordAarry.length - 1; i>0 ; i--){
        let j = Math.floor(Math.random()*(i+1))
        let temp = wordAarry[i];
        wordAarry[i]=wordAarry[j]
        wordAarry[j]=temp 

    }
    wordText.innerText = wordAarry.join("")
    hintText.innerText=randomObj.hint
    correctword = randomObj.word.toLowerCase()
    inputField.value=""
    inputField.setAttribute("maxlenght",correctword.length)
    // console.log(randomObj)
}
initGame()

const checkword = () =>{
    let userword = inputField.value.toLocaleLowerCase()
    if(!userword) return alert("Please enter the word")
    if(userword !== correctword) return alert(`Sorry ${userword} is Wrong answer`)
    alert(`Congratulation ${userword.toUpperCase()} is Right answer`)
    initGame()
}


refreshbtn.addEventListener("click", initGame)

checkbtn.addEventListener("click", checkword)
