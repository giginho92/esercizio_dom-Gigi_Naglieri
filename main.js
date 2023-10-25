// ESERCIZIO 1 (FUNZIONANTE)

let paragrafi = document.querySelectorAll("p");
let colori = document.querySelectorAll("p");
let grassetto = document.querySelectorAll("p");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let checked = false

btn1.addEventListener ("click", () =>{
    if (checked == false){
        paragrafi.forEach((p) =>{
            p.style.display = " block "
        });
            checked = true
    }else {
        paragrafi.forEach((p) =>{
            p.style.display = " none "
        });
            checked = false
        
    }

})

let colored = false;
btn2.addEventListener("click", () =>{
    if (colored == false) {
        paragrafi.forEach((p) =>{
            let colori = [];
            for (let i = 0; i <= 2; i++) {
                colori.push(Math.floor(Math.random()* (256) + 1));
                
            }
            p.style.color = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`
        });
        colored != colored;
    }else if (colored){
        paragrafi.forEach((p) => {
            p.style.color = `rgb(0,0,0)`
        });
        colored != colored
    };
})

btn3.addEventListener("click", () => {
    paragrafi.forEach((p) => {
        p.classList.toggle("p-bold");
    });
})


// ESERCIZIO 2
// Replicare le card in dinamica con JavaScript, come visto a lezione.
// Create un array di oggetti a vostro piacimento e provare a divertirvi come abbiamo fatto a lezione, se avete tempo provate ad inserire qualche altra feature o funzione in JS.


