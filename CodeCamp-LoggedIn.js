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

        // split message into variables
        var message1 = "Hello, I'm T.O.M., Technical Operating Memory. ";
        var message2 = "Thank you for taking time out of your day to talk to me. ";
        var message3 = "You can ask me things like my life story or who will win this competition. ";

    // reconstruct message
    message1.concat(message2 + message3);

        // followup message
        Slack.postMessageToChannel(channel, "I can even tell you some jokes!");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
