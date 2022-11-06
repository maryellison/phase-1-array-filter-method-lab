//function findMatching(array, str){
//    const newMatch = [];
//    for (const user of array) {
//        if (user.toLowerCase() === str.toLowerCase()){
//            newMatch.push(user);
//        } else if (user.toLowerCase() !== str.toLowerCase()){
//            return ([]);
//        }
//        return (newMatch)
//    }
//    }
function findMatching(drivers, string){
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return result
}


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
//this is correct, it runs. But very wordy.
function fuzzyMatch(array, str){
    const newArray = [];
      for (const user of array) {
          if (user.charAt(0) === str.charAt(0) && user.charAt(1) === str.charAt(1)){
              newArray.push(user)
          }
      }
    return (newArray)
  }

//Problem with the code below, but closer to a cleaner, correct code from Slack
//  function fuzzyMatch(drivers, string){
//    let result = drivers.filter(word => string === word.startsWith('Sa'))
//    return result
//  }


//  function matchName(array, str){
//    const information = [];
//    for (const user of array){
//        if (str === user){
//            information.push(user)
//        }
//    }
//  }

  function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name
    })
  }