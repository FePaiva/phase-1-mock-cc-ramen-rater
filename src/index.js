// write your code here

const init = () => {
  fetch("http://localhost:3000/ramens")
      .then(response => response.json())
      .then(data => (displayRamens(data)))

  const form = document.getElementById('new-ramen');

  form.addEventListener('submit', (e) => {

      e.preventDefault();

      const ramenObj = {}
      ramenObj.name = document.getElementById('new-name').value;
      ramenObj.restaurant = document.getElementById('new-restaurant').value;
      ramenObj.image = document.getElementById('new-image').value;
      ramenObj.rating = document.getElementById('new-rating').value;
      ramenObj.comment = document.getElementById('new-comment').value;

      displayRamen(ramenObj)       
  })
}

function displayRamen(ramen){

  //grab the element to which you want to add ramens images to
  const ramenMenu = document.getElementById('ramen-menu');

  //create the image element each time
  const image = document.createElement('img');
  image.src = ramen.image;

  image.addEventListener('click', () => {
      document.querySelector('.detail-image').src = ramen.image;
      document.querySelector('.name').innerHTML = ramen.name;
      document.querySelector('.restaurant').innerHTML = ramen.restaurant;
      document.querySelector('#rating-display').innerHTML = ramen.rating;
      document.querySelector('#comment-display').innerHTML = ramen.comment;
  })

  //append the image
  ramenMenu.appendChild(image);
}

function displayRamens(ramens){

  //iterate the array of ramens
  ramens.forEach(ramen => {

      displayRamen(ramen);

  });
}

document.addEventListener("DOMContentLoaded", init)


// Click on an image from the `#ramen-menu` div and see all the info about that
// ramen displayed inside the `#ramen-detail` div and where it says
// `insert comment here` and `insert rating here`.