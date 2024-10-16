// order.js

let orderListHTML = document.getElementById('order-list');

// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem('checkoutCart'));

// Fetch product data
fetch('/frontend/data/products.json')
    .then(response => response.json())
    .then(data => {
        let products = data.products; // Array of products

        // Function to display order items
        const displayOrderItems = () => {
            if (cart && cart.length > 0) {
                cart.forEach(item => {
                    // Find product info using product_id
                    let product = products.find(product => product.id == item.product_id);
                    if (product) {
                        let orderItem = document.createElement('div');
                        orderItem.classList.add('order-item');
                        orderItem.innerHTML = `
                            <img src="${product.url}" alt="${product.title}" style="padding: 10px;">
                            <div class="order-details">
                                <p><strong>${product.name}</strong></p>
                                <p>Price: ₹${product.price}</p>
                                <p>Quantity: ${item.quantity}</p>
                                <p>Total: ₹${product.price * item.quantity}</p>
                                <a href="invoice.html?product_id=${item.product_id}&title=${encodeURIComponent(product.title)}&price=${product.price}&quantity=${item.quantity}&url=${encodeURIComponent(product.url)}" class="download-invoice" style="padding: 8px 12px;">Download Invoice</a>
                                <a href="trackorder.html?product_id=${item.product_id}&title=${encodeURIComponent(product.title)}&price=${product.price}&quantity=${item.quantity}&url=${encodeURIComponent(product.url)}" class="track-order" style="padding: 8px 12px;">Track Order</a>
                            </div>
                        `;
                        orderListHTML.appendChild(orderItem);
                    }
                });
            } else {
                orderListHTML.innerHTML = '<p>Your cart is empty.</p>';
            }
        };

        displayOrderItems();
    })
    .catch(error => console.error('Error fetching product data:', error));

// Submit feedback functionality
document.getElementById('submit-feedback').addEventListener('click', () => {
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim()) {
        alert('Feedback submitted: ' + feedback);
        document.getElementById('feedback').value = ''; // Clear feedback after submission
    } else {
        alert('Please enter your feedback before submitting.');
    }
});
