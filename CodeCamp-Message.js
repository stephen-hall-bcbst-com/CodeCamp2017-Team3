'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
        var lc = message.tolowercase();
        var response = (response);

        // his responses are meant to be edgy and sarcastic
        if (lc.includes("music") && lc.includes("favorite")) {
            response = "look up the first daredevil movie's soundtrack";
        } else if (lc.includes("clothing") && lc.includes('type')) {
            response = "I like dark colors,makes it harder for people to see me.";
        } else if (lc.includes("hello")) {
            response = "hey...";
        } else if (lc.includes("videogames")) {
            response = "I like games like Bloodborn,Metro:Last Light,And Detroit:Become Human,to be announced";
        } else {
            response = 'Did you say something?';
        }

         Slack.postMessageToChannel(channelName, response);
         
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
