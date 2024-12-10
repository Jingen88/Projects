let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let clockEl = document.getElementById("clock-el")
let resetEl = document.getElementById("reset-el")
let count = 0

function add1(){
    count += 1
    homeEl.textContent = count   
}

function add2(){
    count += 2
    homeEl.textContent = count   
}

function add3(){
    count += 3
    homeEl.textContent = count   
}


function add1a(){
    count += 1
    guestEl.textContent = count 
}

function add2a(){
    count += 2
    guestEl.textContent = count 
}

function add3a(){
    count += 3
    guestEl.textContent = count 
}


function reset(){
    guestEl.textContent = 0
    homeEl.textContent = 0
    count = 0
}



