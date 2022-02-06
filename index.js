const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const pets = require("./helper");

const myDogs = "<a href='http://localhost:3002/animals/dogs'><li>Dogs</a></li>";
const myCats = "<a href='http://localhost:3002/animals/cats'><li>Cats</a></li>";
const myRabbits =
  "<a href='http://localhost:3002/animals/rabbits'><li>Rabbits</a></li>";

const myHtml = `<h1>Adopt a Pet!</h1><p>Browse through the links below to find your new furry friend:</p><ul>${myDogs}${myCats}${myRabbits}</ul>`;

const myHeading = "<h1>List of pets</h1>";

app.get("/", (req, res) => {
  res.send(`${myHtml}`);
});

app.get("/animals", (req, res) => {
  res.send(`${myHeading}`);
});

app.get("/animals/:pet_type", (req, res) => {
  let html = "";
  const pet_type = req.params.pet_type;
  pets[pet_type].forEach((element, index) => {
    html += `
      <li>
        <a href="/animals/${pet_type}/${index}"> ${element.name} </a>
      </li>
    `;
  });

  res.send(`
  <h1>List of ${req.params.pet_type}:</h1> 
  <ul>
   ${html}
  </ul>`);
});

// app.get("/animals:pet_type/:name", (req, res) => {
//   res.send(`<h1>${req.params.name}</h1>`);
// });

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
