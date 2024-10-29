import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  // Select the two section divs
  const section1 = document.querySelector('footer div.section:nth-of-type(1)');
  const section2 = document.querySelector('footer div.section:nth-of-type(2)');
  const section3 = document.querySelector('footer div.section:nth-of-type(3)');
  // Create a new parent <div>
  const newParentDiv = document.createElement('div');
  newParentDiv.classList.add('container'); // Optional: Add a class for styling

  // Insert the new parent div before the first section
  section1.parentNode.insertBefore(newParentDiv, section1);

  // Move the two sections into the new parent div
  newParentDiv.appendChild(section1);
  newParentDiv.appendChild(section2);
  newParentDiv.appendChild(section3);

  //*add class in li 
   // Select the <li> element
  const followUsItem = document.querySelector('.footer .section:nth-of-type(3) ul li');

   // Add the class 'follow-us' to the <li>
  followUsItem.classList.add('follow-us');

   // Create an array of social media platforms and their links
   const socialLinks = [
       { url: 'https://www.facebook.com', icon: 'Facebook Icon' },
       { url: 'https://www.twitter.com', icon: 'Twitter Icon' },
       { url: 'https://www.instagram.com', icon: 'Instagram Icon' },
   ];
     // Loop through the array and create spans with anchors
     socialLinks.forEach(link => {
      const span = document.createElement('span'); // Create a span element
      const anchor = document.createElement('a'); // Create an anchor element

      anchor.href = link.url; // Set the href attribute
      anchor.textContent = link.name; // Set the text for the anchor
      anchor.title = link.icon; // Optionally, set the title for the anchor

      anchor.appendChild(span); // Append the anchor to the span
      followUsItem.appendChild(anchor); // Append the span to the list item

      // Add a space or separator (optional)
      //followUsItem.appendChild(document.createTextNode(' ')); // Add a space between links
  });
}
