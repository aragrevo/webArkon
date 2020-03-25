// https://sweetalert.js.org/guides/

$(function () {
    sendButton = document.querySelector('#sendButton');

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
