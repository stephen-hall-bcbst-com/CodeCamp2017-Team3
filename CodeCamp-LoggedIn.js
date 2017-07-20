'use strict';

module.exports = {
    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    logged_in: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
    
        // introduction
        var memory = require('./CodeCamp-Memory');
        Slack.postMessageToChannel(channel, "Hello, I'm T.O.M., Technical Operating Memory. What is your name?");
            memory.lastQuestion = 'name';
        // pause between messages
        setTimeout(function() {
                Slack.postMessageToChannel(channel, "Ask me questions like, who will win this competition or what is my life story. ");
        }, 2000);

        // pause between messages    
        setTimeout(function() {
                Slack.postMessageToChannel(channel, "I can even tell you some jokes!");
        }, 4000);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
