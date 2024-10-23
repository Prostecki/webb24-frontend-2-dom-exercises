const body = document.querySelector("body");

const createElement = (tag, className, textContent) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
};

const greetings = createElement("p", "greetings", "Hej från Javascript!");

body.appendChild(greetings);

const rubrik = document.querySelector("h1");
rubrik.textContent = "Rubrik från Javascript!";

const button = document.querySelector("button");

button.textContent = "Change background";
button.addEventListener("click", () => {
  body.classList.toggle("red");
});

const buttonParagraphs = createElement(
  "button",
  "",
  "Change color for paragraphs"
);

body.appendChild(buttonParagraphs);

buttonParagraphs.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((item) => {
    item.style.color = "green";
    if (item.style.color === "green") {
    }
  });
});

// UPPGIFT 2 - Even och odd numbers + a, b (extra)
const numbers = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];
const numbersContainer = createElement("ul", "flex-container", "");
const numbersElements = createElement("li", "", "");

//Each element, and index of element in numbers.
// numbers.forEach((item, index) => {
//   let li = createElement("li", "", "");
//   li.textContent = item;
//   console.log(li);
//   if (item % 2 === 0) {
//     li.classList.add("red-font");
//   } else if (index === 5) {
//     li.classList.add("pink-font");
//   } else {
//     li.classList.add("blue-font");
//   }
//   numbersContainer.appendChild(li);
// });
// document.body.appendChild(numbersContainer);

// UPPGIFT 3 - Profilkort
const profileContainer = document.getElementById("profile-cards");
const getProfilesButton = document.querySelector(".get-profiles-button");
const persons = [
  {
    name: "Mark",
    age: 30,
    amountOfPets: 1,
    email: "mark.taratynov@gmail.com",
    lovesWinter: false,
  },
  {
    name: "Bob",
    age: 30,
    amountOfPets: 1,
    email: "bob@example.com",
    favoriteAuthor: "George Orwell",
    lovesWinter: false,
  },
  {
    name: "Charlie",
    age: 35,
    amountOfPets: 0,
    email: "charlie@example.com",
    favoriteAuthor: "Isaac Asimov",
    lovesWinter: true,
  },
];

console.log(persons[2]);

getProfilesButton.addEventListener("click", () => {
  persons.forEach((person) => {
    let div = createElement("div");
    div.classList.add("profile-card");

    if (person.lovesWinter) {
      div.style.backgroundColor = "lightblue";
    } else {
      div.style.backgroundColor = "lightcoral";
    }

    let name = createElement("h3");
    name.textContent = `Name: ${person.name}`;

    let age = createElement("p");
    age.textContent = `Age: ${person.age}`;

    let amountOfPets = createElement("p");
    amountOfPets.textContent = `Amount of pets: ${person.amountOfPets}`;

    let email = createElement("p");
    email.textContent = `Email: ${person.email}`;

    let favoriteAuthor = createElement("p");
    favoriteAuthor.textContent = `Favorite author is ${person.favoriteAuthor}`;

    let lovesWinter = createElement("p");
    lovesWinter.textContent = `Loves winter: ${person.lovesWinter}`;

    div.append(name, age, amountOfPets, email, favoriteAuthor, lovesWinter);

    profileContainer.appendChild(div);
  });
});
