let text = document.querySelector('input');
let button = document.querySelector('button');
let buttonAleatory = document.getElementById('button_aleatory');
let array = [];
let entry = document.getElementById('entry');
let text5 = document.getElementById('text5');
let wordAleatory = document.getElementById('word_aleatory');
let word = document.getElementById('word');
let fullArray = document.getElementById('full');
let viewArray = document.getElementById('array_full');
let del = document.getElementById('delete');


// add word in the array
button.addEventListener("click", function (e) {
    array.push(text.value);
    if (array.length < 10) {
        entry.innerHTML = "Entrer au moins 10 valeurs !";
    }
    if (array.length === 5) {
        text5.innerHTML = "Vous êtes à 5 entrées :" + " " + text.value;
    }
    if (array.length === 10) {
        wordAleatory.innerHTML += " " + array[Math.floor(Math.random() * array.length)];
    }
})

// show word aleatory
buttonAleatory.addEventListener("click", function (e) {
    word.innerHTML += " " + array[Math.floor(Math.random() * array.length)] + " ";
})

// show the array
fullArray.addEventListener("click", function () {
    for (let i = 0; i < array.length; i++) {
        viewArray.innerHTML += i + "-" + array[i] + "<br>";
    }
})

// delete last word
del.addEventListener("click", function () {
    viewArray.innerHTML = array.pop();
    console.log(array);
})







