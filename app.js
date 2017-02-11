'use strict';
var score = 0;
var confirmQuiz = confirm('Hello, would you like to take a quiz about me?');
// var question = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven];
// var answer = [answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven];
// var correct = [correctOne, correctTwo, correctThree, correntFour, correctFive, correctSix, correctSeven];
// var incorrect = [incorrectOne, incorrectTwo, incorrectThree, incorrectFour, incorrectFive, incorrectSix, incorrectSeven];
//return here later to continue changing question and answers into an aaray.

if(confirmQuiz) {
  alert('Great! Lets see how well you know Patrick.');
} else {
  alert('Too bad, You are doing it anyway.');
}

//From here down there are 5 prompts with yes or no questions for the user to answer.//
function questionOne() {
  var quizResponseOne = prompt('Please answer with Y or N for the following questions. Does Patrick have a dog?');
  if(quizResponseOne.toUpperCase() === 'N') {
    alert('Awesome! You are correct. Patrick does not currently have a dog.');
    score++;
  } else {
    alert('You got that one wrong. Patrick does not have a dog.');
  }
  console.log(score);
}
function questionTwo() {
  var quizResponseTwo = prompt('Patrick moved to Washington in 2001. Before this did Patrick live in Maine?');
  if(quizResponseTwo.toUpperCase() === 'N') {
    alert('Awesome! You are correct. Before moving to Washington, Patrick spent his childhood in Louisiana. Geaux Tigers!');
    score++;
  } else {
    alert('Too bad. You were wrong. Patrick is not from Maine.');
  }
}
function questionThree(){
  var quizResponseThree = prompt('Is Patricks favorite food lobster?');
  if(quizResponseThree.toUpperCase() === 'Y') {
    alert('Awesome! You are correct.');
    score++;
  } else {
    alert('Too bad. You were wrong.');
  }
}
function questionFour(){
  var quizResponseFour = prompt('Did Patrick used to work for the Forest Service?');
  if(quizResponseFour.toUpperCase() === 'Y') {
    alert('Awesome! You are correct');
    score++;
  } else {
    alert('Too bad. You were wrong.');
  }
}
function questionFive() {
  var quizResponseFive = prompt('Does Patrick have a brother that is also a redhead?');
  if(quizResponseFive.toUpperCase() === 'Y'){
    alert('Awesome! You are correct');
    score++;
  } else {
    alert('Too bad. You were wrong.');
  }
}
console.log(score);
//Below chooses a random number out of 100 and then has user guess that number using 'too high' and 'too low'.
function questionSix() {
  var pushupNumber = Math.floor (Math.random() * 100) + 1;
  for (var i = 0; i < 4; i++){
    var ageGuess = prompt('How many pushups can Patrick do? You have 4 guesses.');
    ageGuess = parseInt(ageGuess, 10);
    console.log(pushupNumber);
    if (ageGuess > pushupNumber){
      alert('Too high.');
    }else if (ageGuess < pushupNumber) {
      alert ('Too low.');
    }else if (ageGuess === pushupNumber){
      alert ('You are correct.');
      score++;
      break;
    }
  }
  alert('Patrick can do ' + pushupNumber + ' pushups! That might be really impressive or not impressive at all. The number was randomly generated!');
}
//Since a random number is used, number of puhhups in variable from 1 to 100

//Return to this setion after you set variable at top of page into an Array.
function questionSeven() {
  var myCars = ['VW Jetta', 'Subaru WRX', 'Ford Explorer'];
  var guessCounter = 1;

  for (var i = 0; i < 6; i++){
    var carGuess = prompt('Patrick has owned 3 cars. Try and guess one of them. You have 6 guesses.');
    if( carGuess === myCars[0] || carGuess === myCars[1] || carGuess === myCars[2]){
      alert ('Congratulations! You correctly guessed a ' + carGuess + '. That is one of the cars Patrick has owned. ');
      score++;
      break;
    } else {
      alert('No, Patrick never owned a ' + carGuess + ' This is guess ' + guessCounter + ' out of your 6 guesses.');
      guessCounter++;
    }
  }
  alert ('Patrick has owned a VW Jetta, a Ford Explorer, and currently owns a Subaru WRX.');
}

//function test
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
alert('You got ' + score + ' out of 6 qustions right.' );
