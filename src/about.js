const aboutLink = () => {

	console.log("about.js loaded!")
	const aboutDiv = document.createElement("div");
	aboutDiv.id = "about";
	aboutDiv.className = "tabcontent";
  
	const img = document.createElement("img");
	img.src = "./images/jungle_cuisine.jpg";
  
	const h2 = document.createElement("h2");
	h2.innerHTML = "<strong><em>From lilypad to lilyplate </em></strong>🌺🐸";
  
	const p1 = document.createElement("p");
	p1.textContent =
	  "Unearth the enchanting flavors of Frog Cafe, Lima's flavorful oasis since 2019. Nestled amidst the vibrant cityscape, our jungle-themed haven is where healthy meets wild. We're passionate about crafting nourishing dishes that take your taste buds on a journey into the heart of the Amazon.";
  
	const p2 = document.createElement("p");
	p2.textContent =
	  "Our menu is a celebration of nutritionally functional ingredients and powerful plants traditionally used by Amazonian communities. From vibrant salads bursting with superfoods to tropical smoothie bowls brimming with vitality, each bite is a tribute to the wisdom of the rainforest.";
  
	const p3 = document.createElement("p");
	p3.textContent =
	  "As you savor our dishes, you'll be surrounded by lush greenery, creating an immersive dining experience that transports you straight into the jungle. Join us at Frog Cafe for a culinary adventure like no other, where fresh, wholesome, and delicious food awaits. 🌿🐸🍴🌱";
  
	aboutDiv.appendChild(img);
	aboutDiv.appendChild(h2);
	aboutDiv.appendChild(p1);
	aboutDiv.appendChild(p2);
	aboutDiv.appendChild(p3);

	const contentDiv = document.getElementById("content");
	contentDiv.appendChild(aboutDiv);
}

export default aboutLink