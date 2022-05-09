setTimeout(function () {
  // Delay to make the Prompt show up after the HTML loaded.
  let input = prompt("Choose an Option from the Menu:");
  //Starter To-Do List
  let todos = [
    'Pick Weeds',
    'Learn Photoshop',
    'Purge junk Drawer',
    'Wash the Car'
  ];

  // While Loop Keeps the App Running until Quit
  while (input !== 'Quit' && input !== 'quit') {
    //Create New Item
    if(input === 'New' || input === 'new') {
      const newItem = prompt("Name This To-do:");
      todos.push(newItem);
      console.log(`'${newItem}' has been added to the list`);
    //List All Items with non-zero Index number!
    } else if (input === 'List' || input === 'list') {
      console.log('******************************');
      for(let i = 0; i < todos.length; i++) {
        console.log(`${i+1}: ${todos[i]}`);
      }
      console.log('******************************');
    //Deletes a specified To-Do
    } else if (input === 'Delete' || input === 'delete') {
      // Converts string into a Number
      const deleteItem = parseInt(prompt("Which Todo Number would you like to Delete?"));
      // If input is a number, deletes the item from the to-do array and prints the item that is deleted.
      if (!Number.isNaN(deleteItem)) {
        console.log(`'${todos[deleteItem - 1]}' has been removed from the list!`);
        todos.splice(deleteItem - 1, 1);
      }
      else {alert('Input is Not a Number!');
      }
    }
    input = prompt("Choose a Menu Option Below:");
  } console.log("Okay you quit the App");
}, 100)


/* Attempting different ways to use innerHTML to display it here vs. the console.log: Failed for the moment.

  document.getElementById('object').innerHTML = todos;
  while (input !== 'Quit' && 'quit') {
    input = prompt("What Would you Like to Do? - Note: Case-Sensitive");
    if(input === 'New' && 'new') {
      let newItem = prompt("Name This To-do:");
      todos.push(newItem);
      todos.foreach(element => document.getElementById('object').innerHTML += `${element}. ${newItem}`);
    } else if (input === 'List' && 'list') {
      document.getElementById('object').innerHTML = todos.forEach();
    } else if (input === 'Delete' && 'delete') {
      let deleteItem = prompt("Which Todo Item Index Number would you like to Delete?");
      todos[deleteItem].splice();
      document.getElementById('object').innerHTML = todos.forEach();
    } else if (input === 'Quit' && 'quit') {
      let exitMessage = "Okay you quit the App";
      document.getElementById('message').innerHTML = exitMessage;
    }
  }
}, 100)

*/