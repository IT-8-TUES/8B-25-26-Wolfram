function initShopSearch() {
    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item');
    const modal = document.getElementById('recipeModal');
    const modalMushroomName = document.getElementById('modalMushroomName');
    const modalYes = document.getElementById('modalYes');
    const modalNo = document.getElementById('modalNo');
    let selectedMushroom = '';

    console.log('shop.js: initShopSearch run, items found =', items.length);

    if (!searchInput) {
        console.warn('shop.js: search input not found');
        return;
    }

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        items.forEach(item => {
            const nameEl = item.querySelector('h3');
            const priceEl = item.querySelector('p');
            const productName = nameEl ? nameEl.textContent.toLowerCase() : '';
            const productPrice = priceEl ? priceEl.textContent.toLowerCase() : '';

            if (productName.includes(searchTerm) || productPrice.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    items.forEach(item => {
        item.addEventListener('click', function() {
            const mushroomName = this.querySelector('h3').textContent;
            selectedMushroom = mushroomName;
            modalMushroomName.textContent = mushroomName;
            modal.classList.add('active');
        });
    });

    // Modal Yes button
    modalYes.addEventListener('click', function() {
        const recipePage = 'Recepies.html';
        window.location.href = recipePage + '?mushroom=' + encodeURIComponent(selectedMushroom);
    });

    // Modal No button
    modalNo.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopSearch);
} else {
    initShopSearch();
}
