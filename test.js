B11_A6_A60




function cashOut( money ) {
  if( typeof money !== 'number' || isNaN(money) || money < 0 ){
    return "Invalid"
  }

  else{
    const cashOutAmount = money*1.75/100;
    return cashOutAmount;
  }
}


function  validEmail( email ) {

  if(typeof email !== 'string'){
    return "Invalid"
  }

  const characterChecker = email[0];
  const bedCharacter=[".","-","_","+","@"];
  if(bedCharacter.includes(characterChecker)){
    return false
  }


return true
}


function  electionResult( votes ) {

  if(!Array.isArray(votes)){
    return "Invalid"
  }

  const mangoVote = [];
  const bananaVote = [];

  for(const vote of votes){
    if(vote === 'mango'){
      mangoVote.push('mango')
    }
    if(vote === 'banana'){
      bananaVote.push('banana')
    }
    
  }
  
  if(mangoVote.length > bananaVote.length){
    return 'Mango'
  }
  else if(mangoVote.length < bananaVote.length){
    return 'Banana'
  }
  else if(mangoVote.length == bananaVote.length){
    return 'Draw'
  }

}


function  isBestFriend( f1 , f2 ) {
  if( typeof f1 !== 'object'|| typeof f2 !== 'object'){
    return "Invalid"
  }



      if (typeof f1.name !== 'string' || typeof f1.roll !== 'number' || typeof f1.bestFriend !== 'number') {
        return "Invalid";
    }

    if (typeof f2.name !== 'string' || typeof f2.roll !== 'number' || typeof f2.bestFriend !== 'number') {
        return "Invalid";
    }


  if(f1.roll === f2.bestFriend && f1.bestFriend === f2.roll){
    return true
  }
else{
  return false
}
};



function  calculateWatchTime( times ) {
  let totalTime = 0;



  for (const time of times) {
    if(typeof time !== 'number'){
      return "Invalid";
    }

    totalTime = time + totalTime;
  }

const hour = Math.floor(totalTime / 3600); 
const bakiSec = totalTime % 3600;


const minute = Math.floor(bakiSec / 60);

const second = bakiSec % 60;

return { hour, minute, second };
}



