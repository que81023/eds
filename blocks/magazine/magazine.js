export default async function decorate(block){
    const result = await fetch('/magazine/query-index.json')
    .then(response => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON data
    })
    .then(result => {
        console.log(result);
        console.log(result.data);
        let cardsData = result.data;
        console.log(cardsData);
        const cartWrapper = document.querySelector('.dynamic-card .cards-wrapper');

        // Create the unordered list element
        const cardsBlock = document.createElement('div');
        cardsBlock.className = 'cards block';// Replace with your actual endpoint

        const ul = document.createElement('ul');
        // Loop through the data to create each card
        cardsData.forEach(card => {
            const li = document.createElement('li');

            const cardImageDiv = document.createElement('div');
            cardImageDiv.className = 'cards-card-image';

            const picture = document.createElement('picture');

            const source = document.createElement('source');
            source.type = 'image/webp';
            source.srcset = card.image;
            
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.alt = card.title;
            img.src = card.image;

            // Append elements
            picture.appendChild(source);
            picture.appendChild(img);
            cardImageDiv.appendChild(picture);

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'cards-card-body';

            const titleParagraph = document.createElement('p');
            titleParagraph.textContent = card.title;

            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = card.description;

            // Append title and description to card body
            cardBodyDiv.appendChild(titleParagraph);
            cardBodyDiv.appendChild(descriptionParagraph);

            // Append image and body to list item
            li.appendChild(cardImageDiv);
            li.appendChild(cardBodyDiv);

            // Append list item to the unordered list
            ul.appendChild(li);
        });

    // Append the unordered list to the any other container
    cardsBlock.appendChild(ul);
    cartWrapper.appendChild(cardsBlock);

    })
}