document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('index')) {
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const sadCat = document.getElementById('sad-cat');
    const angryCat = document.getElementById('angry-cat');

    let noClicks = 0;

    function moveNoButton() {
      const margin = 14;
      const buttonWidth = noBtn.offsetWidth;
      const buttonHeight = noBtn.offsetHeight;

      const maxX = Math.max(margin, window.innerWidth - buttonWidth - margin);
      const maxY = Math.max(margin, window.innerHeight - buttonHeight - margin);

      let x;
      let y;
      let attempts = 0;

      do {
        x = Math.floor(Math.random() * (maxX - margin + 1)) + margin;
        y = Math.floor(Math.random() * (maxY - margin + 1)) + margin;
        attempts += 1;
      } while (
        x > window.innerWidth * 0.16 &&
        x < window.innerWidth * 0.84 &&
        y > window.innerHeight * 0.26 &&
        y < window.innerHeight * 0.88 &&
        attempts < 30
      );

      noBtn.style.position = 'fixed';
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
      noBtn.style.zIndex = '40';
    }

    if (yesBtn && noBtn && sadCat) {
      yesBtn.addEventListener('click', () => {
        document.body.classList.add('yes-clicked');

        yesBtn.disabled = true;
        noBtn.disabled = true;

        setTimeout(() => {
          window.location.href = 'page2.html';
        }, 1800);
      });

      noBtn.addEventListener('click', () => {
        noClicks += 1;

        /* Первые три нажатия — грустный котик */
        if (noClicks < 4) {
          sadCat.classList.remove('hidden');

          if (angryCat) {
            angryCat.classList.add('hidden');
          }
        }

        /* Четвёртое и следующие нажатия — сердитый котик */
        if (noClicks >= 4 && angryCat) {
          sadCat.classList.add('hidden');
          angryCat.classList.remove('hidden');

          angryCat.classList.remove('angry-show');
          void angryCat.offsetWidth;
          angryCat.classList.add('angry-show');
        }

        moveNoButton();
      });
    }
  }

  if (document.body.classList.contains('page2')) {
    setTimeout(() => {
      document.body.classList.add('ready');
    }, 500);
  }
});
