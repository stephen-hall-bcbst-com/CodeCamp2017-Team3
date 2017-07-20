'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, 'What is your problem this time child.');
//if (c.includes('can i get some help?')) {response = "Do you need emotional support?";
//}

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
