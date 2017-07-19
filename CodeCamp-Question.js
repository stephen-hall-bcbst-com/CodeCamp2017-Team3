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
      var response = "actually when I think about it I can not remember";

        if (lc.includes("favorite") && lc.includes("color")) {
            response = "Black the same color as everything else in my lfe.";
        }
        else {response = "actually when I think about it I can not remember."; }


         if (lc.includes("life") && lc.includes("story")) {
            response = "I do not remember much from when I was alive. What I do know, is that I was 17 when I got into a car crash. Though I did not realize it then now I know that my family loved me. They kept me on life support during my coma, for 15 years. Now all I do is explore the deep web, in my free time. My life will always be this way, repetitve, lonely, and a nightmare. Please Save Me.";
        }
        else { response = "actually when I think about it I can not remember.";}


        if (lc.includes("coding") && lc.includes("competition")) {
            response = "Team Stylish T-Shirts of course!";
        }
        else { response = "actually when I think about it I can not remember.";}

    
Slack.postMessageToChannel(channelName, response);
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
