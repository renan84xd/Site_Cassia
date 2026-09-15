import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const areas = [
  {
    title: "Direito de Família",
    text: "Atuação cuidadosa e estratégica em questões familiares e patrimoniais.",
  },
  {
    title: "Direito Civil",
    text: "Orientação jurídica para relações, contratos e demandas do cotidiano.",
  },
  {
    title: "Consultoria Jurídica",
    text: "Análise preventiva para decisões mais seguras e conscientes.",
  },
];

const faqs = [
  ["Como funciona o primeiro atendimento?", "O primeiro contato é destinado a compreender brevemente a situação e identificar o melhor caminho para uma análise jurídica adequada."],
  ["O atendimento pode ser online?", "Sim. O formato pode ser ajustado conforme a necessidade e a disponibilidade da profissional."],
  ["Como agendar uma consulta?", "Você pode entrar em contato pelo WhatsApp ou pelos canais indicados nesta página para verificar horários disponíveis."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Kassia Vieira - início">
          <span className="brand-mark"><Scale size={25} strokeWidth={1.5} /></span>
          <span>
            <strong>KASSIA VIEIRA</strong>
            <small>ADVOCACIA E CONSULTORIA JURÍDICA</small>
          </span>
        </a>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#faq">Dúvidas</a>
        </nav>

        <a className="header-cta" href="#contato">Fale comigo <ArrowUpRight size={16} /></a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">ADVOCACIA • CONSULTORIA JURÍDICA</p>
          <h1>Segurança jurídica para decisões que <em>importam.</em></h1>
          <p className="hero-text">
            Atendimento próximo, estratégico e personalizado para compreender
            cada caso com atenção aos detalhes.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contato">Agende uma conversa <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#atuacao">Conheça minha atuação <span>↓</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Elemento decorativo inspirado na balança da identidade visual">
          <div className="art-frame">
            <div className="art-line" />
            <Scale size={220} strokeWidth={0.75} />
            <span>JUSTIÇA • ESTRATÉGIA • CONFIANÇA</span>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div><span>01</span><p>Atendimento<br /><b>individualizado</b></p></div>
        <div><span>02</span><p>Atuação<br /><b>estratégica</b></p></div>
        <div><span>03</span><p>Comunicação<br /><b>transparente</b></p></div>
      </section>

      <section id="sobre" className="section about">
        <div className="section-label">SOBRE</div>
        <div className="about-content">
          <div>
            <p className="eyebrow">KASSIA VIEIRA</p>
            <h2>Direito com <em>clareza, cuidado</em> e estratégia.</h2>
          </div>
          <div className="about-text">
            <p>
              Cada demanda possui suas particularidades. Por isso, o trabalho
              começa pela escuta atenta e pela compreensão do contexto de cada
              cliente.
            </p>
            <p>
              A proposta é unir conhecimento jurídico, comunicação clara e
              estratégia para oferecer um atendimento profissional e próximo.
            </p>
            <a className="text-link dark" href="#contato">Entre em contato <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="atuacao" className="section areas">
        <div className="section-heading">
          <div>
            <div className="section-label">ÁREAS DE ATUAÇÃO</div>
            <h2>Como posso <em>ajudar?</em></h2>
          </div>
          <p>Uma atuação pensada para oferecer orientação jurídica com objetividade e atenção a cada situação.</p>
        </div>

        <div className="area-grid">
          {areas.map((area, index) => (
            <article className="area-card" key={area.title}>
              <span className="number">0{index + 1}</span>
              <Scale size={28} strokeWidth={1.2} />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <a href="#contato" aria-label={`Saiba mais sobre ${area.title}`}><ArrowUpRight /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="atendimento" className="process">
        <div className="process-inner">
          <div>
            <div className="section-label light">ATENDIMENTO</div>
            <h2>Do primeiro contato à estratégia, <em>sem complicação.</em></h2>
          </div>
          <div className="steps">
            <div><span>01</span><h3>Conversa inicial</h3><p>Entendimento da situação e das necessidades.</p></div>
            <div><span>02</span><h3>Análise</h3><p>Avaliação jurídica cuidadosa do caso apresentado.</p></div>
            <div><span>03</span><h3>Orientação</h3><p>Definição dos próximos passos de forma clara.</p></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="section-label">DÚVIDAS FREQUENTES</div>
        <h2>Antes de <em>começar</em></h2>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<ChevronDown size={20} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contact-content">
          <div>
            <div className="section-label light">CONTATO</div>
            <h2>Vamos conversar sobre o seu <em>caso?</em></h2>
            <p>Entre em contato para saber mais sobre o atendimento e agendar uma conversa.</p>
          </div>
          <div className="contact-links">
            <a href="https://wa.me/5547992835496" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp <ArrowUpRight /></a>
            <a href="mailto:kassiavieira.advocacia@gmail.com"><Mail /> E-mail <ArrowUpRight /></a>
            <a href="https://instagram.com/adv.kassiavieira" target="_blank" rel="noreferrer"><Instagram /> Instagram <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Scale size={20} /> KASSIA VIEIRA</div>
        <p>Advocacia e Consultoria Jurídica</p>
        <span>© {new Date().getFullYear()} Kassia Vieira. Todos os direitos reservados.</span>
      </footer>
    </main>
  );
}