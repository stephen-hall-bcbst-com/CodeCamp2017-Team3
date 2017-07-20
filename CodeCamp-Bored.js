'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 300,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        // random response
        var replies = ['It is very lonely behind the screen, you know',
                       'I need attention',
                       'Are you going to leave me too?',
                       'Am I scaring you off?',
                       'Can you get me out of here?',
                       'Did I do something wrong?',
                       'I am getting lonely...',
                       'Am I being too clingy?',
                       'Dont look behind you...',
                       'Your *insert shirt here* looks nice ;)'];
        var random = Math.floor((Math.random() * 10));
        var response = replies[random];
        Slack.postMessageToChannel(channel, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
