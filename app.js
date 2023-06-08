form = document.querySelector('form');
submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', function () {
    if (form.checkValidity()) {
        form.submit();
    } else {
        form.reportValidity();
    }
})