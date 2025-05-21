// Problem-01 : Calculate the cash-out Charge 

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



// Problem-02 : Detect email  valid or not

/*function signature/sample */
function  validEmail( email ) {
  // Challenge Part ***
  if(typeof email !== 'string'){
    return "Invalid"
  }
  // ai khane thake false return korbe ***

  // ইমেইলের  শুরু তে  ".-_+@"  এই স্পেশাল ক্যারেক্টার গুলো থাকা যাবেনা। 
  const characterChecker = email[0];
  const bedCharacter=[".","-","_","+","@"];
  if(bedCharacter.includes(characterChecker)){
    return false
  }

  // ইমেইলের মাঝখানে @ থাকতে হবে।
  const mailParts = email.split("@");
  if(mailParts.length !==2){
    return false;
  }

  const fastPart=mailParts[0];
  const secPart = mailParts[1];
  if(fastPart === "" || secPart === ""){
    return false;
  }

  // ইমেইলে কোন স্পেস থাকা যাবেনা
  if(email.includes(" ")){
    return false
  }
// ইমেইলের শেষে  .com থাকতে হবে।
// endsWith diye ses er onso bujano hoise 
  if(!email.endsWith(".com")){
    return false
  }

  // ai khane thake true return korbe ***
  // উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে
return true
}

// const mail = "he ro@alom.com";
// const result = validEmail(mail);
// console.log(result);



// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 


/*function signature/sample */
function  electionResult( votes ) {
  // 🚩Challenge:  যদি ইনপুট টি Array না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 
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


// const candidet = ["mango", "BananA", "na vote", "na vote"];
// const result = electionResult(candidet);
// console.log(result);


// Problem-04: Detect The Perfect Best Friend 

/*function signature/sample */
function  isBestFriend( f1 , f2 ) {
  if( typeof f1 !== 'object'|| typeof f2 !== 'object'){
    return "Invalid"
  }

  // 🚩Challenge:   Input গুলো যদি typeof thik  না হয়  তাহলে ফাংশন    "Invalid" return করবে।

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


// const kashem = { name: "hashem", roll: 1 , bestFriend: 1};
// const hashem = { name: "kashem" , roll: 1, bestFriend: 1 };

// const result = isBestFriend(hashem, kashem);
// console.log(result);



// Problem-05: Let’s Calculate Video watch Time

/*function signature/sample */
function  calculateWatchTime( times ) {
  let totalTime = 0;


// 🚩Challenge:  Array element গুলো যদি number না হয় তাহলে   "Invalid" return করবে।  
  for (const time of times) {
    if(typeof time !== 'number'){
      return "Invalid";
    }
    // aikhane time k jog kora hoilo 
    totalTime = time + totalTime;
  }
  // ai ta hour ber kora hoilo 
const hour = Math.floor(totalTime / 3600); 
const bakiSec = totalTime % 3600;

// aitai minute ber kora holo 
const minute = Math.floor(bakiSec / 60);
// minute ber korar pore ja vag ses thake ta second er maje ses kora holo 
const second = bakiSec % 60;

return { hour, minute, second };
}

// const timeFram = [100, 3800, "90" ];
// const result = calculateWatchTime(timeFram);
// console.log(result);


// milstom 4 end 5 start and aj kiso na korar aita push korlam for daily submition 

