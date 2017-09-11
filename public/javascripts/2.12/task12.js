// Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10

function displayEvenNumbers() {

    let field=document.getElementById("result-id-0");
    let array=[""];

    for (var i = 2; i <= 10; i++) {
        if (i %2==0) {
            array.push(i);
        }
    }
    console.log('Array items: ' + array);
    field.innerHTML='Array: ' + array.join(" ");
}

// Replace "for" with "while"
// for (let i = 0; i < 3; i++) {
//         alert( `number ${i}!` );
//     }

function replace() {

    let index=0;

    while (index < 3) {
        alert( `number ${index}!` );
        index++;
    }
}

// Repeat until the input is correct

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask him to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

