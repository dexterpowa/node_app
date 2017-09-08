// Check the range between
function checkBetween() {

    let bottom=14;
    let top=90;

    let age=prompt('How old are you?');
    if (!isNaN(age)) {
        if (age >= bottom && age <= top) {
            alert(`${age} is between ${bottom} and ${top}`);
        } else {
            alert(`${age} is outside ${bottom} and ${top}`);
        }
    } else
        alert(`${age} is not a number!`);
}

// Check the range outside
function checkOutside() {

    let bottom=14;
    let top=90;

    let age=prompt('How old are you?');
    if (typeof age === 'integer') {
        if (age < bottom || age > top) {
            alert(age +` is outside ${bottom} and ${top}`);
        } else {
            alert(age +` is between ${bottom} and ${top}`);
        }
    } else
        alert(`${age} is not a number!`);
}