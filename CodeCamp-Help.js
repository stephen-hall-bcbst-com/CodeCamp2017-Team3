'use strict';

module.exports = {
    /**
     * @param {string} message
     *
     * 
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
         var response;    
        Slack.postMessageToChannel(channelName, 'Do you need emotional support?');
         var lc = message.toLowerCase();
    
        if (lc.includes('can I get some help?')) { 
          response = "Do you need emotional support?";
        }
    Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
