const getUserChoice = (userInput)=> {
    userInput = userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
      return userInput;
    }
    else{
      console.log('errormessage');
    }
  
  
  }
    console.log(getUserChoice('paper'));
    function getComputerChoice(){
      var randomNumber = Math.floor(Math.random()*3);
      switch(randomNumber){
        case 0:
        return 'rock';
        break;
        case 1:
        return 'paper';
        break;
        case 2:
        return 'scissor';
        break;
  
      }
    }
    console.log(getComputerChoice(2));
  
    //function determinewinnner
    function determineWinner(getUserChoice,getComputerChoice){
      if(getUserChoice===getComputerChoice){
        return 'The game was a tie';
        if(getComputerChoice==='paper'){
            return'computer won';
        }
        else{
            console.log('computer didnot win');
        }
      }
    }
  
  
  
  