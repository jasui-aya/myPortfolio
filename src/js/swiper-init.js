let mySwiper1 = new Swiper ('.swiper1', {

  // オプション設定
  loop: true,

  // 以下のコードは省略可能
  //ページネーション表示設定
  pagination: {
    el: '.swiper-pagination', //ページネーション要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },




    breakpoints: {  
    768: {
      slidesPerView: 2,
    },
  
    1080: {
      slidesPerView: 3,
    }
  }
});

let mySwiper2 = new Swiper ('.swiper2', {
  
  // オプション設定
  loop: true,
  slidesPerView: 3,
  spaceBetween: 7,

  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
      enabled: false,
    }
  },

  // 以下のコードは省略可能
  //ページネーション表示設定
  pagination: {
    el: '.swiper-pagination', //ページネーション要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },

});
