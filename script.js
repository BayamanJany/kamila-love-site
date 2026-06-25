document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const sadCat = document.getElementById("sad-cat");

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      document.body.classList.add("yes-clicked");

      setTimeout(() => {
        window.location.href = "page2.html";
      }, 1200);
    });
  }

  if (noBtn) {
    noBtn.addEventListener("click", () => {
      document.body.classList.add("no-clicked");

      if (sadCat) {
        sadCat.classList.remove("hidden");
      }
    });
  }

  if (document.body.classList.contains("page2")) {
    setTimeout(() => {
      document.body.classList.add("ready");
    }, 500);
  }
});
