document.addEventListener('DOMContentLoaded', function () {
    var showCertButtons = document.querySelectorAll('.showCertImageBtn');
    var certImages = document.querySelectorAll('.certImage');

    showCertButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Set the source of the corresponding image
            certImages[index].src = button.getAttribute('data-image');

            // Toggle the visibility of the image
            certImages[index].style.display = (certImages[index].style.display === 'block') ? 'none' : 'block';
        });
    });
});