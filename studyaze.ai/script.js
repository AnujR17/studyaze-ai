document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const catalogParent = document.querySelector('.catalog-parent');
    const signInParent = document.querySelector('.sign-in-parent');

    mobileToggle.addEventListener('click', function() {
        catalogParent.classList.toggle('active');
        signInParent.classList.toggle('active');
        mobileToggle.textContent = mobileToggle.textContent === 'Menu' ? 'Close' : 'Menu';
    });
});