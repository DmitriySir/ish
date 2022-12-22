
  if (document.documentElement.clientWidth < 768){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

    direction:"horizontal",
    simulateTouch: true,
    touchRatio: 1,
    touchAngel: 45,
    grabCursor: true,
    slidesPerView: 1.1,
  });}


  document.querySelector(".showMore__button").addEventListener('click', function(){
    let swr = document.querySelector('.swiper-wrapper');
    swr.classList.toggle("swiper-wrapper__active");
    let swp = document.querySelector('.showMore__button-arrow');
    swp.classList.toggle("showMore__button-arrow__active");
    let spd = document.querySelector('.showMore__button-text');
    if(spd.textContent === "Показать всё"){
      spd.textContent = "Скрыть";
    } else{
      spd.textContent = "Показать всё";
    }
})

document.getElementById("showMore").addEventListener('click', function(){
  let swr = document.getElementById('swiper2');
  swr.classList.toggle("big");
  let swp = document.getElementById('smbtnar');
    swp.classList.toggle("showMore__button-arrow__active");
  let spd = document.getElementById('smbtntxt');
    if(spd.textContent === "Показать всё"){
      spd.textContent = "Скрыть";
    } else{
      spd.textContent = "Показать всё";
    }
})
