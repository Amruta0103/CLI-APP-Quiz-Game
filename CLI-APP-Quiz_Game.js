var readlineSync = require("readline-sync");                                                                                                                                          //getting readlineSync module

var chalk = require("chalk");                                                                                                                                                         //getting chalk module

var score=0;                                                                                                                                                                          //declaring initial score as 0

console.log(chalk.bgCyan(chalk.bold.underline.whiteBright("Welcome to Do You Know Amruta Well? quiz.\n")));                                                                           //wewlcome message
var start = readlineSync.question(chalk.bgGrey(chalk.bold.whiteBright("Should we start the game? \n(enter 'y' for yes /'n' for no) \n")));                                            //request to start game
if (start.toUpperCase()==="Y"){
  var userName = readlineSync.question(chalk.bgYellowBright(chalk.bold.black("\nPlease give in your name?\n")));                                                                      //getting user name

  console.log(chalk.bold.bgGreenBright(chalk.bold.black("Hi "+userName+"!! \n")));                                                                                                    //welcoming user

  console.log(chalk.bgWhiteBright(chalk.bold.black("NOTE: \nTo answer the following questions, type in the option number corresponding to the choice you make : 1/2/3/4 \n")));       //rules to play
  console.log(chalk.bgWhiteBright(chalk.underline.bold.black("The marking scheme:- \nRight answer:- +1 mark \nWrong answer:- -1 mark \n")));                                          //marking scheme

var questions=[                                                                                                                                                                       //list of questions with answers
  {ques:"What is Amruta's Date of Birth? \n1. 16/03/1999 \n2. 16/03/2002 \n3. 16/03/2000 \n4. 16/03/2001 \n",ans:"4"},
  {ques:"What is Amruta's favourite pass-time? \n1. Painting \n2. Crafts \n3. Listening to Music \n4. Dancing \n",ans:"4"},
  {ques:"What is Amruta's favourite chaat? \n1. Bhel \n2. Shev-Puri \n3. Pani-Puri \n4. Ragda-Patice \n",ans:"3"},
  {ques:"What is Amruta's faourite sweet? \n1. Rasgulla \n2. Gulabjam \n3. Rasmalai \n4. Basundi \n",ans:"2"},
  {ques:"What is Amruta's favourite colour? \n1. Blue \n2. Green \n3. Red \n4. Yellow \n",ans:"3"},
  {ques:"What is Amruta's favourite animal? \n1. Dog \n2. Cat \n3. Fish \n4. Cheetah \n",ans:"2"},
  {ques:"What is Amruta's favourite Band? \n1. BTS \n2. Exo \n3. Twice \n4. Blackpink \n",ans:"4"},
  {ques:"What is Amruta's favourite ice-cream? \n1. Vanila \n2. Coconut \n3. Choco-chips \n4. Anjeer \n",ans:"3"},
  {ques:"What is Amruta's favourite cartoon? \n1. Mr.Bean \n2. Phineas & Ferb \n3. Dragon Ball Z \n4. Pokémon \n",ans:"1"},
  {ques:"What is Amruta's favourite fast-food? \n1. Pizza \n2. Noodles \n3. Pasta \n4. Burger \n",ans:"2"}
]

var gameStart = readlineSync.question(chalk.bgGreenBright(chalk.bold.black(userName+" should we begin the QUIZ? (yes: y /no: n ) \n")));                                              //confirmation to start the quiz
if(gameStart.toUpperCase() === "Y")
{
  console.log("Let's Begin! \n");
  function play(ques,ans){
    var userAnswer=readlineSync.question(chalk.bgYellowBright(chalk.bold.black(ques)));                                                                                               //asking questions
    if(userAnswer === ans){
      console.log(chalk.bgCyanBright(chalk.bold.black("\nGreat ! You are Right.")));                                                                                                  //declaring correct answer
      score+=1;                                                                                                                                                                       //updating score
    }
    else{
      console.log(chalk.bgRedBright(chalk.bold.white("\nOh no! You are Wrong!")));                                                                                                    //declaring wrong answer
      if(score!=0){
        score-=1;                                                                                                                                                                     //updating score
      }
    }
  console.log(chalk.bgGreenBright(chalk.bold.black("\nYour score is "+score)));                                                                                                       //declaring score
  console.log(chalk.bgWhiteBright(chalk.bold.black("\n<-<-<-<-<-<-<-<-<-<--->->->->->->->->->->\n")));
  }


  for(var i=0;i<questions.length;i++){
    currentQue = questions[i];                                                                                                                                                        //loop for asking questions
    play(currentQue.ques,currentQue.ans)
  }

  console.log("\n");
  console.log(chalk.bgGreenBright(chalk.bold.black("Your final score is "+score+"/10")));                                                                                             //declaring final score out of 10
  console.log("\n");

  if(score>=7){
    console.log(chalk.bgBlueBright(chalk.bold.white("YAY!! You have scored awesome ! ")));                                                                                            //congratulating for scoring 7 or more
    console.log(chalk.bgBlueBright(chalk.bold.white("\nDo send me a screenshot.")));
  }else{
    console.log(chalk.bgBlueBright(chalk.bold.white("Better Luck Next Time!")));                                                                                                      //if someone scores less than 7
  }
}
else
{
console.log(chalk.bgGrey(chalk.bold.white("Okay Do Play Next Time!!")))                                                                                                               //requesting to play next time if not this time
}
}
else{
console.log(chalk.bgGrey(chalk.bold.white("Okay Do Play Next Time!!")))
}
