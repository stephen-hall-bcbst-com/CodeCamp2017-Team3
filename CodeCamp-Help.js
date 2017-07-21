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
<<<<<<< HEAD
        
=======
        // emotional help response
>>>>>>> 2872c851124da3930b1f913b3466d0aef6e4eb09
        if (lc.includes('me')) { 
          response = "Do you need emotional support?";
        // You can ask for jokes,help with math problems,and favorite colors.
        } else if (lc.includes("list")) {
<<<<<<< HEAD
            response = "Remember things you can ask me include, math problems, ";
            "life story, favorite color, jokes, and pi";
        // What format of math T.O.M. can use and how he can help.
=======
            response = "Remember things you can ask me include, math problems, life story, favorite color, jokes, pi, etc.";
        // math help
>>>>>>> 2872c851124da3930b1f913b3466d0aef6e4eb09
        } else if (lc.includes("math")) {
            response = "you can always ask me math questions in this format: a + b?";
        } else {
            response = 'with what?';
        }
        // 
    Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
        },    
    };
