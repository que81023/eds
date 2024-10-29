
export default function decorate(block){
   
    // Select the element with class '.adventure h2#climbing-new-zealand'
    const targetHeading = document.querySelector('.adventure h2#climbing-new-zealand');

    // Select the first <p> element
    const targetParagraph = targetHeading.nextElementSibling;

    // Select the <p> element with the class "button-container"
    const targetButtonContainer = document.querySelector('.adventure p.button-container');

    // Create a new <div> element
    const newDiv = document.createElement('div');
    //newDiv.textContent = 'This is the new wrapping div!'; // Optional content for the new div

    // Insert the new <div> before the <h2>
    targetHeading.parentNode.insertBefore(newDiv, targetHeading);

    // Move the <h2>, the first <p>, and the button container into the new <div>
    newDiv.appendChild(targetHeading);
    newDiv.appendChild(targetParagraph);
    newDiv.appendChild(targetButtonContainer);
}