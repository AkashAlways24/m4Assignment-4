/*function signature/sample */
function cashOut( money ) {
  if( typeof money !== 'number' || isNaN(money) || money < 0 ){
    return "Invalid"
  }

  else{
    const cashOutAmount = money*1.75/100;
    return cashOutAmount;
  }
}

// const taka = 'akash';

// const result = cashOut(taka);
// console.log(result);

