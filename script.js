let grass = document.querySelectorAll('.grass')
let man = document.querySelectorAll('.man')
let papanScore = document.querySelector('.papanscore')
let timeLeft = document.querySelector('#timeleft')
let shot = document.querySelector('#shot')

let isSelesai = false
let score = 0 
let curentTime = timeLeft.innerHTML

function randomGrass(grass){
let grassRandom = Math.floor(Math.random() * grass.length)

return grass[grassRandom]
}

function appearMan(grass){
    let grassRandom = randomGrass(grass)
    grassRandom.classList.add('appear')

    setTimeout(() => {
        grassRandom.classList.remove('appear')
        if(!isSelesai){
            appearMan(grass)
        }
    }, 385);
}

function start(){
    alert("are you ready?")
    alert("get set")
    alert("go")
    curentTime = 15
    isSelesai = false
    score = 0
    papanScore.innerHTML = 0
    appearMan(grass)
    setTimeout(() => {
    isSelesai = true
    },15000)

    
   let interval = setInterval(() =>{
       curentTime --
       timeLeft.innerHTML = curentTime
        if(curentTime === 0){
            clearInterval(interval)
            alert(`you kill ${papanScore.innerHTML} terorrist, keep it up!`)
        }
    }, 1000)

}


function hit(){
    score++
    papanScore.innerHTML = score
    shot.play();
}

man.forEach(char => {
    char.addEventListener('click', hit)
}); 

