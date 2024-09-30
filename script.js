// script.js
document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById('productGrid');
    const productModal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalQuantity = document.getElementById('modalQuantity');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('searchInput');
  let icons =document.getElementById('icons')
  
   
   
    
    // Fetch and display products
    fetch('https://fakestoreapi.com/products')
        .then(response => 
      
         response.json())
        .then(products => {
            displayProducts(products);

            // Add search functionality
            searchInput.addEventListener('input', (event) => {
                const searchTerm = event.target.value.toLowerCase();
                const filteredProducts = products.filter(product =>
                    product.title.toLowerCase().includes(searchTerm)
                );
                displayProducts(filteredProducts);
            });
        });

    function displayProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'pdetails';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="pimg">
                <h3 class="ptitle ">${product.title}</h3>
                <p class="pprice">$${product.price}</p>
                <button id="card"  class="pbtn">add curt </button>
            `;
            
      console.log(productCard);
      
    
    
            productCard.addEventListener('click', () => openModal(product));
            productGrid.appendChild(productCard);
        });
    } 

    
     
    
     

   

    function openModal(product) {
        


       modalTitle.textContent = product.title;
       modalDescription.textContent = product.description;
        modalQuantity.textContent = `Quantity: ${product.rating.count}`;
       
       
        
        // productModal.classList.remove('modal-close-btn');
    }


    // function showModal() {
    //     productModal.style.display = 'flex';
    // }
    
    // Close the modal (set display to none)
    // closeModal.addEventListener('click', () => {
    //     productModal.style.display = 'none';
    // });

    // closeModal.addEventListener('click', (event) => {
        // productModal.classList.add('modal-close-btn');
        // if (event.target ==productModal) {
        //     productModal.style.display = 'none';
        // }
        
    // });
});



// add card

