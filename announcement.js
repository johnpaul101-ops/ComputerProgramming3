const title = document.querySelector(".title");
const description = document.getElementById("description");
const noAnnouncementMsg = document.querySelector(".no__announcement__message");
const cardsContainer = document.querySelector(".cards__container");

function submitAnnouncement() {
  if (title.value == "" && description.value == "") {
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  const cardTitle = document.createElement("h1");
  cardTitle.textContent = title.value;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Card";
  removeBtn.className = "removeBtn";
  card.append(cardTitle, cardDescription, removeBtn);

  cardsContainer.appendChild(card);

  title.value = "";
  description.value = "";

  if (cardsContainer.children.length > 0) {
    noAnnouncementMsg.style.display = "none";
    saveToLocalStorage();
  }
  saveToLocalStorage();
}

function clearTerminal() {
  title.value = "";
  description.value = "";
}

cardsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();

    if (cardsContainer.children.length === 0) {
      noAnnouncementMsg.style.display = "flex";
    }
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  localStorage.setItem("data", cardsContainer.innerHTML);
}

function loadAnnouncements() {
  cardsContainer.innerHTML = localStorage.getItem("data");
}
loadAnnouncements();
