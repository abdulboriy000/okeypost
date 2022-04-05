let btn = document.querySelector('.menu__media'),
    menu = document.querySelector('.nav__content'),
    closeBtn = document.querySelector('.close-none'),
    rightLink = document.querySelector('.right__a'),
    arrow = document.querySelector('.arrow'),
    rightDiv = document.querySelector('.right__div'),
    leftDiv = document.querySelector('.left__div'),
    fourItem = document.querySelector('.four__item'),
    arrowTwo = document.querySelector('.arrow__left');

arrow.addEventListener('click', function() {
    rightLink.style = `opacity: 1;transition:1s;`;
    arrow.style = `opacity:0;
                     transition:1s;`;
    arrowTwo.style = `opacity: 1;
                        transition:1s;`;
    leftDiv.style = `display:flex;`
    rightDiv.style = `margin-right:0;`;
});

arrowTwo.addEventListener('click', () => {
    rightLink.style = `opacity: 0;
                        transition:1s;`;
    arrow.style = `opacity:1;
                   transition:1s;`;
    arrowTwo.style = `opacity: 0;
                      transition:1s;`;
    leftDiv.style = `display:none;`
    rightDiv.style = `margin-right:30px;`
});

$('.nav__text').on('click', (e) => {
    $('.account').fadeIn(500);
    $('.swiper').css({"z-index":"-1"});
});

$('.account .close').click(() => {
    $('.account').fadeOut(500);
    $('.swiper').css({"z-index":"0"});
});

$('.account').click((e) => {
    if (e.target === e.currentTarget) {
        $('.account').fadeOut(500);
        $('.swiper').css({"z-index":"0"});
    }
});
$('.account__ssilka').click((e)=>{
    $('.account').fadeOut(500);
    $('.register').fadeIn(500);
    $('.swiper').css({"z-index":"-1"});
});

$('.register').click((e)=>{
    if (e.target === e.currentTarget) {
        $('.register').fadeOut(500);
        $('.swiper').css({"z-index":"0"});
    }
});
$('.register .close').click(() => {
    $('.register').fadeOut(500);
    $('.swiper').css({"z-index":"0"});
});

btn.addEventListener('click', () => {
    menu.classList.add('active');

    if (menu.classList.contains('active')) {
        closeBtn.style = `top: 7%;
                  right: 12%;`;
        btn.style = `display: none;`
    }
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    btn.style = `display: flex;`
});

$('.account__close').click(() => {
    $('.account').fadeOut(500);
    $('.account__two').fadeOut(500);
});

$('.account__a').click(() => {
    $('.account').fadeIn(500);
    $('.account__two').fadeOut(500);
});

$('.account__two').click((e) => {
    if (e.target === e.currentTarget) {
        $('.account__two').fadeOut(500);
    }
});

var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});