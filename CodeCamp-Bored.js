'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 100,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'it is very lonely behind the screen, you know?');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
