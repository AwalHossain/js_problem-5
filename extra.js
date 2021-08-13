function perfectFriend(friends){
    let my5CharacterFrnd = 0;
    for(const friend of friends){
        console.log(friend.length);
        if(typeof friend != 'string' ){
            return "Please use string  here"
        }
        else if(friend.length == 5){
            my5CharacterFrnd = friend;
            break;
        }
    }
return my5CharacterFrnd;
}

const friends =["faria", "kajim", 'faria', 'rahim', 'masud'];

console.log(perfectFriend(friends));







// for(const friend of friends){
//     console.log(friend);
//   if(typeof friend != 'string' ){
//      return "Please use string  here"
//   }
//   else if(friend.length == 0){
//      return "you cannot use empty"
//    }
//    else if(friend.length == 5){

//       // you can use let my5CharacterFrnd.push(friend)
//       my5CharacterFrnd = friend;
//       break;
//  }
// }