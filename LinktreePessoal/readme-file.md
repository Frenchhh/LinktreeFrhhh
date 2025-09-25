# 🔗 Aplicativo de Links - Gustavo França

Um aplicativo estilo "Linktree" personalizado com tema laranja e roxo, totalmente responsivo e fácil de manter.

## 📁 Estrutura de Arquivos

```
projeto-links/
│
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos e animações
├── script.js       # Lógica JavaScript e dados
└── README.md       # Documentação
```

## 🚀 Como Usar

1. **Baixe todos os 3 arquivos** (index.html, style.css, script.js)
2. **Coloque na mesma pasta** no seu servidor
3. **Abra o index.html** no navegador
4. **Hospede online** para ter sua URL personalizada

## ⚙️ Como Personalizar

### 📝 Editando Links
No arquivo `script.js`, edite o array `linksData`:

```javascript
const linksData = [
    {
        title: "Nome do Link",
        description: "Descrição do link",
        icon: "🚀", // Emoji do ícone
        iconClass: "portfolio", // Classe CSS para cores
        url: "https://seulink.com",
        featured: true // true = link destacado
    }
];
```

### 🎨 Mudando Cores
No arquivo `style.css`, procure por:
- `#FF6B35` (laranja) - substitua pela sua cor
- `#8B5CF6` (roxo) - substitua pela sua cor

### 👤 Alterando Perfil
No arquivo `index.html`, edite:
- Nome: linha 28
- Bio: linha 29
- Avatar: linha 27 (emoji)

## ✅ Requisitos Atendidos

- **RF01** ✅ Links estruturados em array JSON
- **RF02** ✅ Personalização visual completa
- **RF03** ✅ Design responsivo (mobile-first)
- **RF04** ✅ Links abrem em nova aba
- **RF05** ✅ Sistema de links destacados
- **RF06** ✅ URL limpa e compartilhável
- **RF07** ✅ SEO completo com meta tags

## 🔧 Funcionalidades

- **Animações suaves** ao carregar e hover
- **Glassmorphism design** moderno
- **Tracking de cliques** (console.log)
- **Gradientes dinâmicos** para cada rede social
- **Estrutura fácil de manter** - tudo centralizado

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile, Tablet, Desktop
- ✅ Todos os tamanhos de tela

## 🎯 Próximos Passos

1. **Hospedar** em um servidor (GitHub Pages, Vercel, Netlify)
2. **Configurar domínio** personalizado se desejar
3. **Adicionar Google Analytics** para métricas reais
4. **Personalizar** cores e links conforme necessário

---

**Criado com 💜 para Gustavo França**