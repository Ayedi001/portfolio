document.addEventListener('DOMContentLoaded', function() {
    const n = document.querySelectorAll('.navbar-nav .nav-link');
    const b = document.querySelector('.navbar-collapse');
    
    n.forEach(l => {
        l.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const x = bootstrap.Collapse.getInstance(b);
                if (x) {
                    x.hide();
                }
            }
        });
    });
});
