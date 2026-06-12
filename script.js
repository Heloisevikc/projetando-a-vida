// Menu mobile
const mobileBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Frases motivacionais aleatórias (botão principal)
const frases = [
    "🌸 Você é capaz de construir a vida que imagina.",
    "💜 Pequenas atitudes, grandes transformações.",
    "✨ Acredite no seu taco e no seu potencial.",
    "🌙 O amanhã é feito com as escolhas de hoje.",
    "🕯️ Cuide de você como cuidaria de quem mais ama.",
    "☕ Respire, recomece e floresça."
];

const fraseBtn = document.getElementById('fraseBtn');
const fraseMotivacional = document.getElementById('fraseMotivacional');

fraseBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    fraseMotivacional.textContent = frases[randomIndex];
});

// Sistema de metas
const novaMetaInput = document.getElementById('novaMetaInput');
const adicionarMetaBtn = document.getElementById('adicionarMetaBtn');
const listaMetas = document.getElementById('listaMetas');

function adicionarMeta() {
    const textoMeta = novaMetaInput.value.trim();
    if (textoMeta === "") {
        alert("Escreva uma meta antes de adicionar 💜");
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = `💜 ${textoMeta}`;
    
    // Adicionar evento para marcar como concluída (remove item)
    li.addEventListener('click', () => {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
        setTimeout(() => {
            li.remove();
        }, 500);
    });
    
    listaMetas.appendChild(li);
    novaMetaInput.value = "";
}

adicionarMetaBtn.addEventListener('click', adicionarMeta);
novaMetaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarMeta();
});

// Frases da seção "Inspire-se"
const inspiracoes = [
    "Toda grande jornada começa com um pequeno passo.",
    "Você não precisa ter todas as respostas agora. Apenas comece.",
    "Gentileza com você mesma é o primeiro ato de coragem.",
    "Seu tempo é precioso. Invista em quem te faz bem: você.",
    "O mundo precisa da sua luz única."
];

const inspiracaoTexto = document.getElementById('inspiracaoTexto');
const novaInspiracaoBtn = document.getElementById('novaInspiracaoBtn');

novaInspiracaoBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * inspiracoes.length);
    inspiracaoTexto.textContent = `"${inspiracoes[randomIndex]}"`;
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
