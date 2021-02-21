const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let newTitles = [];
  tutorials.map(function (tutorial) {
  let titleWords = tutorial.split(" ");
  let newTitle = capitalize(titleWords)
  newTitles.push(newTitle)
  });
  return newTitles;
}

function capitalize(titleWords) {
  let newTitleArray = [];
  titleWords.map(function (word) {
    let newWord = word.charAt(0).toUpperCase() + word.slice(1);
    newTitleArray.push(newWord)    
  });
  return newTitleArray.join(" ")
}

titleCased(tutorials)
