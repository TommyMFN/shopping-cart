
function openModal() {
    document.getElementById("cartModal").style.display = "block";
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

function addToCart(element) {
    let itemName = element.parentNode.parentNode.querySelector("td:first-child").textContent;
    let itemPrice = element.parentNode.parentNode.querySelector("td:nth-child(2)").textContent;
    const cartItems = document.querySelectorAll('ul li');

    console.log(itemName, itemPrice);

    // loop through cartitems and add each one by one
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].textContent === 'Empty') {
            cartItems[i].textContent = itemName;
            break;
        }
    }
   
}