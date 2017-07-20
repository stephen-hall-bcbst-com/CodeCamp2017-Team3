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
        
         var lc = message.toLowerCase();
    
        if (lc.includes('me')) { 
          response = "Do you need emotional support?";
        // what can I ask for
        } else if (lc.includes("list")) {
            response = "Remember things you can ask me include, math problems, life story, favorite color, jokes, and pi";
        // math help
        } else if (lc.includes("math")) {
            response = "you can always ask me math questions in this format: _ + _?";
        } else {
            response = 'With what?';
        }
    // Slack.postMessageToChannel(channelName, 'With what?');
    Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
        },    
    };
