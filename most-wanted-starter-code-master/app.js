"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = searchByTraits(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " " + "Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'.");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    displayPerson(person)
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name? Capitalize the first letter of their first name.", chars);
  let lastName = promptFor("What is the person's last name? Capitalize the first letter of their last name.", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
////TODO find the person using the name they entered
//Brett says do something here- return foundPerson isn't enough
  return foundPerson;
}

function searchByTraits(people){
  let displayOption = promptFor("By which trait would you like to search? Examples are 'gender', 'height', 'weight', 'eye color', or 'occupation'.", chars);
  let foundPerson = people.filter(function(person){

    switch(displayOption){
      case "gender":
      let genderResults = searchByGender(people);
      displayPeople(genderResults);
      break;
      case "height":
      let heightResults = searchByHeight(people);
      displayPeople(heightResults);
      break;
      case "weight":
      let weightResults = searchByWeight(people);
      displayPeople(weightResults);
      break;
      case "eye color":
      let eyeColorResults = searchByEyeColor(people);
      displayPeople(eyeColorResults);
      break;
      case "occupation":
      let occupationResults = searchByOccupation(people);
      displayPeople(occupationResults);
      case "restart":
      app(people);
      case "quit":
      return;
      default:
      return mainMenu(person, people);
    }
  })



  return foundPerson(foundPerson, searchByGender);

}

  function searchByGender(people){
    let gender = promptFor("What is their gender?", chars);

    let foundPerson = people.filter(function(people){
      if (people.gender === gender){
        return true;
      }
      else{
        return false;
      }
    })
    return foundPerson;

  }

  function searchByHeight(people){
    let height = promptFor("What is their height (in inches)?", chars);
  
    let foundPerson = people.filter(function(people){
      if (people.height === parseInt(height)){
        return true;
      }
      else{
        return false;
      }
    })
    return foundPerson;
  
  }

  function searchByWeight(people){
    let weight = promptFor("What is their weight (in pounds)?", chars);
  
    let foundPerson = people.filter(function(people){
      if (people.weight === parseInt(weight)){
        return true;
      }
      else{
        return false;
      }
    })
    return foundPerson;
  
  }

function searchByEyeColor(people){
  let eyeColor = promptFor("What is their eye color?", chars);

  let foundPerson = people.filter(function(people){
    if (people.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;

}

function searchByOccupation(people){
  let occupation = promptFor("What is their occupation?", chars);

  let foundPerson = people.filter(function(people){
    if (people.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson;

}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  personInfo += "Gender: " + person[0].gender + "\n";
  personInfo += "Date of birth: " + person[0].dob + "\n";
  personInfo += "Height: " + person[0].height + "\n";
  personInfo += "Weight: " + person[0].weight + "\n";
  personInfo += "Eye Color: " + person[0].eyeColor + "\n";
  personInfo += "Occupation: " + person[0].occupation + "\n";

  alert(personInfo);
}
function displayDescendants(person){
  let personInfo = "ID: " + person.id + "\n";
  if(personInfo == data.parents){
    return displayDescendants();
  }
}

// function that prompts and validates user input
function promptFor(question, valid){
  let response;
  do{
    response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
