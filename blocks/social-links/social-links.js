export default async function decorate(block){
    const h2Element = document.querySelector('h2');
    const newDiv = document.createElement('div');
    h2Element.insertAdjacentElement('afterend', newDiv);
    newDiv.classList.add('social-media');
    const socialLinks = [
        { url: 'https://www.facebook.com', icon: 'Facebook Icon' },
        { url: 'https://www.twitter.com', icon: 'Twitter Icon' },
        { url: 'https://www.instagram.com', icon: 'Instagram Icon' },
        { url: 'https://www.youtube.com', icon: 'Youtube Icon' },
        { url: 'https://in.linkedin.com', icon: 'Linked Icon' }
        ];
        // Loop through the array and create spans with anchors
        socialLinks.forEach(link => {
            const anchor = document.createElement('a'); // Create an anchor element
            const span = document.createElement('span'); // Create a span element
            
            anchor.href = link.url; // Set the href attribute
            anchor.title = link.icon; // Optionally, set the title for the anchor
    
            anchor.appendChild(span); // Append the anchor to the span
            newDiv.appendChild(anchor); // Append the span to the list item
        });
}