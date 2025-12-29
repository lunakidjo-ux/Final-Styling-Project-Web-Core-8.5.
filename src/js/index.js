import '../scss/style.scss'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

console.log('It works!')

let brandsSwiper = null
let repairSwiper = null
let pricesSwiper = null


function swiperOn() {
  // Brands Swiper
  const brandsSwiperEl = document.querySelector('.brands__swiper')
  if (brandsSwiperEl && !brandsSwiperEl.swiper) {
    brandsSwiper = new Swiper('.brands__swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '.brands__swiper .swiper-pagination',
        clickable: true
      }
    })
    console.log('Brands Swiper initialized')
  }

  // Repair Swiper
  const repairSwiperEl = document.querySelector('#repairSwiper')
  if (repairSwiperEl && !repairSwiperEl.swiper) {
    repairSwiper = new Swiper('#repairSwiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '#repairSwiper .swiper-pagination',
        clickable: true
      }
    })
    console.log('Repair Swiper initialized')
  }

  // Prices Swiper
const pricesSwiperEl = document.querySelector('#pricesSwiper')
if (pricesSwiperEl && !pricesSwiperEl.swiper) {
  pricesSwiper = new Swiper('#pricesSwiper', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: '#pricesSwiper .swiper-pagination',
      clickable: true
    }
  })
  console.log('Prices Swiper initialized')
}

}

function swiperOff() {
  // Brands Swiper
  if (brandsSwiper && typeof brandsSwiper.destroy === 'function') {
    brandsSwiper.destroy(true, true)
    brandsSwiper = null
    console.log('Brands Swiper destroyed')
  }

  // Repair Swiper
  if (repairSwiper && typeof repairSwiper.destroy === 'function') {
    repairSwiper.destroy(true, true)
    repairSwiper = null
    console.log('Repair Swiper destroyed')
  }

  // Price Sziper
  if (pricesSwiper && typeof pricesSwiper.destroy === 'function') {
  pricesSwiper.destroy(true, true)
  pricesSwiper = null
  console.log('Prices Swiper destroyed')
}

}

function swiperToggle() {
  if (window.innerWidth >= 320 && window.innerWidth <= 767) {
    if (!brandsSwiper || !repairSwiper) {
      swiperOn()
    }
  } else {
    swiperOff()
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // --- SHOW / HIDE TOGGLE ---
  const grid = document.querySelector('.brands__grid')
  const toggle = document.querySelector('#brandsToggle')
  const text = document.querySelector('.brands__toggle-text')
  const arrow = document.querySelector('.brands__toggle-icon')

  if (toggle && grid && text && arrow) {
    toggle.addEventListener('click', () => {
      const expanded = grid.classList.toggle('expanded')

      if (expanded) {
        text.textContent = 'Hide'
        arrow.classList.add('rotated')
      } else {
        text.textContent = 'Show all'
        arrow.classList.remove('rotated')
      }
    })
  }

  // --- REPAIR SHOW / HIDE TOGGLE ---
  const repairList = document.querySelector('.repair__list')
  const repairToggle = document.querySelector('#repairToggle')
  const repairText = document.querySelector('.repair__toggle-text')
  const repairArrow = document.querySelector('.repair__toggle-icon')

  console.log('Repair toggle elements:', {
    repairList: !!repairList,
    repairToggle: !!repairToggle,
    repairText: !!repairText,
    repairArrow: !!repairArrow
  })

  if (repairToggle && repairList && repairText && repairArrow) {
    repairToggle.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('Repair toggle clicked')
      const expanded = repairList.classList.toggle('expanded')
      console.log('Expanded:', expanded)

      if (expanded) {
        repairText.textContent = 'Hide'
        repairArrow.classList.add('rotated')
      } else {
        repairText.textContent = 'Show all'
        repairArrow.classList.remove('rotated')
      }
    })
  } else {
    console.error('Repair toggle elements missing')
  }

  // --- SIDEBAR TOGGLE FOR BURGER ICON ---
  const sidebarToggle = document.querySelector('#sidebarToggle')
  const sidebarToggleAlt = document.querySelector('.header__icon--menu')
  const sidebar = document.querySelector('.sidebar')

  console.log('Sidebar toggle elements:', {
    byId: sidebarToggle,
    byClass: sidebarToggleAlt,
    sidebar: sidebar
  })

  // Use whichever selector works
  const toggleButton = sidebarToggle || sidebarToggleAlt

  if (toggleButton && sidebar) {
    toggleButton.addEventListener('click', () => {
      console.log('Sidebar toggle clicked')
      // Get current computed display value
      const currentDisplay = window.getComputedStyle(sidebar).display

      if (currentDisplay === 'none') {
        // Show sidebar
        sidebar.style.display = 'flex'
        sidebar.style.position = 'absolute'
        sidebar.style.zIndex = '2000'
      } else {
        // Hide sidebar
        sidebar.style.display = 'none'
      }
    })
  }

  // --- CLOSE SIDEBAR ON CLOSE BUTTON CLICK ---
  const sidebarCloseBtn = document.querySelector('.sidebar__btn--close')

  if (sidebarCloseBtn && sidebar) {
    sidebarCloseBtn.addEventListener('click', () => {
      console.log('Sidebar close button clicked')
      sidebar.style.display = 'none'
    })
  }

  // Initialize Swiper on page load
  swiperToggle()
})

// Reinitialize on window resize
window.addEventListener('resize', swiperToggle)

