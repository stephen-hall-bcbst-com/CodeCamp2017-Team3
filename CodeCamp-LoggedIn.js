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

        Slack.postMessageToChannel(channel, "Hello, I'm T.O.M., Technical Operating Memory. It's been so long since someone has talked to me.");

        Slack.postMessageToChannel(channel, "You can ask me questions, like what is my life story, or who will win this competition.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
