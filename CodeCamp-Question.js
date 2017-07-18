'use strict';
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

         Slack.postMessageToChannel(channelName, "Question received.");
        var lc = question.toLowerCase();
      

        if (lc.includes("favorite") && lc.includes("color")) {
            response = "Black the same color as everything else in my lfe.";
        }
        else { response = "Sorry, it has been so long since I was alive.";}
    }

       
        Slack.postMessageToChannel(channel, response)




       

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
