const frontPage = () => {
	console.log("FrontPage.JS loaded!");
  // Find the existing 'content' div
  const contentDiv = document.getElementById("content");

  // Create a header element and set its text content
  const header = document.createElement("header");
  const headerText = document.createElement("h2");
  headerText.textContent = "Frog Cafe";
  header.appendChild(headerText);

  // Create an image element and set its source
  const image = document.createElement("img");
  image.src = "/images/jungle_cuisine.jpg";

  // Create the first paragraph with strong text
  const paragraph1 = document.createElement("p");
  const strongText = document.createElement("strong");
  strongText.textContent =
    "Frog Cafe serves the healthiest grub from the jungle";
  paragraph1.appendChild(strongText);

  // Create the second paragraph
  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Whether you're serious about your body's temple or you just want a feed, our chefs know the good from the bad";

  // Append all elements to the existing 'content' div
  contentDiv.appendChild(header);
  contentDiv.appendChild(image);
  contentDiv.appendChild(paragraph1);
  contentDiv.appendChild(paragraph2);
};

export default frontPage;
