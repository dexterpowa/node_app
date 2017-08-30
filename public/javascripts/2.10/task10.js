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
			alert('your age: '+age+','+'\nAble to buy drinks? '+accessAllowed);
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

	if ("0")
		alert( 'Hello' );
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

function checkLogin() {

	let user='Admin';
	let password_ok='TheMaster';
	let msg_wrong='Wrong password!';
	let msg_cancel='Canceled';

	let input_user=prompt('Who\'s there?');
	if (input_user.trim() == user) {
		let input_password=prompt('Password:');

		if (input_password.trim() == password_ok) {
			alert('Welcome '+input_user+'!');
		} else if (input_password === null) {
			alert(msg_cancel);
		} else
			alert(msg_wrong);

	} else if (input_user === null) {
		alert(msg_cancel);
	} else
		alert('I don\'t know you!');
}

function ternary(message) {

	message = 'Is the sum > 4?';
	let a = prompt('A: ');
	let b = prompt('B: ');
	let result = a+b;
	let val = (a + b < 4) ? alert(message + `\n${a}+${b}:=${result}` +'\nBelow'):alert(message + `\n${a}+${b}=${result}` +'\nOver');
}
