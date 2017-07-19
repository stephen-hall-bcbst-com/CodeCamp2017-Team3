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
       var response;
        Slack.postMessageToChannel(channelName, 'Understandable have a nice day.');
         var c = message.tolowercase();

        Slack.postMessageToChannel(channelName, 

        if (c.includes('clothing')) {
            response = "I like dark colors,makes it harder for people to see me.";
        }

        if (c.includes('+')) {
            response = "Get a calculator";
        }

        if (c.includes('hello')) {
            response = "hi";
        }
        Slack.postMessageToChannel(channelName, response);

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
