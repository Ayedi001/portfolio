document.getElementById('message').addEventListener('input', function() {
    const m = 500;
    const c = this.value.length;
    const f = this.nextElementSibling;
    
    if (c > m) {
        this.value = this.value.substring(0, m);
        f.textContent = 'Maximum 500 caractères atteint';
        f.className = 'form-text text-danger';
    } else {
        f.textContent = `${c}/${m} caractères`;
        f.className = 'form-text';
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const n = document.getElementById('name').value.trim();
    const x = document.getElementById('email').value.trim();
    const s = document.getElementById('subject').value;
    const y = document.getElementById('message').value.trim();
    const z = document.getElementById('formMessage');
    
    if (!n || !x || !s || !y) {
        z.className = 'alert alert-danger mt-3';
        z.innerHTML = '<i class="fas fa-exclamation-circle"></i> Veuillez remplir tous les champs obligatoires.';
        z.style.display = 'block';
        return;
    }
    
    if (y.length > 500) {
        z.className = 'alert alert-danger mt-3';
        z.innerHTML = '<i class="fas fa-exclamation-circle"></i> Le message ne doit pas dépasser 500 caractères.';
        z.style.display = 'block';
        return;
    }
    
    const w = `Nom: ${n}\nEmail: ${x}\nSujet: ${s}\n\nMessage:\n${y}`;
    const v = `mailto:Marwenayedi70@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(w)}`;
    
    z.className = 'alert alert-success mt-3';
    z.innerHTML = '<i class="fas fa-check-circle"></i> Formulaire validé! Votre client de messagerie va s\'ouvrir.';
    z.style.display = 'block';
    
    window.location.href = v;
    
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        z.style.display = 'none';
    }, 5000);
});
