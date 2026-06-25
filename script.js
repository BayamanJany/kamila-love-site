document.addEventListener('DOMContentLoaded', () => {
  // Главная страница
  if (document.body.classList.contains('index')) {
    const yesBtn = document.getElementById('yes');
    const noBtn = document.getElementById('no');
    const sadCat = document.getElementById('sad-cat');
    const angryCat = document.getElementById('angry-cat');
    const happyCat = document.getElementById('happy-cat');

    let noClicks = 0;

    if (yesBtn && noBtn && sadCat) {
      yesBtn.addEventListener('click', () => {
        yesBtn.disabled = true;
        noBtn.disabled = true;

        // Убираем грустного и сердитого котика
        sadCat.classList.add('hidden');

        if (angryCat) {
          angryCat.classList.add('hidden');
        }

        // Показываем счастливого котика
        if (happyCat) {
          happyCat.classList.remove('hidden');
          happyCat.classList.add('happy-show');
        }

        // Через время плавно переходим на следующую страницу
        setTimeout(() => {
          document.body.classList.add('yes-clicked');
        }, 1300);

        setTimeout(() => {
          window.location.href = 'page2.html';
        }, 1900);
      });

      noBtn.addEventListener('click', () => {
        noClicks += 1;

        // Грустный котик появляется после первого нажатия
        sadCat.classList.remove('hidden');

        // На четвёртое нажатие появляется сердитый котик
        if (noClicks >= 4 && angryCat) {
          angryCat.classList.remove('hidden');
          angryCat.classList.add('angry-show');

          setTimeout(() => {
            angryCat.classList.remove('angry-show');
          }, 700);
        }

        // Кнопка «Нет» каждый раз убегает в новое место
        const randomX = Math.floor(Math.random() * 70) + 5;
        const randomY = Math.floor(Math.random() * 60) + 15;

        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + '%';
        noBtn.style.top = randomY + '%';
        noBtn.style.zIndex = '20';
      });
    }
  }

  // Театральная страница: раскрытие штор
  if (document.body.classList.contains('page2')) {
    setTimeout(() => {
      document.body.classList.add('ready');
    }, 500);
  }
});
