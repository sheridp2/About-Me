'use strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz about me?');

if(confirmQuiz) {
  console.log('Great! Lets see how well you know Patrick.');
} else {
  console.log('Too bad, You are doing it anyway.');
}
//From here down there are 5 prompts with yes or no questions for the user to answer.//

var quizResponseOne = prompt('Please answer with Y or N for the following questions. Does Patrick have a dog?');
if(quizResponseOne.toUpperCase() === 'N') {
  console.log('Awesome! You are correct. Patrick does not currently have a dog.');
} else {
  console.log('You got that one wrong. Patrick does not have a dog.');
}

var quizResponseTwo = prompt('Patrick moved to Washington in 2001. Before this did Patrick live in Maine?');
if(quizResponseTwo.toUpperCase() === 'N') {
  console.log('Awesome! You are correct. Before moving to Washington, Patrick spent his childhood in Louisiana. Geaux Tigers!');
} else {
  console.log('Too bad. You were wrong. Patrick is not from Maine.');
}

var quizResponseThree = prompt('Is Patricks favorite food lobster?');
if(quizResponseThree.toUpperCase() === 'Y') {
  console.log('Awesome! You are correct.');
} else {
  console.log('Too bad. You were wrong.');
}

var quizResponseFour = prompt('Please answer with Y or N. Did Patrick used to work for the Forest Service?');
if(quizResponseFour.toUpperCase() === 'Y') {
  console.log('Awesome! You are correct');
} else {
  console.log('Too bad. You were wrong.');

}

var quizResponseFive = prompt('Does Patrick have a brother that is also a redhead?');
if(quizResponseFive.toUpperCase() === 'Y') {
  console.log('Awesome! You are correct');
} else {
  console.log('Too bad. You were wrong.');
}
