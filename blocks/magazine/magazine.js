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



        const cartWrapper = document.querySelector('.dynamic-card .cards-wrapper');

        // Create the unordered list element
        const cardsBlock = document.createElement('div');
        cardsBlock.className = 'cards block';// Replace with your actual endpoint

        const ul = document.createElement('ul');
        // Data for the cards
        // const cardsData = [
        //     {
        //         imageSrc: '/media_15b70829d99bc5ddd0347e0dd97bf37b8b46bb406.jpeg',
        //         imageAlt: 'Arctic Surfing',
        //         title: 'Arctic Surfing',
        //         description: 'We traveled to Northern Norway to document the joy of surfing in extreme, but breathtakingly beautiful conditions',
        //     },
        //     {
        //         imageSrc: '/media_12c3aa19239c40804d6fc9c7f4bf7eb63db505d70.jpeg',
        //         imageAlt: 'San Diego Surf Spots',
        //         title: 'San Diego Surf Spots',
        //         description: 'Best beach breaks',
        //     },
        //     {
        //         imageSrc: '/media_1ffd7a79b0d74bc5ea318f83c26667cdeffc19d93.jpeg',
        //         imageAlt: 'Ski Touring',
        //         title: 'Ski Touring',
        //         description: 'Learn about our ski touring experience and how it differs from traditional downhill skiing and even backcountry skiing.',
        //     },
        //     {
        //         imageSrc: '/media_16400db06ade528ad5662dabfbe0b1cbfa008fa38.png',
        //         imageAlt: 'Ultimate Guide to LA Skateparks',
        //         title: 'Ultimate Guide to LA Skateparks',
        //         description: 'Breaking down the top skate destinations in all of Los Angeles. You don\'t want to miss this!',
        //     },
        // ];

        // Loop through the data to create each card
        cardsData.forEach(card => {
            const li = document.createElement('li');

            const cardImageDiv = document.createElement('div');
            cardImageDiv.className = 'cards-card-image';

            const picture = document.createElement('picture');

            const source = document.createElement('source');
            //source.type = 'image/webp';
            source.srcset = card.image;
            
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.alt = card.imageAlt;
            img.src = "http://localhost:3000/magazine/media_1636a18bfcb2d3b9c6d21734214c9f62b7077d2db.jpeg?width=1200&format=pjpg&optimize=medium";

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

    // Append the unordered list to the body (or any other container)
     // Create the unordered list element
    cardsBlock.appendChild(ul);
    cartWrapper.appendChild(cardsBlock);

    })
}