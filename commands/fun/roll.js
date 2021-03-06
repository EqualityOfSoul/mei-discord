const Commando = require("discord.js-commando");

class RollCommand extends Commando.Command {

  constructor(client){

    super(client, {
      name: "roll",
      group: "fun",
      memberName: "roll",
      description: "Rolls a die, values are at random from 1-6",
    });

  }

  run(message) {

    var roll = Math.floor(Math.random() * 6) + 1;
    message.reply("You rolled a " + roll + "!");

  }

}

module.exports = RollCommand;
