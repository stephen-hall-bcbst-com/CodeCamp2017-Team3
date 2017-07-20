'use strict';
module.exports = {
    /**
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    shutdown_received: function(channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        // shutdown message
        Slack.postMessageToChannel(channelName, "Farewell, it appears my work here is done.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
