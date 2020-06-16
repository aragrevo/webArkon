// https://www.hoclabs.com/2018/03/17/emailjs-envio-de-correos-desde-javascript/
// https://mailtrap.io/register/signup?ref=pricing_table_detailed
// https://blog.mailtrap.io/javascript-send-email/#mailto_for_sending_form_data


// https://sweetalert.js.org/guides/
// https://swiperjs.com/demos/

$(function () {
    sendButton = document.querySelector('#sendButton');
    swiper_wrapper = document.querySelector('.swiper-wrapper');

    let images = [];

    for (let i = 1; i <= 5; i++)
    {
        images.push(`Imagen${i}`);
    }

    for (const image of images)
    {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(assets/images/${image}.jpg)`;
        div.classList.add('swiper-slide');
        div.style.backgroundPosition = '0 0';
        swiper_wrapper.append(div);
    }

    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    sendButton.addEventListener('click', () => {
        swal({
            title: "Pronto te contactaremos.!!!",
            icon: "success",
            timer: 3000,
        }).then(() => {
            $('#modalContact').modal('toggle');
        });
    });
});
