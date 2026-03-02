// Store selection and redirect
function selectDress(name, price) {
    localStorage.setItem('booking_name', name);
    localStorage.setItem('booking_price', price);
    window.location.href = 'booking.html';
}

// Populate booking details
window.onload = () => {
    const itemName = document.getElementById('item-name');
    const itemPrice = document.getElementById('item-price');

    if (itemName && itemPrice) {
        itemName.innerText = localStorage.getItem('booking_name') || "Selection Empty";
        itemPrice.innerText = "₹" + (localStorage.getItem('booking_price') || "0");
    }
};

// Form submission handler
const payForm = document.getElementById('payForm');
if (payForm) {
    payForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dress = localStorage.getItem('booking_name');
        alert(`✨ Success! Your reservation for the ${dress} is confirmed. Check your email for pickup details.`);
        localStorage.clear();
        window.location.href = 'index.html';
    });
}
