fetch('https://raw.githubusercontent.com/Hackerabad/ABCD2/main/Day1/data.json')
  .then(response => response.json())
  .then(data => {
    const commentCardsRow = document.getElementById('commentCardsRow');

    data.forEach(comment => {
      const col = document.createElement('div');
      col.className = 'col-xs-12 col-sm-6 col-md-3 col-lg-3';

      const cardFlyer = document.createElement('div');
      cardFlyer.className = 'card-flyer';

      const textBox = document.createElement('div');
      textBox.className = 'text-box';

      const imageBox = document.createElement('div');
      imageBox.className = 'image-box';

      const img = document.createElement('img');
      getRandomImage()
        .then(url => {
          img.src = url;
        });

      const textContainer = document.createElement('div');
      textContainer.className = 'text-container';

      const title = document.createElement('h6');
      title.textContent = comment.name;

      const email = document.createElement('p');
      email.textContent = comment.email;

      const commentText = document.createElement('p');
      commentText.textContent = comment.comment;

      textContainer.appendChild(title);
      textContainer.appendChild(email);
      textContainer.appendChild(commentText);

      imageBox.appendChild(img);

      textBox.appendChild(imageBox);
      textBox.appendChild(textContainer);

      cardFlyer.appendChild(textBox);
      col.appendChild(cardFlyer);

      commentCardsRow.appendChild(col);
    });
  })
  .catch(error => console.error('Error fetching JSON data:', error));

async function getRandomImage() {
  const response = await fetch('https://source.unsplash.com/random/400x200/?people');
  const url = response.url;
  return url;
}
