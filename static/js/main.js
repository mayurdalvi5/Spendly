// main.js — students will add JavaScript here as features are built

(function () {
    const modal   = document.getElementById('video-modal');
    const openBtn = document.getElementById('open-video-modal');
    const closeBtn = document.getElementById('close-video-modal');
    const iframe  = document.getElementById('video-iframe');

    if (!modal) return;

    function openModal() {
        iframe.src = iframe.dataset.src;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        // Stop video by clearing src, then restore data-src for next open
        iframe.src = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Close on backdrop click (but not on the modal box itself)
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
}());

