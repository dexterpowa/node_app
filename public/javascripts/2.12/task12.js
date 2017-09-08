// Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10

function displayEvenNumbers() {

    let field=document.getElementById("numbers");
    let array=[""];

    for (var i = 2; i <= 10; i++) {
        if (i %2==0){
            array.push(i);
        }
    }
    field.innerHTML='Array: ' + array;
}