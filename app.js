let flex = document.querySelector('.flex-box');
let allBoxes = []; // the array of hedgehogs

// Adding hedgehogs
let submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (allBoxes.length >= 1) {
        // Removing hedgehogs
        for (let i = 0, len = allBoxes.length; i < len; i++) {
            allBoxes[i].remove();
            console.log(allBoxes[i] + " was removed.");
        }
    }

    let numberOfHogsField = document.getElementById('numOfHogs');
    let number = numberOfHogsField.value;

    while (number > 0) {
        let box = document.createElement('div');
        allBoxes.push(box);
        box.setAttribute('class', 'box');
        flex.appendChild(box);
        number--
    }
});




