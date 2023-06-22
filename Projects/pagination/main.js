const container = document.querySelector(".container");
const listItem = document.querySelector(".list");
const first = document.querySelector(".first");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const last = document.querySelector(".last");
const modal = document.querySelector(".modal");
const content = document.querySelector(".content");
const close = document.querySelector(".close");

let dataListItem = [];
let page = 0;

function generateRandomName(adjectives, nouns) {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + " " + noun;
}

function createParagraphElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  return paragraph;
}

// Fetch from data.json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const adjectives = data.adjectives;
    const nouns = data.nouns;

    // Generate random names and add them to dataListItem
    for (let i = 1; i <= 100; i++) {
      let li = document.createElement("li");
      li.textContent = `${i} ${generateRandomName(adjectives, nouns)}`;
      dataListItem.push(li);
    }
  })
  .catch((error) => console.log(error));

// Example usage: Accessing the simulated database
setTimeout(() => {
  const fragment = document.createDocumentFragment(); // Create a document fragment

  for (let i = 0; i < page + 10; i++) {
    fragment.appendChild(dataListItem[i]); // Append each element to the fragment
  }

  next.addEventListener("click", () => {
    page === dataListItem.length - 10 ? (page = 0) : (page += 10);
    listItem.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      listItem.appendChild(dataListItem[i]);
    }
  });

  prev.addEventListener("click", () => {
    page === 0 ? (page = dataListItem.length - 10) : (page -= 10);
    listItem.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      listItem.appendChild(dataListItem[i]);
    }
  });

  first.addEventListener("click", () => {
    page = 0;
    listItem.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      listItem.appendChild(dataListItem[i]);
    }
  });

  last.addEventListener("click", () => {
    page = dataListItem.length - 10;
    listItem.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
      listItem.appendChild(dataListItem[i]);
    }
  });

  // Add event listener to each li item
  dataListItem.forEach((li) => {
    li.addEventListener("click", (e) => {
      modal.style.display = "block";
      const paragraphElm = createParagraphElement(e.target.textContent);

      // Check if para already exists in the content element
      const existingParagraph = content.querySelector("p");
      if (existingParagraph) {
        content.removeChild(existingParagraph); // Remove the existing paragraph
      }

      content.appendChild(paragraphElm);
    });
  });

  listItem.appendChild(fragment); // Append the fragment to the container
}, 1000);
// Delay added to demonstrate asynchronous behavior

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});
