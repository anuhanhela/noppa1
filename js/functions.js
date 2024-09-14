function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById("container").addEventListener("click", function() {
    const diceNumber = rollDice ();

    document.getElementById("dice").src =`./img/${diceNumber}.png`;

});