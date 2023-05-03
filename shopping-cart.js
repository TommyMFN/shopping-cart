
function openModal() {
    document.getElementById("cartModal").style.display = "block";
}

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

function addToCart(element) {
    let itemName = element.parentNode.parentNode.querySelector("td:first-child").textContent;
    let itemPrice = element.parentNode.parentNode.querySelector("td:nth-child(2)").textContent;

    console.log(itemName, itemPrice);

    // change empty to element's nname
    let empty = document.querySelector('li:first-child');
    const newItem = empty.textContent = itemName;
   // console.log(newItem);
}