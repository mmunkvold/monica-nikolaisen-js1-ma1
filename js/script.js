// Javascript 1 Module Assignment 1
// Level 1

// NOTE: added some css to make it a little bit nicer and to practice some css...

// Question 1:

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

heading.style.fontSize = "2em";

// Question 4:

heading.classList = "subheading";

//heading.classList.add("subheading"); //Dont know which one is more correct..

// Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7:

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}
catList(cats);

// Question 8:

const container = document.querySelector(".cat-container");

let html = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let age = "Unknown age";

    if (cats[i].age) {
      age = cats[i].age;
    }

    html += `<div>
              <h5>${cats[i].name}</h5>
              <p>Age: ${age}</p>
            </div>`;
  }
  container.innerHTML = html;
}

createCats(cats);
