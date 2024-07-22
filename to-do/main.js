let form = document.getElementById("addForm");
let itemsList = document.getElementById("items");
let filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  console.log("Fired!");

  let newItemInput = document.getElementById("newItemText");
  let newItemText = newItemInput.value;

  let newElement = document.createElement("li");
  newElement.className = "list-group-item";

  let newTextNode = document.createTextNode(newItemText);
  newElement.appendChild(newTextNode);

  let deleteBtn = document.createElement("button");

  deleteBtn.appendChild(document.createTextNode("delete"));

  deleteBtn.className = "btn btn-light btn-sm float-right";

  deleteBtn.dataset.action = "delete";

  newElement.appendChild(deleteBtn);
  console.log("addItem -> newElement", newElement);

  itemsList.prepend(newElement);

  newItemInput.value = "";
}

itemsList.addEventListener("click", removeItem);

function removeItem(e) {
  if (
    e.target.hasAttribute("data-action") &&
    e.target.getAttribute("data-action") == "delete"
  ) {
    if (confirm("Удалить задачу?")) {
      e.target.parentNode.remove();
    }
  }
}

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  let searchedText = e.target.value.toLowerCase();

  let items = itemsList.querySelectorAll("li");

  items.forEach(function (item) {
    let itemText = item.firstChild.textContent.toLocaleLowerCase();
    if (itemText.indexOf(searchedText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
