








document.addEventListener('DOMContentLoaded', function() {
  var wordContainer = document.querySelector('.word-container');
  var alphabetInputs = document.querySelectorAll('.alphabet-input');
  var messageContainer = document.querySelector('.message-container');
  var message = document.querySelector('.message');

  var wordList = ['CS', 'COMPUTER', 'JAVASCRIPT', 'JS', 'PROGRAMMING'];
  var word = getRandomWord(wordList); // Choose a random word from the list
  var guessedLetters = [];

  // Initialize the word display
  for (var i = 0; i < word.length; i++) {
    var letterElement = document.createElement('span');
    letterElement.classList.add('word-letter');
    letterElement.textContent = '_';
    wordContainer.appendChild(letterElement);
  }

  // Handle alphabet input click
  alphabetInputs.forEach(function(input) {
    input.addEventListener('click', function() {
      var guess = input.value.toUpperCase();

      if (guessedLetters.includes(guess)) {
        showMessage('You already guessed that letter!');
        return;
      }

      guessedLetters.push(guess);

      var correctGuess = false;

      // Update the word display with correctly guessed letter
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          wordContainer.children[i].textContent = guess;
          correctGuess = true;
        }
      }

      if (correctGuess) {
        showMessage('Correct guess!');
      } else {
        showMessage('Incorrect guess! You have '+(5-guessedLetters.length)+" tries left");
        if (guessedLetters.length >= 5) {
          showMessage('Game over! You lost! The page will reload after 3 second ');
          setTimeout(function() {
            location.reload(); // Reload the page after 5 incorrect guesses
          }, 3000);
        }
      }

      checkGameStatus();
    });
  });

  // Show a message in the message container
  function showMessage(msg) {
    message.textContent = msg;
    messageContainer.style.display = 'block';
  }

  // Check the game status for win
  function checkGameStatus() {
    var wordLetters = wordContainer.querySelectorAll('.word-letter');
    var correctLetters = 0;

    for (var i = 0; i < wordLetters.length; i++) {
      if (wordLetters[i].textContent !== '_') {
        correctLetters++;
      }
    }

    if (correctLetters === wordLetters.length) {
      showMessage('Congratulations! You won!');
    }
  }

  // Get a random word from the word list
  function getRandomWord(wordList) {
    var randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toUpperCase();
  }
});