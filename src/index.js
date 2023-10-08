import _ from "lodash";
import scaffold from "./scaffold.js";
//scaffold()

import aboutLink from "./about.js";
import menuLink from "./menu.js";
// document.getElementById("aboutLink");
// aboutLink.addEventListener("click", function(event) {
// 	const links = document.querySelectorAll('.tablinks a');
// 	links.forEach(l => l.classList.remove('active'));

//     // Add the 'active' class to the clicked link
//     this.classList.add('active');
// 	event.preventDefault(); // Prevent the default link behavior (page refresh)

// 	// Call the about() function when the link is clicked
// 	about();
//   });

(function init() {
// Get a reference to the parent container that holds the tablinks
const tabLinksContainer = document.querySelector("nav ul");

// Add a click event listener to the parent container
tabLinksContainer.addEventListener("click", function (event) {
  const clickedLink = event.target;

  event.preventDefault(); // Prevent the default link behavior (page refresh)

  let activeTab = null;
  if (clickedLink.classList.contains("active")) {
    return; // Do nothing if it's the active tab
  }
  activeTab = clickedLink.id;

// Get a reference to the #content div
const contentDiv = document.getElementById("content");

// Remove all content inside the #content div
contentDiv.innerHTML = "";

  // Remove the 'active' class from all tablinks
  const links = this.querySelectorAll("a");
  links.forEach((link) => link.classList.remove("active"));

  // Add the 'active' class to the clicked link
  clickedLink.classList.add("active");

  // Call the corresponding function (e.g., about, menu) based on the link's ID
  switch (clickedLink.id) {
    case "aboutLink":
      aboutLink();
      break;
    case "menuLink":
      menuLink();
      break;
    case "contactLink":
      contactLink();
      break;
  }
});

//aboutLink();
//loads About page initially
})();
