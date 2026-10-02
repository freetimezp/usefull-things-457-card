const card = document.querySelector(".spartan-card");

if (card) {
    let bounds;

    const updateBounds = () => {
        bounds = card.getBoundingClientRect();
    };

    updateBounds();

    window.addEventListener("resize", updateBounds);

    card.addEventListener("mouseenter", () => {
        updateBounds();

        card.style.transition = "transform 0.15s ease-out";
    });

    card.addEventListener("mousemove", (event) => {
        if (!bounds) return;

        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        const px = x / bounds.width;
        const py = y / bounds.height;

        const rotateY = (px - 0.5) * 7;
        const rotateX = (0.5 - py) * 7;

        const mx = (px - 0.5) * 20;
        const my = (py - 0.5) * 20;

        card.style.setProperty("--mx", mx);
        card.style.setProperty("--my", my);

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.01)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transition = "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            scale(1)
        `;

        card.style.setProperty("--mx", 0);
        card.style.setProperty("--my", 0);
    });
}

/* =========================================================
   RANDOM HUD GLITCH
========================================================= */

const status = document.querySelector(".hud-status");

if (status) {
    const glitch = () => {
        status.classList.add("glitch");

        setTimeout(() => {
            status.classList.remove("glitch");
        }, 120);
    };

    setInterval(() => {
        if (Math.random() > 0.45) {
            glitch();
        }
    }, 4500);
}

/* =========================================================
   BUTTON MAGNETIC EFFECT
========================================================= */

const button = document.querySelector(".action-btn");

if (button) {
    button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.15;
        const moveY = (y - rect.height / 2) * 0.15;

        button.style.transform = `
            translate(${moveX}px, ${moveY}px)
        `;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });
}
