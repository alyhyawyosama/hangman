import random
def hangman():
    words = [
    "elephant",
    "giraffe",
    "lion",
    "tiger",
    "zebra",
    "monkey",
    "gorilla",
    "hippopotamus",
    "rhinoceros",
    "kangaroo",
    "koala",
    "panda"]
    word = random.choice(words)
    guessed_letters = []
    tries = 5
    print("The animal name consists of ", len(word), "letters.")
    print("_ " * len(word))
    while tries > 0:
        guess = input("Guess a letter: ").lower()

        if len(guess) != 1:
            print("Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You've already guessed that letter.")
            continue

        if guess not in word:
            tries -= 1
            print("Wrong guess! You have", tries, "tries left.")

        guessed_letters.append(guess)

        word_progress = ""
        for letter in word:
            if letter in guessed_letters:
                word_progress += letter + " "
            else:
                word_progress += "_ "

        print(word_progress)
        
        if "_" not in word_progress:
            print("Congratulations! You found the word:", word)
            break

    if tries == 0:
        print("Game over! The word was", word)

hangman()