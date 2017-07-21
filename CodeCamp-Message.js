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
        // his responses are meant to be edgy and sarcastic
        if (message.includes("music") && message.includes("favorite")) {
            response = "look up the first daredevil movie's soundtrack";
        } if (message.includes("clothing") && message.includes('type')) {
            response = "I like dark colors,makes it harder for people to see me.";
        } if (message.includes("screw you bro")) {
            response = "you can die,I can't,get gud";
        } if (message.includes("hello")) {
            response = "hey...";
        } if (message.includes("videogames")) {
            response = "I like games like Bloodborn,Metro:Last Light,And Detroit:Become Human,to be announced";
        }

         // jokes
         if (lc.includes("tell") && lc.includes("joke")) {
            response = jokesarray[random];
         Slack.postMessageToChannel(channelName, response);

         var jokesarray = ['MySpace',
                            'the scarecrow was outstanding in its field',
                            'what did one ocean say to the other ocean? nothing it just waved',
                            'my life',
                            'my grades',
                            'I changed my password to "incorrect". So when I got it wrong the computer would say "your password is incorrect".',
                            'At what age would it be appropiate to tell my dog, it was adopted',
                            'What do you call a fake noodle? An impasta',
                            'What do you call a alligator in a vest? An investigator',
                            'What is the difference inbetween a fish and a guitar? You can not tuna fish',
                            'How many tickles does it take to make a octopus laugh? TEN-Tickles',
                            'What do you call a pile of kittens? A meowtain',
                            'Why did the picture go to jail? Because it was framed',
        ];
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
 },
};
