addEventListener('DOMContentLoaded',function(){
    var heroSwiper = new Swiper(".hero-slider", {
        // cssMode: true,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-right",
          prevEl: ".swiper-button-left",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            // hide: true,
        },
    });
    $(document).ready(function(){
      $('#telefon').inputmask({
        mask:'+7(999)999-99-99',
        clearMaskOnLostFocus: false
      });
    });


    const buttons = document.querySelectorAll(".tab_left .tab_button");
    const images = document.querySelectorAll(".taps-img .tab_img");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Barcha tugmalardan 'active' klassini olib tashlash
            buttons.forEach(btn => btn.classList.remove("active"));

            // Barcha rasimlardan 'active' va 'no-active' klasslarini olib tashlash
            images.forEach(img => img.classList.remove("active", "no-active"));

            // Barcha rasimlarga 'no-active' klassini qo‘shish
            images.forEach(img => img.classList.add("no-active"));

            // Bosilgan tugmaga va unga mos rasmga 'active' klassini qo'shish
            button.classList.add("active");
            images[index].classList.add("active");

            // Ushbu rasm endi 'no-active' bo‘lishi kerak emas
            images[index].classList.remove("no-active");
        });
    });
  

    const menu = document.querySelector(".header__start--menu");
    const close = document.querySelector(".close");
    const menuContainer = document.querySelector(".menu_no_active");

    function toggleMenu() {
        if (window.innerWidth <= 480) {
            menuContainer.classList.add("menu_active");
        }
    }

    function closeMenu() {
        if (window.innerWidth <= 480) {
            menuContainer.classList.remove("menu_active");
        }
    }

    menu.addEventListener("click", toggleMenu);
    close.addEventListener("click", closeMenu);
})