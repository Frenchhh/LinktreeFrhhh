
const linksData = [
    {
        title: "Portfólio",
        description: "Conheça meus projetos e trabalhos",
        icon: "🚀",
        iconClass: "portfolio",
        url: "https://gustavofranca.dev",
        featured: true 
    },
    {
        title: "Instagram",
        description: "Acompanhe meu dia a dia",
        icon: "📸",
        iconClass: "instagram",
        url: "https://instagram.com/gustavofranca"
    },
    {
        title: "LinkedIn",
        description: "Conecte-se comigo profissionalmente",
        icon: "💼",
        iconClass: "linkedin", 
        url: "https://linkedin.com/in/gustavofranca"
    },
    {
        title: "GitHub",
        description: "Veja meus códigos e projetos",
        icon: "💻",
        iconClass: "github",
        url: "https://github.com/gustavofranca"
    },
    {
        title: "WhatsApp",
        description: "Entre em contato direto",
        icon: "💬",
        iconClass: "whatsapp",
        url: "https://wa.me/5511999999999"
    },
    {
        title: "E-mail",
        description: "contato@gustavofranca.dev",
        icon: "📧",
        iconClass: "email",
        url: "mailto:contato@gustavofranca.dev"
    },
    {
        title: "YouTube",
        description: "Tutoriais e dicas de programação",
        icon: "🎥",
        iconClass: "youtube",
        url: "https://youtube.com/@gustavofranca"
    }
];

function renderLinks() {
    const container = document.getElementById('linksContainer');
    
    linksData.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank'; 
        linkElement.className = `link-item ${link.featured ? 'link-featured' : ''}`;
        
        linkElement.innerHTML = `
            <div class="link-icon ${link.iconClass}">
                ${link.icon}
            </div>
            <div class="link-content">
                <div class="link-title">${link.title}</div>
                <div class="link-description">${link.description}</div>
            </div>
            <div class="link-arrow">→</div>
        `;
        
        container.appendChild(linkElement);
    });
}

function addLink(linkData) {
    linksData.push(linkData);
    document.getElementById('linksContainer').innerHTML = '';
    renderLinks();
}

document.addEventListener('DOMContentLoaded', function() {
    renderLinks();
    
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('link-featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            } else {
                this.style.transform = 'translateY(0) scale(1.02)';
            }
        });
    });
});

function trackLinkClick(linkTitle) {
    console.log(`Link clicado: ${linkTitle}`);
}

document.addEventListener('click', function(e) {
    if (e.target.closest('.link-item')) {
        const linkTitle = e.target.closest('.link-item').querySelector('.link-title').textContent;
        trackLinkClick(linkTitle);
    }
});
