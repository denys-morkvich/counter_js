

let counter = 0

if (counter > 10) {
    counter = 0
}

function increment() {
    counter = counter + 1
    console.log(counter)
    console.log("The button was clicked")
    document.getElementById("counter").innerText = counter;
    if (counter > 99) {
        counter = 0;
    }
    document.getElementById("counter-display").innerText = counter;

}


