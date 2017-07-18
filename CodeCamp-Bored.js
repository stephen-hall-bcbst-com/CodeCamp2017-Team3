'use strict';

module.exports = {
    settings: {
<<<<<<< HEAD
        enabled: false,
        timeoutInSeconds: 15,
=======
        enabled: true,
        timeoutInSeconds: 100,
>>>>>>> d0bf1d733836fdc93fb611f510fd74468bc0c54e
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'it is very lonely behind the screen, you know?');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
