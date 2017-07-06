"use strict"
$(document).ready(function(){
// TOOLTIP
    $('[data-toggle="tooltip"]').tooltip({
		title: "Show code",
		delay: 300,
		animation: true,
		placement: "right"
	});
});

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

// 1: if (a string with zero)
function stringWithZero() {

	if ("0") {
		alert( 'Hello' );
	}
}

// 2: The name of JavaScript
function nameOfJS() {

let question = prompt('What is the “official” name of JavaScript?');
if (question == 'ECMAScript')
	alert('Right!');
else
	alert('Didn’t know? ECMAScript!');
}

// 3: Show the sign
function showSign() {

let answer = prompt('Type in a number!','your number');

if (answer > 0) {
	alert(1)
}
else if (answer < 0) {
	alert(-1);
}
else
	alert(0);
}

// // 4: Check login
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
function checkLogin() {
let adminPass = 'TheMaster';
let adminUser = 'Admin';

let userName = prompt('Username:');
if (userName == adminUser) {
	let password = prompt('Password:');
	if (password == '' ||password == null)
		alert('Canceled.')
	if (password == adminPass)
		alert('Welcome ' + userName + '!');
	else
		alert('Wrong password!');
}
else
	alert('I don\'t know you.');
}

// // 5: Rewrite 'if' into '?'
// let message;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
function ternary(message) {
message = 'Is the sum > 4?';
let a = prompt('A: ');
let b = prompt('B: ');
let result = a+b;
let val = (a + b < 4) ? alert(message + `\n${a}+${b}:=${result}` +'\nBelow'):alert(message + `\n${a}+${b}=${result}` +'\nOver');
}

// 6: Rewrite 'if..else' into '?'
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
function ternary2() {
let login = prompt('Log in');
let message = (login == 'Employee') ? 'Hello' :
	(login == 'Director') ? 'Greetings' :
	(login == '') ? 'No login' :
	'';
}
