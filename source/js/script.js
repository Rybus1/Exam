const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const promo = document.querySelector('.promo');
const mapSection = document.querySelector('.map');

// DISABLE NO-SCRIPT MODE
function disableNoScript() {
  menu.classList.remove('no-script');
  header.classList.remove('no-script');
  promo.classList.remove('no-script');
  mapSection.classList.remove('no-script');
}

// MOBILE MENU TOGGLE

function toggleEnabler() {
  const toggle = document.querySelector('.toggle');
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('toggle--activ');
    menu.classList.toggle('menu--close');
  });
}

// MAP LEAFLET

function mapCreator() {
  const mapContainer = document.querySelector('.map__container');
  const coordinates = [59.96829553145296, 30.317419628737895];

  const map = L.map(mapContainer).setView(coordinates, 17);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  const leafletAd = document.querySelectorAll('.leaflet-right');
  leafletAd[1].innerHTML = '';

  const pin = L.icon({
    iconUrl: './img/map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  L.marker(coordinates, { icon: pin, },).addTo(map);
}

// SWIPER

function swiperCreator() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      clickableClass: 'swiper-pagination-clickable',
    },

    navigation: {
      prevEl: '.promo__button--prew',
      nextEl: '.promo__button--next',
    },
  });
}

// RUN FUNCTIONS

disableNoScript();
toggleEnabler();
mapCreator();
swiperCreator();
