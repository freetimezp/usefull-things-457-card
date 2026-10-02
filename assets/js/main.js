const card = document.querySelector(".spartan-card");

if (card) {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 3;
        const rotateX = ((centerY - y) / centerY) * 3;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
}
