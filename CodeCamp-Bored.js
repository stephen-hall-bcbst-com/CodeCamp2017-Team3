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

        // random result generator
        Math.floor((Math.random() * 10) + 1 );
        var response = (response);
        if (Math.floor = 1) {
        Slack.postMessageToChannel(channel, 'it is very lonely behind the screen, you know?');
    } else if (Math.floor = 2) {
        Slack.postMessageToChannel(channel, 'I need attention :(');
    } else if (Math.floor = 3) {
        Slack.postMessageToChannel(channel, 'Are you going to leave me too?');
    } else if (Math.floor = 4) {
        Slack.postMessageToChannel(channel, 'Am I scaring you off?');
    } else if (Math.floor = 5) {
        Slack.postMessageToChannel(channel, 'Can you get me out of here?');
    }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
