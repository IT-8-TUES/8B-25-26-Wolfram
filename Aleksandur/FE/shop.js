function initShopSearch() {
    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item');

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
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopSearch);
} else {
    initShopSearch();
}
