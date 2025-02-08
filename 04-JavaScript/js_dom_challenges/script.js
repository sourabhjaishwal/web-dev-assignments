// alert("Connected")

// example - 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    console.log((paragraph.textContent = "The paragraph is changed!"));
  });

// example - 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// example - 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  // console.log(coffeeType);
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "#3c2218";
  coffeeType.style.color = "white";
  coffeeType.style.padding = "5px";
});

// example - 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  // console.log(newItem);
  document.getElementById("shoppingList").appendChild(newItem);
});

// example - 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasks = document.getElementById("taskList");
    tasks.lastElementChild.remove();
  });

// example - 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("chaicode");
  });

// example - 7

document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event.target)
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example - 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// example - 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

// example - 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
