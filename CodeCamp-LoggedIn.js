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
    
        Slack.postMessageToChannel(channel, "Hello, I'm T.O.M., Technical Operating Memory. ");

        setTimeout(function() {
                Slack.postMessageToChannel(channel, "Ask me questions like, who will win this competition or what is my life story. ");
        }, 1000);
            
        setTimeout(function() {
                Slack.postMessageToChannel(channel, "I can even tell you some jokes!");
        }, 2000);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
