document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close-button');

    // Datos del popup para cada skill
    const skillTexts = {
        "Ciberseguridad / Hacking Ético": "- Auditorías de ciberseguridad. \n- Securización de sistemas linux, windows y servidores web.\n - Resoluciones de diversos CTF's.",
        "Análisis de datos": " - Análisis de datos.\n - Dominio de SQL y NoSQL. \n - Otras áreas de la informática (Bases de datos, redes, etc.).",
        "Programación": " - Desarrollo de aplicaciones web o en plataforma.\n - Automatización de tareas mediante scripting.\n - Conocimiento en lenguajes como Python, C#,  JavaScript, y más."
    };
    
    

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const skillTitle = this.getAttribute('data-skill');
            popupTitle.textContent = skillTitle;
            popupText.textContent = skillTexts[skillTitle] || "No hay información adicional disponible.";
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
