//-------------------------PROBLEM-4--------------------------------------

function perfectFriend(friends){
    // you can use array here like let my5CharacterFrnd =[];
    let my5CharacterFrnd = 0; 
   
    // if the array is not empty, then it will go inside the array 
     if(friends.length != 0 ){
                 //the main condition start from here
                 for(const friend of friends){
                    if(typeof friend != 'string' ){
                        return "Please use string  here"
                    }
                    else if(friend.length === 5){
                        my5CharacterFrnd = friend; // you can use (let my5CharacterFrnd.push(friend)) 
                       break;
                    }

                }
      }
      //if the array is empty, then it will show below message
     else{
        return "This array is empty, use string to get the right value"
    }
    return my5CharacterFrnd;
}

const friends =['mehedi', 'raji', 'kamrul', 'nishan', 'awal', 'faria'];

const luckyFrnd = perfectFriend(friends)

console.log(luckyFrnd);
// console.log(perfectFriend(["abcdef", "abc"]));