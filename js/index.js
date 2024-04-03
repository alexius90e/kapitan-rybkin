import './custom-select.js';

const disclaimer = document.querySelector('.disclaimer');

if (disclaimer) {
  disclaimer.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('disclaimer__button');
    const isButtonContent = event.target.parentNode.classList.contains('disclaimer__button');
    if (isButton || isButtonContent) {
      disclaimer.style.display = 'none';
    }
  });
}

const brandsSwiper = new Swiper('.brands .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    360: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 5,
    },
    680: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 9,
    },
  },
});

const mainSwiper = new Swiper('.info-slider .swiper', {
  loop: true,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const whatElseSwiper = new Swiper('.what-else .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 5,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    360: {
      slidesPerView: 1.25,
    },
    480: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.4,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.4,
    },
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

const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

if (header && headerBurger && headerNav) {
  headerBurger.addEventListener('click', () => {
    header.classList.add('active');
    headerNav.classList.add('active');
    document.body.classList.add('hidden');
  });

  header.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      header.classList.remove('active');
      headerNav.classList.remove('active');
      document.body.classList.remove('hidden');
    }
  });
}

const catalogCountriesWrapper = document.querySelector('.catalog__countries');
const catalogCountries = document.querySelectorAll('.catalog__country');
const catalogCards = document.querySelectorAll('.catalog__card');
const catalogBeerInfoCards = document.querySelectorAll('.catalog__card-info-beer');
const catalogProducers = document.querySelectorAll('.catalog__producer');

if (catalogCountriesWrapper) {
  catalogCountriesWrapper.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
      event.currentTarget.classList.remove('active');
      [...catalogCards, ...catalogProducers].forEach((card) => {
        card.classList.remove('active');
      });
    }
  });
}

catalogCountries.forEach((catalogCountry) => {
  catalogCountry.addEventListener('click', (event) => {
    const activeCatalogCard = [...catalogCards].find(
      (card) => card.dataset.country === event.currentTarget.dataset.country
    );
    if (activeCatalogCard && catalogCountriesWrapper) {
      catalogCountriesWrapper.classList.add('active');
      activeCatalogCard.classList.add('active');
      [...catalogProducers].forEach((card) => {
        card.classList.remove('active');
      });
    }
  });
});

catalogBeerInfoCards.forEach((catalogBeerInfoCard) => {
  catalogBeerInfoCard.addEventListener('click', (event) => {
    const activeCatalogProducer = [...catalogProducers].find(
      (card) => card.dataset.producer === event.currentTarget.dataset.producer
    );
    if (activeCatalogProducer && catalogCountriesWrapper) {
      catalogCountriesWrapper.classList.add('active');
      activeCatalogProducer.classList.add('active');
      [...catalogCards].forEach((card) => {
        card.classList.remove('active');
      });
    }
  });
});
