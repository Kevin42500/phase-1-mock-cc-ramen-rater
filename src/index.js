// write your code here
  document.getElementById('new-ramen').addEventListener('submit', function (event) {
    event.preventDefault();

    const newName = document.getElementById('new-name').value;
    const newRestaurant = document.getElementById('new-restaurant').value;
    const newImage = document.getElementById('new-image').value;
    const newRating = document.getElementById('new-rating').value;
    const newComment = document.getElementById('new-comment').value;

    const newRamenItem = document.createElement('div');
    newRamenItem.classList.add('ramen-item');

    const newRamenImage = document.createElement('img');
    newRamenImage.classList.add('detail-image');
    newRamenImage.src = newImage || './assets/image-placeholder.jpg';
    newRamenImage.alt = newName || 'Insert Name Here';
    newRamenItem.appendChild(newRamenImage);

    const newRamenName = document.createElement('h2');
    newRamenName.classList.add('name');
    newRamenName.textContent = newName || 'Insert Name Here';
    newRamenItem.appendChild(newRamenName);

    const newRamenRestaurant = document.createElement('h3');
    newRamenRestaurant.classList.add('restaurant');
    newRamenRestaurant.textContent = newRestaurant || 'Insert Restaurant Here';
    newRamenItem.appendChild(newRamenRestaurant);

    document.getElementById('ramen-menu').appendChild(newRamenItem);

    document.getElementById('new-ramen').reset();
  });

  document.getElementById('ramen-menu').addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('ramen-item')) {
      const name = target.querySelector('.name').textContent;
      const restaurant = target.querySelector('.restaurant').textContent;
      const image = target.querySelector('img').src;
      const rating = target.dataset.rating || 'Insert rating here';
      const comment = target.dataset.comment || 'Insert comment here';

      document.querySelector('#ramen-detail img').src = image;
      document.querySelector('#ramen-detail .name').textContent = name;
      document.querySelector('#ramen-detail .restaurant').textContent = restaurant;
      document.querySelector('#rating-display').textContent = rating;
      document.querySelector('#comment-display').textContent = comment;
    }
  });
