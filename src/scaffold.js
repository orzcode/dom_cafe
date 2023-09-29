const scaffold = () => {
	console.log("scaffold.JS loaded!");

	const doc = document.implementation.createHTMLDocument('DOM Cafe');

	// Create the head
	const head = doc.createElement('head');
	const metaCharset = doc.createElement('meta');
	metaCharset.setAttribute('charset', 'UTF-8');
	const metaXUACompatible = doc.createElement('meta');
	metaXUACompatible.setAttribute('http-equiv', 'X-UA-Compatible');
	metaXUACompatible.setAttribute('content', 'IE=edge');
	const metaViewport = doc.createElement('meta');
	metaViewport.setAttribute('name', 'viewport');
	metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
	const linkStylesheet1 = doc.createElement('link');
	linkStylesheet1.setAttribute('rel', 'stylesheet');
	linkStylesheet1.setAttribute('href', 'styles.css');
	const linkStylesheet2 = doc.createElement('link');
	linkStylesheet2.setAttribute('rel', 'stylesheet');
	linkStylesheet2.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
	const linkStylesheet3 = doc.createElement('link');
	linkStylesheet3.setAttribute('rel', 'stylesheet');
	linkStylesheet3.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto|Oswald');
	const title = doc.createElement('title');
	title.textContent = 'DOM Cafe';
	const linkIcon = doc.createElement('link');
	linkIcon.setAttribute('rel', 'icon');
	linkIcon.setAttribute('type', 'image/x-icon');
	linkIcon.setAttribute('href', 'favicon.ico');
	
	head.appendChild(metaCharset);
	head.appendChild(metaXUACompatible);
	head.appendChild(metaViewport);
	head.appendChild(linkStylesheet1);
	head.appendChild(linkStylesheet2);
	head.appendChild(linkStylesheet3);
	head.appendChild(title);
	head.appendChild(linkIcon);
	
	// Create the body
	const body = doc.createElement('body');
	const container = doc.createElement('div');
	container.id = 'container';
	const header = doc.createElement('header');
	const h1 = doc.createElement('h1');
	h1.textContent = 'Frog Cafe';
	const nav = doc.createElement('nav');
	const ulAbout = doc.createElement('ul');
	ulAbout.textContent = 'About';
	const ulMenu = doc.createElement('ul');
	ulMenu.textContent = 'Menu';
	const ulContact = doc.createElement('ul');
	ulContact.textContent = 'Contact';
	
	nav.appendChild(ulAbout);
	nav.appendChild(ulMenu);
	nav.appendChild(ulContact);
	header.appendChild(h1);
	header.appendChild(nav);
	const main = doc.createElement('main');
	const contentDiv = doc.createElement('div');
	contentDiv.id = 'content';
	const footer = doc.createElement('footer');
	footer.textContent = 'Created by Orz ';
	const githubLink = doc.createElement('a');
	githubLink.href = 'https://github.com/orzcode';
	githubLink.target = '_blank';
	const githubIcon = doc.createElement('i');
	githubIcon.className = 'fa fa-github';
	githubLink.appendChild(githubIcon);
	footer.appendChild(githubLink);
	
	main.appendChild(contentDiv);
	container.appendChild(header);
	container.appendChild(main);
	container.appendChild(footer);
	body.appendChild(container);
	
	// Append the entire HTML structure to the document
	doc.documentElement.appendChild(head);
	doc.documentElement.appendChild(body);
	
	// Convert the document to a string and set it as the content of the current page
	document.documentElement.innerHTML = doc.documentElement.innerHTML;
};

export default scaffold;
