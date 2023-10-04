const menuLink = () => {
// Create the main menu div
const menuDiv = document.createElement("div");
menuDiv.id = "menu";

// Create the menu title (h2 element)
const menuTitle = document.createElement("h2");
menuTitle.textContent = "Menu";

// Create the menu groups container div
const menuGroupsDiv = document.createElement("div");
menuGroupsDiv.classList.add("menugroup");

// Create an array of menu items
const menuItems = [
  {
    name: "Jungle Bliss Bowl",
    price: "$16",
    description: "A colorful bowl filled with acai, dragon fruit, and fresh berries, topped with granola and honey. A delightful explosion of flavors and textures.",
  },
  {
    name: "Amazonian Avocado Salad",
    price: "$14",
    description: "Fresh avocados, mixed greens, roasted plantains, and a tangy passion fruit vinaigrette. A refreshing and nutritious starter.",
  },
  {
    name: "Froggy's Rainforest Wrap",
    price: "$12",
    description: "A hearty wrap with grilled chicken, black beans, tropical salsa, and avocado. Served with a side of yam fries for that extra crunch.",
  },
  {
    name: "Froggy's Blissful Banana Split",
    price: "$9",
    description: "A playful dessert featuring caramelized bananas, scoops of acai sorbet, and a sprinkle of toasted coconut. A sweet ending to your meal.",
  },
  {
    name: "Toucan Tango Smoothie",
    price: "$8",
    description: "A tropical blend of mango, pineapple, coconut milk, and a hint of lime. Perfect for a refreshing sip on a hot day.",
  },
  {
    name: "Jungle Heat Quinoa Bowl",
    price: "$12",
    description: "A protein-packed quinoa bowl with sautéed kale, black beans, roasted sweet potatoes, and a zesty chimichurri sauce.",
  },
  {
    name: "Cocoa Delight Pancakes",
    price: "$15",
    description: "Fluffy chocolate-infused pancakes topped with fresh banana slices and drizzled with pure cacao sauce. A sweet treat for breakfast.",
  },
  {
    name: "Amazon Adventure Pizza",
    price: "$18",
    description: "A unique pizza with a cassava flour crust, topped with grilled plantains, roasted vegetables, and a creamy coconut curry sauce.",
  },
];

// Loop through the menu items and create the HTML structure for each
menuItems.forEach((item) => {
  const foodItemDiv = document.createElement("div");
  foodItemDiv.classList.add("foodItem");

  const spanElement = document.createElement("span");

  const itemName = document.createElement("h3");
  itemName.textContent = item.name;

  const itemPrice = document.createElement("h3");
  itemPrice.textContent = item.price;

  spanElement.appendChild(itemName);
  spanElement.appendChild(itemPrice);

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;

  foodItemDiv.appendChild(spanElement);
  foodItemDiv.appendChild(itemDescription);

  // Append the food item to the appropriate menu group
  if (menuItems.indexOf(item) < 4) {
    menuGroupsDiv.appendChild(foodItemDiv);
  } else {
    const divider = document.createElement("div");
    divider.classList.add("divider");
    menuGroupsDiv.appendChild(divider);
    menuGroupsDiv.appendChild(foodItemDiv);
  }
});

// Append everything to the existing module with the id "menu"
const existingMenuModule = document.getElementById("menu");
existingMenuModule.innerHTML = ""; // Clear existing content
existingMenuModule.appendChild(menuTitle);
existingMenuModule.appendChild(menuGroupsDiv);

const contentDiv = document.getElementById("content");
contentDiv.appendChild(menuDiv);
}

export default menuLink