"use strict"
function accessAllowed() {

let accessAllowed;
let ok = false;
let age;
let question = 'Am i cleared to buy drinks legally?';
let result;

do {
	age = prompt(question + '\nYour age:');
	ok = age > 0;
	if (!ok)
		alert('Invalid age!');
	else {
		if (age > 21) {
			accessAllowed = true;
			result = 'Yay, buy some beer!';
		}
		else {
			accessAllowed = false;
			result = 'Not yet';
		}
		alert('your age: ' + age + ',' + accessAllowed + '-' + result);
	}
} while (!ok);
}
// A simple page
function confirmName () {

let ok;
let response;
let username;

do {
	username = prompt('Enter your username!');
	ok = username.length > 2;

	if (!ok) {
		alert('Not a valid username!');
	} else {
		response = confirm('Given username is: ' + username + '\nAre you sure?');
	}
} while (!ok || response == false);

alert('See you ' + username + '!');
}
