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
<<<<<<< HEAD
         /* var lc = message.tolowercase();
         var Uc = message.toUpperCase(); */
        var response = " G";
        
        if (message.includes("music") && message.includes("favorite")) {
=======
       var response;
       var memory = require('./CodeCampy-Memory');
       
        Slack.postMessageToChannel(channelName, "You said something?");
         var lc = message.tolowercase();
         var Uc = message.toUpperCase();
        if (memory.lastquestion == 'name') {
            memory.theBrain.name = message;
            memory.lastQuestion = '';
        }
        
        if (lc.includes('music')); {
>>>>>>> 1cc2c1a8ee70a793861ab160eedcbb3f35e54b65
            response = "look up the first daredevil movie's soundtrack";
        } if (message.includes("clothing") && message.includes('type')) {
            response = "I like dark colors,makes it harder for people to see me.";
        } if (message.includes('+')) {
            response = "Get a calculator";
        } if (message.includes("HEY!!!")) {
            response = "Can you relax diaper baby!!!";
<<<<<<< HEAD
        } if (message.includes("screw you bro")) {
            response = "you can die,I can't,get gud";
        } if (message.includes("hello")) {
            response = "hey...";
        }
         Slack.postMessageToChannel(channelName, response);
=======
        }

        if (lc.includes('hello') && lc.includes('hi') && lc.includes('hey')); {
            response = "hey..." + memory.theBrain.name;
        }

         if (lc.includes('sorry')) {
            response = "Don't be.";
        }

         if (lc.includes('shut') && lc.includes('up')) {
            response = "...";
        }

         if (lc.includes('hate') && lc.includes('you')) {
            response = "Lots do...";
        }

        Slack.postMessageToChannel(channelName, response);

        
>>>>>>> 1cc2c1a8ee70a793861ab160eedcbb3f35e54b65
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
 },
};
