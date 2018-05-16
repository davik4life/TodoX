// Still on PROMPT Mode.



alert("Use 'view' to view the list, and 'quit' to quit the App. Press 'Enter' Key to begin.");
var lists = [];
var action = prompt("What would you like to do?");

while (action !== "quit") {
  if (action === "new") {
    newTodo();
  } else if (action === "list") {
    listItem();
  } else if (action === "delete") {
    deleteItem();
  }
  action = prompt("What would you like to do?");
}
alert("Okay, you quit the APP.")

function newTodo() {
  var ask = prompt("What's your todo?");
  lists.push(ask);
  console.log("Todo added successfully.");
}

function listItem() {
  lists.forEach(function(lItem, i) {
      console.log("**************");
      console.log(i + ": " + lItem);
      console.log("**************");
  });
}

  function deleteItem() {
    var delItem = prompt("Enter the index to be deleted. e.g: 1")
    // Splice function deletes an item from anywhere in an array.
    lists.splice(delItem, 1);
    console.log(delItem + " is Deleted!");
  }
