// ═══════════════════════════
// NUVIX TECNOLOGIA — script.js
// ═══════════════════════════

// ── Navbar scroll ──
const navbar = document.getElementById('nav');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Mobile nav ──
const burger = document.getElementById('burger');
const navLinks  = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(i * 0.06, 0.3)}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.pilar, .svc-card, .plan-card, .step, .faq-item, .sec-header')
  .forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });

// ── Plans tabs ──
const ptabs   = document.querySelectorAll('.tab');
const ppanels = document.querySelectorAll('.tab-panel');
ptabs.forEach(tab => {
  tab.addEventListener('click', function() {
    ptabs.forEach(t => t.classList.remove('active'));
    ppanels.forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    const panel = document.querySelector(`.tab-panel[data-panel="${this.dataset.tab}"]`);
    if (panel) panel.classList.add('active');
  });
});

// ── FAQ ──
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', function() {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Contact form ──
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      formSuccess.style.display = 'block';
    }, 1200);
  });
}

// ── Modal data ──
const modalData = {
  sites: {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    title: 'Sites Profissionais',
    desc: 'Desenvolvemos landing pages e sites institucionais com foco em conversão, desempenho e posicionamento no Google. Cada projeto é personalizado para refletir a identidade da sua empresa.',
    benefits: [
      'Design responsivo para todos os dispositivos',
      'SEO on-page configurado para o Google',
      'Integração com Google Analytics e Tag Manager',
      'Formulários de contato e WhatsApp integrados',
      'Certificado SSL e carregamento rápido',
      'Painel de edição simples',
      'Orientação de domínio e hospedagem'
    ]
  },
  ecommerce: {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    title: 'Loja Virtual',
    desc: 'E-commerce completo com catálogo, carrinho de compras e gateway de pagamento integrado. Seus clientes compram 24 horas por dia, de forma autônoma e segura.',
    benefits: [
      'Catálogo de produtos com fotos e variações',
      'Carrinho e checkout otimizados',
      'PIX, cartão de crédito e boleto bancário',
      'Painel administrativo intuitivo',
      'Notificações automáticas de pedidos',
      'Design responsivo mobile-first',
      'Relatórios de vendas e estoque'
    ]
  },
  whatsapp: {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: 'Automação de WhatsApp',
    desc: 'Implementamos fluxos de atendimento automatizado no WhatsApp Business que qualificam leads e mantêm sua empresa ativa 24 horas — nenhum cliente fica sem resposta.',
    benefits: [
      'Fluxos de atendimento com menu interativo',
      'Qualificação de leads por intenção de compra',
      'Respostas automáticas para dúvidas frequentes',
      'Agendamento e envio de mensagens programadas',
      'Integração com CRM e planilhas',
      'Relatórios de atendimento e conversão',
      'Configuração personalizada para seu processo'
    ]
  },
  cobranca: {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    title: 'Cobrança Automática',
    desc: 'Automatizamos todo o ciclo de cobrança — da geração do boleto ao lembrete de vencimento e confirmação de pagamento. Reduz inadimplência e elimina o trabalho manual.',
    benefits: [
      'Geração automática de boletos e PIX',
      'Régua de cobrança configurável',
      'Notificações por WhatsApp e e-mail',
      'Confirmação automática de pagamento',
      'Relatório de inadimplência',
      'Integração com principais bancos',
      'Histórico completo por cliente'
    ]
  },
  dashboard: {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><polyline points="7 8 10 11 13 8 16 11"/></svg>`,
    title: 'Dashboards',
    desc: 'Painéis de controle com indicadores-chave em tempo real para acompanhar o desempenho do negócio de forma visual e objetiva. Decisões mais rápidas, baseadas em dados reais.',
    benefits: [
      'KPIs atualizados em tempo real',
      'Gráficos de vendas e desempenho',
      'Acesso pelo celular, tablet ou computador',
      'Exportação em PDF e Excel',
      'Alertas automáticos por metas',
      'Integração com sistemas existentes',
      'Interface simplificada'
    ]
  },
  sistemas: {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: 'Sistemas Personalizados',
    desc: 'Desenvolvemos softwares sob medida para automatizar processos específicos do seu negócio. Do levantamento de requisitos à entrega com treinamento — sem adaptações forçadas.',
    benefits: [
      'Levantamento completo de requisitos',
      'Desenvolvimento ágil com entregas parciais',
      'Interface pensada para o usuário final',
      'Documentação e manual incluídos',
      'Treinamento da equipe na entrega',
      'Suporte e manutenção contínua',
      'Arquitetura escalável'
    ]
  }
};

const overlay = document.getElementById('modal-overlay');
const mContent = document.getElementById('modal-content');
const mClose = document.getElementById('modalClose');

function openModal(key) {
  const d = modalData[key];
  if (!d || !overlay) return;
  mContent.innerHTML = `
    <div class="modal-icon">${d.icon}</div>
    <h3>${d.title}</h3>
    <p class="modal-desc">${d.desc}</p>
    <ul>${d.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
    <a href="https://wa.me/5561999999999?text=Quero%20saber%20mais%20sobre%20${encodeURIComponent(d.title)}!" target="_blank" class="btn btn-primary btn-full">
      Solicitar informações pelo WhatsApp
    </a>
  `;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-btn').forEach(btn =>
  btn.addEventListener('click', e => { e.stopPropagation(); openModal(btn.dataset.modal); })
);
if (mClose) mClose.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
