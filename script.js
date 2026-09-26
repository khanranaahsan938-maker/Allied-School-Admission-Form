document.addEventListener('DOMContentLoaded', function() {
    // Mobile nav toggle
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('nav');
    if(navToggle) {
        navToggle.addEventListener('click', function() {
            if(navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
                navToggle.setAttribute('aria-expanded', 'false');
            } else {
                navMenu.style.display = 'block';
                navToggle.setAttribute('aria-expanded', 'true');
            }
        });
    }
    // Form validation example
    var form = document.querySelector('#application-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var valid = true;
            var inputs = form.querySelectorAll('input[required], select[required]');
            inputs.forEach(function(input) {
                if(!input.value) {
                    valid = false;
                    input.nextElementSibling.textContent = 'This field is required.';
                } else {
                    input.nextElementSibling.textContent = '';
                }
            });
            if(valid) {
                document.getElementById('successModal').style.display = 'block';
            }
        });
    }
    // File input preview example
    var fileInput = document.querySelector('#idDocument');
    if(fileInput) {
        fileInput.addEventListener('change', function() {
            var preview = document.getElementById('filePreview');
            preview.textContent = fileInput.files[0] ? fileInput.files[0].name : '';
        });
    }
    // Close modal
    document.querySelectorAll('.close-modal').forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
});