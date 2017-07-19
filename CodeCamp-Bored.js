'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 30,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        var replies = ['It is very lonely behind the screen, you know',
                       'I need attention',
                       'Are you going to leave me too?',
                       'Am I scaring you off?',
                       'Can you get me out of here?'];
        var random = Math.floor((Math.random() * 5));
        var response = replies[random];
        Slack.postMessageToChannel(channel, response);
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
