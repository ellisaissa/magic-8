// we define answers
// var answers = ["];

               function GenerateAnswer() {
                responses = [
                  'It is certain',
                  'Without a doubt',
                  'Most likely',
                  'Yes',
                  'Reply hazy try again',
                  'Ask again later',
                  'My reply is no',
                  'No',
                  'Very doubtful',
                 "It is certain", 
               "It is decidedly so", 
               "Without a doubt", 
               "Yes - definitely",
               "You may rely on it", 
               "As I see it, yes", 
               "Most likely", 
               "Outlook good", 
               "Yes", 
               "Signs point to yes",
               "Don't count on it", 
               "My reply is no",
               "My sources say no", 
               "Outlook not so good",
               "Very doubtful", 
               "Reply hazy, try again", 
               "Ask again later", 
               "Better not tell you now",
               "Cannot predict now", 
               "Concentrate and ask again"
                ];
                response = responses[Math.floor(Math.random() * responses.length)];
                document.getElementById('outputDiv').innerHTML = response;
              }