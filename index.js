const groceryList = [];
const groceryName = document.querySelector(".grocery-area");
const addButton = document.querySelector(".add-button");

//funkcije

function displayAllGroceriesInHtml(groceryList) {
  const parentDiv = document.querySelector(".grocery-list-div");

  parentDiv.innerHTML = "";

  groceryList.forEach(function (addingGroceries) {
    parentDiv.innerHTML += "<p>" + addingGroceries.name + "</p>";
  });
}

function addGrocery(addingGroceries) {
  addButton.disabled = true;
  addButton.style.backgroundColor = "red";
  groceryName.disabled = true;
  groceryName.style.backgroundColor = "gray";

  setTimeout(function () {
    groceryList.push(addingGroceries);
    displayAllGroceriesInHtml(groceryList);

    addButton.disabled = false;
    addButton.style.backgroundColor = "rgb(187, 163, 30)";
    groceryName.disabled = false;
    groceryName.style.backgroundColor = "black";
  }, 1000);
}

function addNewGrocery() {
  const newGrocery = {
    name: groceryName.value,
  };

  addGrocery(newGrocery);

  groceryName.value = "";
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
