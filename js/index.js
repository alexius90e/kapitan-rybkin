import './custom-select.js';

const swiper = new Swiper('.info-slider  .swiper', {
  loop: true,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const initialLanguage = localStorage.getItem('language');

const langSelect = document.getElementById('language');
const selectSelected = document.querySelector('#language ~ .select-selected');

if (initialLanguage && langSelect && selectSelected) {
  const changeEvent = new Event('change');
  selectSelected.innerHTML = `<span>${initialLanguage.toLocaleUpperCase()}</span>`;
  langSelect.dataset.value = initialLanguage.toLocaleUpperCase();
  langSelect.value = initialLanguage.toLocaleUpperCase();
  langSelect.dispatchEvent(changeEvent);
  document.body.dataset.language = initialLanguage;
} else {
  localStorage.setItem('language', 'ru');
}

langSelect.addEventListener('change', (event) => {
  document.body.dataset.language = event.target.value;
  localStorage.setItem('language', event.target.value);
});
