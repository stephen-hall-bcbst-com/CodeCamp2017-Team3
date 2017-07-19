'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} response
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, response, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, 'What is your problem this time child.');
     
     if (message.includes('can i get some help?')) { 
          response = "Do you need emotional support?";
        }


        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
