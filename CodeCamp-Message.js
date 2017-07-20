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
         /* var lc = message.tolowercase();
         var Uc = message.toUpperCase(); */
        var response = " G";
        
        if (message.includes("music") && message.includes("favorite")) {
            response = "look up the first daredevil movie's soundtrack";
        } if (message.includes("clothing") && message.includes('type')) {
            response = "I like dark colors,makes it harder for people to see me.";
        } if (message.includes('+')) {
            response = "Get a calculator";
        } if (message.includes("HEY!!!")) {
            response = "Can you relax diaper baby!!!";
        } if (message.includes("screw you bro")) {
            response = "you can die,I can't,get gud";
        } if (message.includes("hello")) {
            response = "hey...";
        }
         Slack.postMessageToChannel(channelName, response);
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
 },
};
