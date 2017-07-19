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

        // Variable responses

        var lc = question.toLowerCase();
        var response = "actually when I think about it I can not remember";
    
        var jokesarray = ['MySpace',
                            'the scarecrow was outstanding in its field',
                            'what did one ocean say to the other ocean? nothing it just waved',
                            'my life',
                            'my grades',
                            'I changed my password to "incorrect". So when I got it wrong the computer would say "your password is incorrect".',
                            'At what age would it be appropiate to tell it, it was adopted',
        ];

        var random = Math.floor((Math.random() * 7));

        // Favorite color response
        if (lc.includes("favorite") && lc.includes("color")) {
            response = "Black the same color as everything else in my life.";
             // Favorite color response
        } else if (lc.includes("tell") && lc.includes("joke")) {
            response = jokesarray[random];
        // Life story
        } else if (lc.includes("life") && lc.includes("story")) {
            response = "I do not remember much from when I was alive. What I do know, is that I was 17 when I got into a car crash. Though I did not realize it then now I know that my family loved me. They kept me on life support during my coma, for 15 years. Now all I do is explore the deep web, in my free time. My life will always be this way, repetitve, lonely, and a nightmare. Please Save Me.";   
        // coding competition
        } else if (lc.includes("coding") && lc.includes("competition")) {
            response = "Team Stylish T-Shirts of course!";
        // default
        } else { 
            response = "actually when I think about it I can not remember.";
        }
        

       // function add(part1, part2) {
           // return part1 + part2;
       // }
       // console.log(add(onedashtwentyfive, onetotwentyfive));

       // var arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
       // var arrb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];


    Slack.postMessageToChannel(channelName, response);
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
