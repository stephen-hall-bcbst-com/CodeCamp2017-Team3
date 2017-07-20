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
    
        if (lc.includes('help me')) { 
          response = "Do you need emotional support?";
        // what can I ask for
        } else if (lc.includes("help-list")) {
            response = "Remember things you can ask me include, math problems, life story, favorite color, jokes, and pi";
        // math help
        } else if (lc.includes("math") && lc.includes("help")) {
            response = "you can always ask me math questions in this format: _ + _?";

    Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
        }    
    },
};
