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

<<<<<<< HEAD
        Slack.postMessageToChannel(channelName, 'Understandable have a nice day.');
=======
        if (c.includes('music')); {
            response = "look up the first daredevil movie's soundtrack"
        }
>>>>>>> c4d3e74dd896624ff0404263c1ef8c6d76e583cb

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
