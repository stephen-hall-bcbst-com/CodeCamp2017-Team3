'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
        var response = "You said something?";
        var memory = require('./CodeCamp-Memory');
        var helper = require('./helpers');
        var lc = message.toLowerCase();


        if (memory.lastQuestion == 'name') {
            memory.theBrain.name = message;
            memory.lastQuestion = '';
            response = 'that name is okay, I guess...';
        }
        
        // music response
        if (lc.includes('music')) {
            response = "look up the first daredevil movie's soundtrack, " + memory.theBrain.name + ".";
        } 
        // clothing type response
        if (lc.includes("clothing") && lc.includes("type")) {
            response = "I like dark colors, " + memory.theBrain.name + ", makes it harder for people to see me.";
        } else {
        // hello response
        if (lc.includes('hello') || lc.includes('hi') || lc.includes('hey')) {
            response = "hey..." + memory.theBrain.name;
            }
        } 
        // Thank you response
        if (lc.includes("thank") && lc.includes("you")) {
            response = "that was the first time anyone has ever told me that";
        }
        // Sorry response
         if (lc.includes('sorry')) {
            response = "Don't be.";
        }

        // jokes
        var jokesarray = ['MySpace',
                            'the scarecrow was outstanding in its field',
                            'what did one ocean say to the other ocean? nothing it just waved',
                            'my life',
                            'my grades',
                            'I changed my password to "incorrect". So when I got it wrong the computer would say "your password is incorrect".',
                            'At what age would it be appropiate to tell my dog, it was adopted',
                            'What do you call a fake noodle? An impasta',
                            'What do you call a alligator in a vest? An investigator',
                            'What is the difference inbetween a fish and a guitar? You can not tuna fish',
                            'How many tickles does it take to make a octopus laugh? TEN-Tickles',
                            'What do you call a pile of kittens? A meowtain',
                            'Why did the picture go to jail? Because it was framed',
        ];
        
        if (lc.includes("tell") && lc.includes("joke")) {
            response = helper.phraseAtRandom(jokesarray);
        }

        Slack.postMessageToChannel(channelName, response);

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
