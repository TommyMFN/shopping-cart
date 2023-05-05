// Declare two variables to be used in addToCart() function
let storedItemPrice = '';
let total = 0;

// Define function to open cart modal
function openModal() {
    document.getElementById("cartModal").style.display = "block";
}

// Define function to close cart modal
function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

// Define function to add item to cart
function addToCart(element) {
    // Extract item name and price from table row of clicked add-to-cart button
    let itemName = element.parentNode.parentNode.querySelector("td:first-child").textContent;
    let itemPriceStr = element.parentNode.parentNode.querySelector("td:nth-child(2)").textContent;
    let itemPrice = parseFloat(itemPriceStr.slice(itemPriceStr.lastIndexOf('$') + 1));

    // Hardcode cart items and total DOM elements for simplicity
    const cartItems = [
        document.getElementById("cartItem1"),
        document.getElementById("cartItem2"),
        document.getElementById("cartItem3")
    ];
    const cartTotal = document.getElementById('cartTotal');
    
    // Log item name and price for testing
    console.log(itemName, itemPrice);
    
    // Add each item to empty space in cart
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].textContent === 'Empty') {
            cartItems[i].textContent = `${itemName} ${itemPrice}`;
            storedItemPrice = parseFloat(itemPrice); // Convert price string to number
            break;
        } else if (cartItems[i].textContent !== 'Empty') {
            total += storedItemPrice; // Add price of previously added item
            cartTotal.textContent =  `Total: $${total}`; // Update total text
        } 
        
    }
}
