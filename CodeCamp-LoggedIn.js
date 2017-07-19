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



        // followup message

        var newState;
        Slack.postMessageToChannel(channel, "Hello, I'm T.O.M., Technical Operating Memory. ");
        Slack.postMessageToChannel(channel, "Ask me questions like, who will win this competition or what is my life story. ");
         setTimeout(function() {
        if (newState == -1) {
            Slack.postMessageToChannel(channel, "I can even tell you some jokes!");
        }
    }, 500);

        

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
