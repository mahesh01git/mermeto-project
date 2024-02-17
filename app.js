// script.js

// Fetch data from API

fetch('https://products-api-2ttf.onrender.com/api/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the data and create HTML elements
    
    const productListDiv = document.getElementById('product-list');
    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      const img =`<img src=${product.image} alt="Description of the image">`;
      productDiv.innerHTML = `
        <h2>${product.title}</h2>
        ${img}
        
      `;
      productListDiv.appendChild(productDiv);
    });
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });
