module.exports = {init, exit};

function init(commands) {
    console.log("Loaded irc.js");

    commands.newCommand("raw", "irc", "control", (bot,msg)=>{
        bot.send(msg.cargs.join(" "));
    }, "Sends raw IRC data. Usage: 'raw <data>'");

    return module.exports;
}

function exit() {
    console.log("Unloaded irc.js");
}