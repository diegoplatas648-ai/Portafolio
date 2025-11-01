/* ============================================= */
/* LÓGICA DE TRADUCCIÓN [RÚBRICA: Idiomas / traducción del sitio] */
/* ============================================= */

// 1. Diccionario de Traducciones
// DEBES RELLENAR ESTO CON TU PROPIA INFORMACIÓN
const translations = {
    'es': {
        'name': 'Diego Platas Echeagaray',
        'profile': 'Desarrollador de back end',
        'nav-about': 'Sobre Mí',
        'nav-projects': 'Proyectos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contacto',
        'about-title': 'Sobre Mí',
        'about-text': 'Soy un desarrollador centrado en el back end, buscando siempre optimizar y mejorar la eficiencia de las aplicaciones.',
        'cv-button': 'Descargar CV (PDF)',
        'projects-title': 'Proyectos Principales',
        'p1-title': 'Sitio Web Sobre la materia Etica Profesional',
        'p1-desc': 'Una pequeña página web informativa sobre la materia de Ética Profesional.',
        'p2-title': 'Contador de colores con Python',
        'p2-desc': 'Un programa en Python que cuenta la cantidad de colores en una camara en vivo.',
        'tech-label': 'Tecnologías:',
        'repo-link': 'Ver Código (GitHub)',
        'demo-link': 'Ver Demo',
        'skills-title': 'Habilidades Técnicas',
        'skills-lang-title': 'Lenguajes de Programación',
        'skills-fw-title': 'Frameworks y Librerías',
        'skills-tools-title': 'Herramientas y Bases de Datos',
        'certs-title': 'Certificaciones y Reconocimientos',
        'cert1-link': 'Certificación CSS essential - Cisco',
        'cert2-link': 'Certificación HTML essential - Cisco',
        'contact-title': 'Contacto',
        'contact-text': 'Puedes contactarme a través de mi correo profesional:',
        'copyright': '© 2025 - Diego Platas Echeagaray. Todos los derechos reservados.'
    },
    'en': {
        'name': 'Diego Platas Echeagaray',
        'profile': 'Back-End Developer',
        'nav-about': 'About Me',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        'about-title': 'About Me',
        'about-text': 'I am a back-end focused developer, always looking to optimize and improve application efficiency.',
        'cv-button': 'Download CV (PDF)',
        'projects-title': 'Main Projects',
        'p1-title': 'Website About Professional Ethics Subject',
        'p1-desc': 'A small informative website about the Professional Ethics subject.',
        'p2-title': 'Color Counter with Python',
        'p2-desc': 'A Python program that counts the number of colors in a live camera feed.',
        'tech-label': 'Technologies:',
        'repo-link': 'View Code (GitHub)',
        'demo-link': 'View Demo',
        'skills-title': 'Technical Skills',
        'skills-lang-title': 'Programming Languages',
        'skills-fw-title': 'Frameworks & Libraries',
        'skills-tools-title': 'Tools & Databases',
        'certs-title': 'Certifications & Recognitions',
        'cert1-link': 'Certification CSS essential - Cisco',
        'cert2-link': 'Certification HTML essential - Cisco',
        'contact-title': 'Contact',
        'contact-text': 'You can reach me through my professional email:',
        'copyright': '© 2025 - Diego Platas Echeagaray. All rights reserved.'
    },
    'fr': {
        'name': 'Diego Platas Echeagaray',
        'profile': 'Développeur Back-End',
        'nav-about': 'À Propos',
        'nav-projects': 'Projets',
        'nav-skills': 'Compétences',
        'nav-contact': 'Contact',
        'about-title': 'À Propos de Moi',
        'about-text': 'Je suis un développeur axé sur le back-end, toujours à la recherche d\'optimiser et d\'améliorer l\'efficacité des applications.',
        'cv-button': 'Télécharger CV (PDF)',
        'projects-title': 'Projets Principaux',
        'p1-title': 'Site Web sur le sujet de l\'Éthique Professionnelle',
        'p1-desc': 'Un petit site web informatif sur le sujet de l\'Éthique Professionnelle.',
        'p2-title': 'Compteur de Couleurs avec Python',
        'p2-desc': 'Un programme Python qui compte le nombre de couleurs dans un flux de caméra en direct.',
        'tech-label': 'Technologies:',
        'repo-link': 'Voir Code (GitHub)',
        'demo-link': 'Voir Démo',
        'skills-title': 'Compétences Techniques',
        'skills-lang-title': 'Langages de Programmation',
        'skills-fw-title': 'Frameworks et Bibliothèques',
        'skills-tools-title': 'Outils et Bases de Données',
        'certs-title': 'Certifications et Reconnaissances',
        'cert1-link': 'Certificat CSS essential - Cisco',
        'cert2-link': 'Certificat HTML essential - Cisco',
        'contact-title': 'Contact',
        'contact-text': 'Vous pouvez me contacter via mon email professionnel:',
        'copyright': '© 2025 - Diego Platas Echeagaray. Tous droits réservés.'
    }
};

// 2. Función para cambiar el idioma
const setLanguage = (lang) => {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', lang);

    // Actualizar los botones activos
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // Actualizar el contenido del texto
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Actualizar el atributo 'lang' de la etiqueta <html>
    document.documentElement.lang = lang;
};

// 3. Event Listeners para los botones
document.addEventListener('DOMContentLoaded', () => {
    // Añadir listeners a los botones
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));

    // 4. Comprobar idioma guardado o usar el del navegador (o 'es' por defecto)
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0]; // 'es', 'en', 'fr'

    // Prioridad: 1. Guardado, 2. Navegador (si es ES, EN, FR), 3. Español
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else if (translations[browserLang]) {
        setLanguage(browserLang);
    } else {
        setLanguage('es'); // Idioma por defecto
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navWrapper = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-main a');
    const langButtons = document.querySelectorAll('.lang-button'); // Nuevo: Selector de botones de idioma
    const body = document.body;

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        const isMenuOpen = navWrapper.classList.toggle('open');
        body.classList.toggle('menu-open'); 
        menuToggle.setAttribute('aria-expanded', isMenuOpen);
    };

    // Función para cerrar el menú (la usaremos por separado)
    const closeMenu = () => {
        if (navWrapper.classList.contains('open')) {
            toggleMenu(); 
        }
    };
    
    // Función de ejemplo para cambiar el idioma (Necesitas definir un objeto 'translations' en tu JS para que esto funcione realmente)
    const setLanguage = (lang) => {
        // Lógica de traducción real iría aquí, por ejemplo:
        // const elements = document.querySelectorAll('[data-key]');
        // elements.forEach(el => { el.textContent = translations[lang][el.dataset.key] || el.textContent; });
        console.log(`Cambiando a idioma: ${lang}`);
        
        // Actualizar el botón activo
        langButtons.forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');
    };
    
    // Inicializar el idioma activo (e.g., Español)
    setLanguage('es');

    // --- MANEJO DEL MENÚ RESPONSIVO ---

    // 1. Abrir/Cerrar menú con el botón de hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // 2. Cerrar el menú al hacer clic en un enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // 3. Cerrar el menú al cambiar de idioma (IMPLEMENTACIÓN SOLICITADA)
    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const lang = event.target.id.replace('lang-', '');
            setLanguage(lang);
            
            // Llama a la función para cerrar el menú después del cambio de idioma
            closeMenu(); 
        });
    });
});