const contactLink = () =>{
	console.log("contact.js loaded!");
// Create the main container div with id "contact"
const contactDiv = document.createElement("div");
contactDiv.id = "contact";
contactDiv.className = 'tabcontent';

// Create the h2 element inside "contact"
const h2Element = document.createElement("h2");
h2Element.textContent = "Contact";

// Create the div with id "midFlex"
const midFlexDiv = document.createElement("div");
midFlexDiv.id = "midFlex";

// Create the image element with a source and alt attribute
const imageElement = document.createElement("img");
imageElement.src = "./images/frog_fawners.jpg";
imageElement.alt = "Frog Cafe Lovers";

// Create the div with id "spanDiv"
const spanDiv = document.createElement("div");
spanDiv.id = "spanDiv";

// Create the first span element with id "span1"
const span1Element = document.createElement("span");
span1Element.id = "span1";
span1Element.textContent = "Hey there! We'd love to hear from you. Whether it's to chat about our treats, plan your visit, or just shoot the breeze, frog us a line. We're all ears and excited to connect with our fellow cafe enthusiasts. So, grab your phone or pop by in person for a good old-fashioned ribbit.";

// Create the second span element with id "span2"
const span2Element = document.createElement("span");
span2Element.id = "span2";

// Create the h4 element inside "span2"
const h4Element = document.createElement("h4");
h4Element.textContent = "Our hours are:";

// Create the div with id "hoursDiv" inside "span2"
const hoursDiv = document.createElement("div");
hoursDiv.id = "hoursDiv";

// Create three div elements with class "hoursP" inside "hoursDiv"
for (let i = 0; i < 3; i++) {
  const hoursPDiv = document.createElement("div");
  hoursPDiv.className = "hoursP";

  // Create two <p> elements for each "hoursP" div
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  // Fill in the text content for the <p> elements
  if (i === 0) {
    p1.textContent = "Mon~Fri:";
    p2.textContent = "10AM ~ 4PM";
  } else if (i === 1) {
    p1.textContent = "Saturday:";
    p2.textContent = "2PM ~ 4PM";
  } else {
    p1.textContent = "Sunday:";
    p2.textContent = "Closed";
  }

  // Append the <p> elements to the "hoursP" div
  hoursPDiv.appendChild(p1);
  hoursPDiv.appendChild(p2);

  // Append the "hoursP" div to "hoursDiv"
  hoursDiv.appendChild(hoursPDiv);
}

// Create the div with id "socials"
const socialsDiv = document.createElement("div");
socialsDiv.id = "socials";

// Create three <a> elements with the respective font awesome icons
const socialLinks = [
  {
    href: "#", // Add your Facebook link here
    iconClass: "socialButtons fa-brands fa-facebook-f",
  },
  {
    href: "#", // Add your Instagram link here
    iconClass: "socialButtons fa-brands fa-instagram",
  },
  {
    href: "#", // Add your email link here
    iconClass: "socialButtons fa-regular fa-envelope",
  },
];

socialLinks.forEach((linkData) => {
  const socialLink = document.createElement("a");
  socialLink.href = linkData.href;
  socialLink.target = "_blank";

  const icon = document.createElement("i");
  icon.className = linkData.iconClass;

  socialLink.appendChild(icon);
  socialsDiv.appendChild(socialLink);
});

// Append all the elements to their respective parent elements
contactDiv.appendChild(h2Element);
contactDiv.appendChild(midFlexDiv);
midFlexDiv.appendChild(imageElement);
midFlexDiv.appendChild(spanDiv);
spanDiv.appendChild(span1Element);
spanDiv.appendChild(span2Element);
span2Element.appendChild(h4Element);
span2Element.appendChild(hoursDiv);
contactDiv.appendChild(socialsDiv);

// Finally, add the "contact" div to the document body or any other parent element.
const contentDiv = document.getElementById("content");
	contentDiv.appendChild(contactDiv);
}

export default contactLink