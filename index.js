let groceryList = [];
const groceryName = document.querySelector(".grocery-area");
const addButton = document.querySelector(".add-button");
const removeButton = document.querySelector(".remove-btn");

let count = 2;

//funkcije

function saveToStorage() {
  localStorage.setItem("todo-items", JSON.stringify(groceryList));
}
function removeFromStorage() {
  localStorage.removeItem("todo-items", JSON.stringify(groceryList));
}

function loadFromStorage() {
  const foundObject = localStorage.getItem("todo-items");

  if (foundObject && foundObject.length) groceryList = JSON.parse(foundObject);
  else groceryList = [];

  console.log(groceryList);

  displayAllGroceriesInHtml(groceryList);
}

function displayAllGroceriesInHtml(groceryList) {
  const parentDiv = document.querySelector(".grocery-list-div");

  parentDiv.innerHTML = "";

  groceryList.forEach(function (addingGroceries) {
    parentDiv.innerHTML += "<p>" + addingGroceries.name + "</p>";
  });
}

function addGrocery(addingGroceries) {
  addButton.disabled = true;
  $(addButton).animate({
    height: 15,
    width: 50,
    fontSize: 8,
  });
  $(addButton).fadeOut(1000);
  $(groceryName).animate({
    width: 80,
    height: 10,
  });
  $(groceryName).fadeOut(1000);
  groceryName.disabled = true;
  setTimeout(function () {
    groceryList.push(addingGroceries);

    console.log(addingGroceries);

    saveToStorage();

    displayAllGroceriesInHtml(groceryList);

    addButton.disabled = false;
    $(addButton).fadeIn(200);
    $(addButton).animate({
      height: 38,
      width: 80,
      fontSize: 18,
    });
    $(groceryName).fadeIn(200);
    $(groceryName).animate({
      width: 200,
      height: 30,
    });

    groceryName.disabled = false;
  }, 1000);
}

function addNewGrocery() {
  const newGrocery = {
    name: groceryName.value,
  };

  addGrocery(newGrocery);

  // localStorage.setItem("tasks", JSON.stringify(savedTasks));

  groceryName.value = "";
}

function removeGrocery(addingGroceries) {
  groceryList.pop(addingGroceries);

  removeFromStorage();

  displayAllGroceriesInHtml(groceryList);
}

function removeItem() {
  const oldGrocery = groceryList[0];
  removeGrocery(oldGrocery);
}

//events

addButton.addEventListener("click", function () {
  addNewGrocery();
});

groceryName.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addNewGrocery();
  }
});

removeButton.addEventListener("click", function () {
  removeItem();
});

loadFromStorage();

// Hvatamo dugme
