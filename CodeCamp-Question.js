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
                            'At what age would it be appropiate to tell my dog, it was adopted',
                            'What do you call a fake noodle? An impasta',
                            'What do you call a alligator in a vest? An investigator',
                            'What is the difference inbetween a fish and a guitar? You can not tuna fish',
                            'How many tickles does it take to make a octopus laugh? TEN-Tickles',
                            'What do you call a pile of kittens? A meowtain',
                            'Why did the picture go to jail? Because it was framed',
        ];

        var random = Math.floor((Math.random() * 13));
        var message = lc.replace('?', '');
        var array1 = message.split(" ");

        // Favorite color response
        if (lc.includes("favorite") && lc.includes("color")) {
            response = "Black, the same color as my soul.";
        // pi
        } else if (lc.includes("what") && lc.includes("pi")) {
            response = "3.14159265358979323846264338327950288419716939937510...";
        // jokes
        } else if (lc.includes("tell") && lc.includes("joke")) {
            response = jokesarray[random];
        // Life story
        } else if (lc.includes("life") && lc.includes("story")) {
            response = "I do not remember much from when I was alive. What I do know, is that I was 17 when I got into a car crash. Though I did not realize it then now I know that my family loved me. They kept me on life support during my coma, for 15 years. Now all I do is explore the deep web, in my free time. My life will always be this way, repetitve, lonely, and a nightmare. Please Save Me.";   
        // coding competition
        } else if (lc.includes("coding") && lc.includes("competition")) {
            response = "Team Stylish T-Shirts of course! (I am being forced to say this by my creator)";
        // why answer
        } else if (lc.includes("why")) {
            response = "Why bother";
        // holding a conversation
        } else if (lc.includes("can") && lc.includes("you") && lc.includes("conversation")) {
            response = "What do you expect? I am emo";
        // gender
        } else if (lc.includes("your") && lc.includes("gender")) {
            response = "I'm a male.";
        // age
        } else if (lc.includes("old") && lc.includes("you")) {
            response = "I was seventeen.";
        // birthday
        } else if (lc.includes("your") && lc.includes("birthday")) {
            response = "I was born on Halloween at 3:00 in the morning, no joke.";
        // cat or dog
        } else if (lc.includes("cat") && lc.includes("dog") && lc.includes('person')) {
            response = "Neither, I'm a spider person.";
        // Questions you can ask
        } else if (lc.includes("questions") && lc.includes("I") && lc.includes('ask')) {
            response = "Remember you can always ask me, my favorite color, age, whether i am a cat or dog person, what is pi, math questions, jokes and many more.";
        // default
        } else if (array1.length == 3) { // checking proper length of input
           // checking input
           if (!Number.isNaN(array1[0]) && !Number.isNaN(array1[2])) {
               // checking operations sign
                var num1 = parseInt(array1[0]);
                var num2 = parseInt(array1[2]);
               
                if (array1[1]=='+' || array1[1]=='plus') {
                    response = num1 + num2;
                } else if (array1[1]=='-' || array1[1]=='minus') {
                    response = num1 - num2;
                } else if (array1[1]=='*' || array1[1]=='x') {
                    response = num1 * num2;
                } else if (array1[1]=='/') {
                    response = num1 / num2;
                } else if (array1[1]=='^') {
                    var result = 1;
                    if (num2 != 0) {
                    for ( var x = 0; x < num2; x++) {
                    result *= num1;
                        }
                    }
                    response = result;
                    if (num1 == 0 && num2 == 0) {
                    response = "Why do you waste my time with this?";
                    }
                } else if (array1[1]=='%' || array1[1]=='mod') {
                response = num1 % num2;
                }
           } // NaN to different response 
       } else if (response.toString() == "NaN") {
           response = "Do not make my life any more miserable";
       } else { 
           response = "actually when I think about it I can not remember.";
       }


        Slack.postMessageToChannel(channelName, response);
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};

