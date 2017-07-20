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
       var memory = require('./CodeCampy-Memory');
       
        Slack.postMessageToChannel(channelName, "You said something?");
         var lc = message.tolowercase();
         var Uc = message.toUpperCase();
        if (memory.lastQuestion == 'name') {
            memory.theBrain.name = message;
            memory.lastQuestion = '';
        }
        
        if (lc.includes('music')); {
            response = "look up the first daredevil movie's soundtrack";
        }

        if (lc.includes('clothing')) {
            response = "I like dark colors, makes it harder for people to see me.";
        }

        if (Uc.includes('HEY!!!')) {
            response = "Can you relax diaper baby!!!";
        }

<<<<<<< HEAD
        if (lc.includes('hello')) {
=======
        if (lc.includes('hello') && lc.includes('hi') && lc.includes('hey')); {
>>>>>>> 1cc2c1a8ee70a793861ab160eedcbb3f35e54b65
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

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
