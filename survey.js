const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = {
  name: '',
  activity: '',
  listen: '',
  favMeal: '',
  eat: '',
  sport: '',
  superPower: '',
};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  "What's your favourite thing to eat for that meal?",
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!',
];

const askQuestion = (ques, cb) => {
  rl.question(ques, (ans) => {
    cb(ans);
  });
};

const askNextQuestion = (index) => {
  if (index === questions.length) {
    rl.close();
    displayResult();
  } else {
    askQuestion(questions[index], (ans) => {
      result[Object.keys(result)[index]] = ans;
      askNextQuestion(index + 1);
    });
  }
};

const displayResult = () => {
  console.log(
    `${result.name} loves listening to ${result.listen} while ${result.activity}, devouring ${result.eat} for ${result.favMeal}, prefers ${result.sport} over any other sport, and is amazing at ${result.superPower}.`
  );
};

askNextQuestion(0);
