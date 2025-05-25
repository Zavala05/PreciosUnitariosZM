document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('#basesdedatos h2, .card, footer');
    let ticking = false;

    elements.forEach(element => {
        element.style.transition = 'opacity 0.6s ease-out';
    });

    function updateOpacity() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calcular visibilidad (0 = fuera de vista, 1 = completamente visible)
            const visibility = Math.min(1, 
                Math.max(0, 
                    (Math.min(rect.bottom, windowHeight) - 
                    Math.max(rect.top, 0)) / rect.height
                )
            );
            
            // Aplicar opacidad con un mínimo de 0.2 cuando está casi fuera de vista
            element.style.opacity = Math.max(0.2, visibility);
        });
        
        ticking = false;
    }

    function handleScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateOpacity);
            ticking = true;
        }
    }

    // Configurar eventos
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Ejecutar inicialmente
    updateOpacity();
});