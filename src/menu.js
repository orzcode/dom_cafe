const menuLink = () => {
	console.log("menuLink.js loaded!")
// Create the menu container
const menuContainer = document.createElement('div');
menuContainer.id = 'menu';

// Create the menu header
const menuHeader = document.createElement('h2');
menuHeader.textContent = 'Menu';

// Create the menu groups
const menuGroup1 = document.createElement('div');
menuGroup1.className = 'menugroup';

const menuGroup2 = document.createElement('div');
menuGroup2.className = 'menugroup';

// Create food items for menu group 1
const foodItem1 = createFoodItem('Jungle Bliss Bowl', '$16', 'A colorful bowl filled with acai, dragon fruit, and fresh berries, topped with granola and honey. A delightful explosion of flavors and textures.');

const foodItem2 = createFoodItem('Amazonian Avocado Salad', '$14', 'Fresh avocados, mixed greens, roasted plantains, and a tangy passion fruit vinaigrette. A refreshing and nutritious starter.');

const foodItem3 = createFoodItem("Froggy's Rainforest Wrap", '$12', 'A hearty wrap with grilled chicken, black beans, tropical salsa, and avocado. Served with a side of yam fries for that extra crunch.');

const foodItem4 = createFoodItem("Froggy's Blissful Banana Split", '$9', 'A playful dessert featuring caramelized bananas, scoops of acai sorbet, and a sprinkle of toasted coconut. A sweet ending to your meal.');

menuGroup1.appendChild(foodItem1);
menuGroup1.appendChild(foodItem2);
menuGroup1.appendChild(foodItem3);
menuGroup1.appendChild(foodItem4);

// Create a divider between menu groups
const divider = document.createElement('div');
divider.className = 'divider';

// Create food items for menu group 2
const foodItem5 = createFoodItem('Toucan Tango Smoothie', '$8', 'A tropical blend of mango, pineapple, coconut milk, and a hint of lime. Perfect for a refreshing sip on a hot day.');

const foodItem6 = createFoodItem('Jungle Heat Quinoa Bowl', '$12', 'A protein-packed quinoa bowl with sautéed kale, black beans, roasted sweet potatoes, and a zesty chimichurri sauce.');

const foodItem7 = createFoodItem('Cocoa Delight Pancakes', '$15', 'Fluffy chocolate-infused pancakes topped with fresh banana slices and drizzled with pure cacao sauce. A sweet treat for breakfast.');

const foodItem8 = createFoodItem('Amazon Adventure Pizza', '$18', 'A unique pizza with a cassava flour crust, topped with grilled plantains, roasted vegetables, and a creamy coconut curry sauce.');

menuGroup2.appendChild(foodItem5);
menuGroup2.appendChild(foodItem6);
menuGroup2.appendChild(foodItem7);
menuGroup2.appendChild(foodItem8);

// Append menu elements to the menu container
menuContainer.appendChild(menuHeader);
menuContainer.appendChild(menuGroup1);
menuContainer.appendChild(divider);
menuContainer.appendChild(menuGroup2);

// Append the menu container to the existing #content container
const contentContainer = document.getElementById('content');
contentContainer.appendChild(menuContainer);
menuContainer.className = "tabcontent";

// Helper function to create food item elements
function createFoodItem(name, price, description) {
  const foodItem = document.createElement('div');
  foodItem.className = 'foodItem';

  const span = document.createElement('span');
  const nameHeader = document.createElement('h3');
  nameHeader.textContent = name;
  const priceHeader = document.createElement('h3');
  priceHeader.textContent = price;

  span.appendChild(nameHeader);
  span.appendChild(priceHeader);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = description;

  foodItem.appendChild(span);
  foodItem.appendChild(descriptionParagraph);

  return foodItem;
}

}

export default menuLink