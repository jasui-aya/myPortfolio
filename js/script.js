console.log("読み込めたよ");

document.addEventListener("DOMContentLoaded", function () {
  // ----------------- アコーディオン ------------------
  const faqItems = document.querySelectorAll(".top_faq_item");
  faqItems.forEach(item => {
    const button = item.querySelector(".faq_box");
    const icon = item.querySelector(".faq_accordion-icon");
    const answer = item.querySelector(".faq_answer");

    button.addEventListener("click", () => {
      item.classList.toggle("is-active");
      answer.classList.toggle("is-active");
    });
  });

  // -------------- ハンバーガーメニュー --------------
  const ham = document.querySelector("#js-hamburger");
  const nav = document.querySelector("#js-hamburger-nav");
  ham.addEventListener("click", () => {
    ham.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });

// リンク押したら閉じる
  document.querySelectorAll("#js-hamburger-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-active");
      ham.classList.remove("is-active");
    });
  });

  
  // -------------- pageTopボタン --------------
  const pageTop = document.querySelector("#pageTop");
  const jsFooter = document.querySelector("#jsFooter");

  window.addEventListener("scroll", () => {
    const footerPosition = jsFooter.getBoundingClientRect().top;
    if (window.scrollY > 100) {
      pageTop.classList.add("is-show");
    } else {
      pageTop.classList.remove("is-show");
    }
    if (footerPosition < window.innerHeight) {
      pageTop.classList.remove("is-show");
    }
  });

  if (pageTop) {
    pageTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // -------------- スマホボタン（色変化） --------------
  const lessonButton = document.querySelector('.m_button-lesson');
  if (lessonButton) {
    lessonButton.addEventListener('click', function () {
      this.classList.toggle('is-active');
    });
  }

  // -------------- flatpickr --------------
  flatpickr("#flatpickr", {
    locale: flatpickr.l10ns.ja,
    allowInput: true,
    dateFormat: "Y-m-d H:i",
    enableTime: true,
    time_24hr: true,
    minTime: "10:00",
    maxTime: "19:00",
    disableMobile: true, 
    // スマホでカレンダーが消えないようにするやつ↑
  });
});
