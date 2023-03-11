const menuList = document.getElementById('menu-list');
const menuItems = menuList.getElementsByTagName('li');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    // Do something when menu item is clicked
    console.log('Clicked on ' + this.textContent);
  });
}


const orderBtn = document.getElementById('order-btn');

orderBtn.addEventListener('click', function() {
  // Do something when button is clicked
  console.log('Order now button clicked');
  // You can add code here to display a modal or redirect to a new page
});


// Toggle mobile navigation menu
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Smooth scroll to anchor links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.hash);
    const targetTop = target.offsetTop - 70;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    menuBtn.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// Gallery modal
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    modalImage.setAttribute('src', src);
    modal.classList.add('open');
  });
});

const paymentForm = document.querySelector('#payment-form');
const paymentAmountInput = document.querySelector('#payment-amount');
const paymentSubmitButton = document.querySelector('#payment-submit-button');
const paymentConfirmationMessage = document.querySelector('#payment-confirmation-message');

paymentForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const paymentAmount = parseFloat(paymentAmountInput.value);
  
  // Send payment request to server using AJAX or fetch API
  
  // Simulate successful payment confirmation message
  paymentAmountInput.value = '';
  paymentConfirmationMessage.innerHTML = `Thank you for your payment of $${paymentAmount.toFixed(2)}!`;
  paymentConfirmationMessage.style.display = 'block';
});




modal.addEventListener('click', () => {
  modal.classList.remove('open');
});
