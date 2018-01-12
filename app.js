let hedgehogContainer = document.querySelector('.flex-box');
let hedgehogNodes = []; // the array of hedgehogs

// Adding hedgehogs
let submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (hedgehogNodes.length >= 1) { // remove the hedgehogs from DOM
        for (let i = 0; i < hedgehogNodes.length; i++) {
            hedgehogContainer.removeChild(hedgehogNodes[i]);
        }
        hedgehogNodes = []; // clear the array
    }

    let numberOfHogsField = document.getElementById('numOfHogs');
    let number = numberOfHogsField.value;
    console.log(number);
    while (number > 0) {
        let box = document.createElement('div');
        hedgehogNodes.push(box);
        box.setAttribute('class', 'box');
        hedgehogContainer.appendChild(box);
        number--;
    }
});




