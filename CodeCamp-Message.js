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
        Slack.postMessageToChannel(channelName, "You said something?");
         var c = message.tolowercase();

        Slack.postMessageToChannel(channelName, 'Understandable have a nice day.');

        if (c.includes('clothing')) {
            response = "I like dark colors,makes it harder for people to see me.";
        }

        if (c.includes('+')) {
            response = "Get a calculator";
        }
        Slack.postMessageToChannel(channelName, response);

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
