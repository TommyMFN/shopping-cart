
function openModal() {
    document.getElementById("cartModal").style.display = "block";
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}


function addToCart(element) {
    let itemName = element.parentNode.parentNode.querySelector("td:first-child").textContent;
    let itemPrice = parseFloat(element.parentNode.parentNode.querySelector("td:nth-child(2)").textContent.slice(1));
    const cartItems = document.querySelectorAll('li');
    let total = 0;
    const cartTotal = document.getElementById('cartTotal');
    
    
    
    console.log(itemName, itemPrice);

    // loop through cartitems and add each one by one
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].textContent === 'Empty') {
            cartItems[i].textContent = `${itemName} ${itemPrice}`
            break;
        }
    }

    cartItems.forEach(cartItem => {
        if (cartItem.textContent !== 'Empty') {
          total += itemPrice;
        }
      });
      
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    
}

