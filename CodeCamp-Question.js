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

        var lc = question.toLowerCase();
        var response = "Sorry, it has been so long since I was alive.";

        if (lc.includes("favorite") && lc.includes("color")) {
            response = "Black the same color as everything else in my lfe.";
        }

        Slack.postMessageToChannel(channelName, response);




        Slack.postMessageToChannel(channelName, "Question received.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
