/*
 * Common JavaScript for the love website.
 * This file handles interactions on the index page (question page) and the
 * theatre page (page2). It relies on classes set on the <body> element to
 * determine which behaviour to enable.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Index page interactions
  if (document.body.classList.contains('index')) {
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const sadCat = document.getElementById('sad-cat');

    if (yesBtn && noBtn && sadCat) {
      yesBtn.addEventListener('click', () => {
        // Trigger a subtle fade out animation
        document.body.classList.add('yes-clicked');
        // Disable buttons to prevent further interaction
        yesBtn.disabled = true;
        noBtn.disabled = true;
        // After a short pause, redirect to the next page
        setTimeout(() => {
          window.location.href = 'page2.html';
        }, 1800);
      });

      noBtn.addEventListener('click', () => {
        // Reveal the sad cat overlay
        sadCat.classList.remove('hidden');
        // Randomly reposition the "Нет" button within the viewport
        const randomX = Math.floor(Math.random() * 60) + 10; // between 10% and 70%
        const randomY = Math.floor(Math.random() * 50) + 20; // between 20% and 70%
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + '%';
        noBtn.style.top = randomY + '%';
      });
    }
  }

  // Page 2 (theatre) interactions
  if (document.body.classList.contains('page2')) {
    // Allow the curtains to slide open after the page has loaded
    setTimeout(() => {
      document.body.classList.add('ready');
    }, 500);
  }
});