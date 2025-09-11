// JS perso ici
// ...existing code...

// Effet machine à écrire pour le texte d'accueil
function typeWriterEffect(elementId, texts, typingSpeed = 75, pauseDuration = 1500, cursor = true, cursorChar = "|") {
    const el = document.getElementById(elementId);
    let textIndex = 0, charIndex = 0, isDeleting = false;
    let cursorSpan = cursor ? `<span class="type-cursor">${cursorChar}</span>` : "";

    function type() {
        let currentText = texts[textIndex];
        let displayText = currentText.substring(0, charIndex);
        el.innerHTML = displayText + cursorSpan;

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseDuration);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, typingSpeed / 2);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }
    type();
}

// Utilisation :
document.addEventListener("DOMContentLoaded", function() {
    typeWriterEffect("text-type", [
        "<strong>Bienvenue sur mon Portfolio</strong>",
        "Découvrez mes projets, compétences et parcours",
        "<em>Bonne visite ;)</em>"
    ], 75, 1500, true, "|");
});


// ----------------------------------

// Effet de glow sur les cards

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = -((y - centerY) / centerY) * 10;
        card.style.transform = `perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.08)`;
    });
    card.addEventListener('mouseleave', function() {
        card.style.transform = '';
    });
});

// ----------------------------------

// ...existing code...

// Génère des étoiles
document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.createElement('div');
    starContainer.className = 'stars';
    document.body.appendChild(starContainer);

    for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starContainer.appendChild(star);
    }
});

// Effet halo qui suit la souris
document.addEventListener('mousemove', function(e) {
    let halo = document.getElementById('mouse-halo');
    if (!halo) {
        halo = document.createElement('div');
        halo.id = 'mouse-halo';
        halo.style.position = 'fixed';
        halo.style.pointerEvents = 'none';
        halo.style.zIndex = '1';
        halo.style.borderRadius = '50%';
        halo.style.boxShadow = '0 0 80px 40px rgba(132,0,255,0.25)';
        halo.style.width = halo.style.height = '40px';
        document.body.appendChild(halo);
    }
    halo.style.left = (e.clientX - 20) + 'px';
    halo.style.top = (e.clientY - 20) + 'px';
});

// Effect pour retirer la souris 

// document.body.style.cursor = 'none';
