export default async function decorate(block){
    // const h5Element = document.querySelector('.cards-card-body h5');

    // // Create a new div element
    // const newDiv = document.createElement('div');

    // // Insert the new div after the h5 element
    // h5Element.insertAdjacentElement('afterend', newDiv);
    // newDiv.classList.add('socialMedia-link');


// Select all div elements with the class 'cards-card-body'
const cardImages = document.querySelectorAll('div h5');
console.log(cardImages);

// Loop through each div and append a new child element
cardImages.forEach(cardImage => {
    const newChild = document.createElement('div');
    newChild.classList.add('socialMedia-link');
    console.log(cardImage);
    // Append the new child element to the current cardImage div
    cardImage.appendChild(newChild);
     // Create an array of social media platforms and their links
    const socialLinks = [
    { url: 'https://www.facebook.com', icon: 'Facebook Icon' },
    { url: 'https://www.twitter.com', icon: 'Twitter Icon' },
    { url: 'https://www.instagram.com', icon: 'Instagram Icon' },
    ];
    // Loop through the array and create spans with anchors
    socialLinks.forEach(link => {
        const anchor = document.createElement('a'); // Create an anchor element
        const span = document.createElement('span'); // Create a span element
        
        anchor.href = link.url; // Set the href attribute
        anchor.title = link.icon; // Optionally, set the title for the anchor

        anchor.appendChild(span); // Append the anchor to the span
        newChild.appendChild(anchor); // Append the span to the list item
    });

});
}