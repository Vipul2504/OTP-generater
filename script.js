function randomNumber(){
    let randomnum = Math.floor(Math.random()*8) + 1;
    console.log(randomnum)
    return randomnum;
}

function generateNumber(){
    renderNumber();
}

function renderNumber(){
    let first = randomNumber()
    let second = randomNumber()
    let third = randomNumber()
    let fourth = randomNumber()

    if (second === first) {
        second = randomNumber()
        renderNumber()
    }

    if (third === second || third === first) {
        third = randomNumber()
        renderNumber();
    }

    if (fourth === third || fourth === second || fourth === first) {
        fourth = randomNumber();
        renderNumber();
    }

    let pin = first + " " + second + " " + third + " " + fourth;
    document.getElementById("pin-el").textContent = pin;
}

function copytext(){
    let inputelem = document.createElement("input")
    inputelem.type = "text";
    let getText = document.getElementById("pin-el").textContent
    inputelem.value = getText;
    document.body.appendChild(inputelem);
    inputelem.select();
    document.execCommand('copy');
    document.body.removeChild(inputelem)

    alert("copied");
}