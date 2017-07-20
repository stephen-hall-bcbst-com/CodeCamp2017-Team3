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
       var response;
        // Slack.postMessageToChannel(channelName, "You said something?");
         var lc = message.tolowercase();
         var Uc = message.toUpperCase();
        response = " G";
        
        if (lc.includes("music") && lc.includes("favorite")) {
            response = "look up the first daredevil movie's soundtrack";
        } if (lc.includes("clothing") && lc.includes('type')) {
            response = "I like dark colors,makes it harder for people to see me.";
        } if (lc.includes('+')) {
            response = "Get a calculator";
        } if (Uc.includes("HEY!!!")) {
            response = "Can you relax diaper baby!!!";
        } if (lc.includes("screw you bro")) {
            response = "you can die,I can't,get gud";
        } if (lc.includes("hello")) {
            response = "hey...";
        }
         Slack.postMessageToChannel(channelName, response);
         Slack.postMessageToChannel(channelName, "You said something?");
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
 },
};
