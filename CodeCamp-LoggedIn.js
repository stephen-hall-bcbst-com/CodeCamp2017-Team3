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

    var newState;
            Slack.postMessageToChannel(channel, "Hello, I'm T.O.M., Technical Operating Memory. ");

         setTimeout(function() {
        if (newState == -1) {
            Slack.postMessageToChannel(channel, "Ask me questions like, who will win this competition or what is my life story. ");
        }
    }, 100);
        
         setTimeout(function() {
        if (newState == -1) {
            Slack.postMessageToChannel(channel, "I can even tell you some jokes!");
        }
    }, 100);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
