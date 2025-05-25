
// Selecciona todas las secciones
      


const sections = document.querySelectorAll('.section');

      // Configuración del observer: el callback se disparará cuando el 50% del elemento sea visible
      const observerOptions = {
        threshold: 0.5
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // Si la sección es visible en el viewport, añade la clase "visible"
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, observerOptions);

      // Observa cada sección
      sections.forEach(section => {
        observer.observe(section);
      });
      





