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
    
        var lc = message.toLowerCase();

/*
        if (memory.lastQuestion == 'name') {
            memory.theBrain.name = message;
            memory.lastQuestion = '';
        }
*/        
        if (lc.includes('music')) {
            response = "look up the first daredevil movie's soundtrack";
        } 
        
        if (lc.includes("clothing") && lc.includes("type")) {
            response = "i like dark colors, makes it harder for people to see me.";
        } else {
            if (lc.includes('hello') || lc.includes('hi') || lc.includes('hey')) {
                response = "hey..." + memory.theBrain.name;
            }
        } 
        if (lc.includes("thank") && lc.includes("you")) {
            response = "that was the first time anyone has ever told me that";
        }
         if (lc.includes('sorry')) {
            response = "Don't be.";
        }
         if (lc.includes('shut') && lc.includes('up')) {
            response = "...";
        }
         if (lc.includes('hate') && lc.includes('you')) {
            response = "Lots do...";
        }
        Slack.postMessageToChannel(channelName, response);

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
 },
};
