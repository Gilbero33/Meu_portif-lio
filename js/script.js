// Animação simples de entrada ao fazer scroll (Scroll Reveal alternativo)
const observarElementos = () => {
    const elementos = document.querySelectorAll('.project-card, .tech-card, .section-title');
    
    const configuracao = {
        root: null,
        threshold: 0.1
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    }, configuracao);

    elementos.forEach(elemento => {
        // Estado inicial via JS para não quebrar a página se o JS falhar
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'all 0.6s ease-out';
        observador.observe(elemento);
    });
};

// Executa as animações quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    observarElementos();
    console.log("Portefólio carregado e interações prontas!");
});
