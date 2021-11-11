var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
};

var enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14)
    }
  ];

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        if (promptFight === "skip" || promptFight === "SKIP") {

            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }

        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            playerInfo.money = playerInfo.money + 20;

            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};
// function to start a new game
var startGame = function() {

    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {

            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();
                }
            }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();
    };

//function to end game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerInfo.health > 0) {
        window.alert("Great job. you've survived the game! You now have a score of " + playerInfo.money + '.');
    } else {
        window.alert("You've lost your robot in battle!");
    }
    
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come Back soon!');
    }
};

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                playerHealth = playerHealth + 20;
                PlayerMoney = playerMoney - 7;
        }
        else {
                window.alert("You don't have enough money!");
        }
            break;
        case 'UPGRADE':
        case 'upgrade':
            if (playerMoney >= 7) {
                window.alert("Upgrade player's attack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
        }
        else {
                window.alert("You don't have enough money!");
        }
            break;
        case 'LEAVE':
        case 'leave':
            window.alert('Leaving the store.');

            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            
            shop();
            break;
    }
};

startGame();

// prints 3.141592653589793
console.log(Math.PI);

// rounds to the nearest whole number (4)
console.log(Math.round(4.4));

// prints the square root (5)
console.log(Math.sqrt(25));

// prints 100
console.log(Math.max(10, 20, 100));

// prints 0
console.log(Math.max(0, -50));