let hedgehogContainer = document.querySelector('.flex-box');
let hedgehogNodes = []; // the array of hedgehogs
let scoreCount = 1;

// Adding hedgehogs
let submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (hedgehogNodes.length >= 1) { // remove the hedgehogs from DOM
        for (let i = 0; i < hedgehogNodes.length; i++) {
            hedgehogContainer.removeChild(hedgehogNodes[i]);
        }
        hedgehogNodes = []; // clear the hedgehog array
    }


    // Collecting hedgehogs
    let numberOfHogsField = document.getElementById('numOfHogs');
    let number = numberOfHogsField.value;
    console.log(number);
    while (number > 0) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.setAttribute('id', 'hh-' + number.toString()); // creating unique IDs
        hedgehogNodes.push(box);
        hedgehogContainer.appendChild(box);
        box.addEventListener('click', function () {
            let scoreElement = document.getElementById('hedgehogScore');
            scoreElement.innerHTML = 'You collected ' + scoreCount + ' hedgehogs!';
            box.remove();
            let index = hedgehogNodes.indexOf(this);
            hedgehogNodes.splice(index, 1);
            console.log("The array length is: " + hedgehogNodes.length);
            scoreCount = scoreCount + 1;

            let wonMessage = document.getElementById('won');
            if (hedgehogNodes.length < 1) {
                wonMessage.style.display = "block";
            }

        });
        number--;
    }
});



function moveHogs() {

}