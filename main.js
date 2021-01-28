// 1
let leH1 = document.querySelector('h1')
console.log(leH1);

//2
// leH1.style.color= "blue"

//3
let taMere = () => {
    leH1.style.color= "blue"
}

// 4
// taMere()

// 5
leH1.addEventListener('click', taMere)