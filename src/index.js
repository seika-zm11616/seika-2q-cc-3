import JustValidate from 'just-validate';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// 
// Swiper 1個目
// 
const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// タイトル要素を取得
let swiperTitleEl = document.getElementById('swiper-title');

//文字要素を作成
let textEl = document.createTextNode("スライド1を表示しています。");

// 文字要素を表示させる
swiperTitleEl.appendChild(textEl);

// スライドが切り替わった際の処理
swiper.on('slideChange', function () {
  // 1. 表示するテキストを準備
  const currentSliderIndex = swiper.realIndex + 1;
  const text = 'スライド' + currentSliderIndex + 'を表示しています。'

  // 2. 先に追加していた要素を削除する
  textEl.remove();

  // 3. 準備したテキストをHTMLにいれる
  // HTML側に入れ物を準備して、そこに挿入するコードを書く。
  textEl = document.createTextNode(text);
  swiperTitleEl.appendChild(textEl)
});

// 
// Swiper 2個目
// 
const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// タイトルリスト
let titleList = [
  "ブランコに乗っている女の子",
  "遊んでいる男の子",
  "ご飯を食べている家族",
]

// タイトル要素を取得
let swiperTitleEl2 = document.getElementById('swiper-title-2');

//文字要素を作成
let textEl2 = document.createTextNode(titleList[0]);

// 文字要素を表示させる
swiperTitleEl2.appendChild(textEl2);

// スライドが切り替わった際の処理
swiper2.on('slideChange', function () {
  // 1. 表示するテキストを準備
  const currentSliderIndex = swiper2.realIndex;
  const text = titleList[currentSliderIndex]

  // 2. 先に追加していた要素を削除する
  textEl2.remove();

  // 3. 準備したテキストをHTMLにいれる
  // HTML側に入れ物を準備して、そこに挿入するコードを書く。
  textEl2 = document.createTextNode(text);
  swiperTitleEl2.appendChild(textEl2)
});


















// 
// JustValidate
// 
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '名前の入力は必須です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '名前は3文字以上で入力してください。',
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required'
    }
  ])
  .onSuccess(( event ) => {
    console.log(event)
    console.log(event.target)
    console.log('onSuccess called')

    // フォームの内容を取り出す
    let formData = new FormData(event.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("age"));
    console.log(formData.get("address"));

    // event.currentTarget.submit();
  });