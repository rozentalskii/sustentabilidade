// FUNÇÃO PARA O EFEITO DE ACORDEÃO (CLICAR E ABRIR)
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
    header.addEventListener('click', function() {
        // Seleciona o conteúdo que vem logo após o botão clicado
        const content = this.nextElementSibling;

        // Fecha outros se estiverem abertos (opcional, mas legal)
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.maxHeight = null;
            }
        });

        // Toggle (abre/fecha) o conteúdo clicado
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            // Define a altura máxima baseada no tamanho do conteúdo
            content.style.maxHeight = content.scrollHeight + "px";
            
            // Mensagem legal no console para mostrar que o JS está funcionando
            console.log("Você abriu um tópico de sustentabilidade!");
        }
    });
});

// EFEITO DE SCROLL SUAVE
// Faz com que ao clicar no menu, a página deslize suavemente até a seção
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Desconto da altura do menu fixo
                behavior: 'smooth'
            });
        }
    });
});

// INTERATIVIDADE EXTRA: MUDANÇA DE COR AO CLICAR NO TÍTULO
const mainTitle = document.querySelector('.hero h1');
mainTitle.style.cursor = 'pointer';

mainTitle.addEventListener('click', () => {
    // Muda a cor do título para um verde limão e volta depois de 1 segundo
    mainTitle.style.color = '#ccff33';
    setTimeout(() => {
        mainTitle.style.color = 'white';
    }, 1000);
});