const containerOutput = document.querySelector(".output");
const btnConfettis = document.querySelector(".btn-confettis");
const emojis = ["🍰", "🍣", "🍑", "🍓"];

// Ajout de l'event listener après la déclaration de `confetti`
btnConfettis.addEventListener("click", confetti);

function confetti() {
    if (isTweening()) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = "absolute"; // S'assurer que les éléments se déplacent correctement
        confetti.style.left = "50%"; // Position de départ
        confetti.style.top = "50%";
        confetti.style.fontSize = "20px"; // Taille ajustable pour meilleure lisibilité
        fragment.appendChild(confetti);
    }

    containerOutput.appendChild(fragment);
    animateConfettis();
}

function animateConfettis() {
    const timeline = gsap.timeline();

    timeline
        .from(".output div", { 
            scale: 0, 
            duration: 0.3, 
            ease: "back.out(2)" // Effet d'apparition plus dynamique
        })
        .to(".output div", {
            y: "random(-150,150)",
            x: "random(-150,150)",
            z: "random(0,1000)",
            rotation: "random(-180,180)",
            duration: 1,
            ease: "power1.out",
        })
        .to(".output div", { 
            autoAlpha: 0, 
            duration: 0.3 
        }, "-=0.2")
        .add(() => {
            containerOutput.innerHTML = "";
        });
}

function isTweening() {
    return gsap.isTweening('.output div');
}
