// Contact.jsx — a handwritten label and a short quiet column of ways to reach me.
const Contact = ({ lang }) => {
  const t = window.I18N[lang].contact;

  const wrap = { maxWidth: 1440, margin: '0 auto', padding: '0 40px 160px', minHeight: '60vh' };
  const inner = { paddingLeft: 'clamp(10px, 5vw, 72px)', paddingTop: 'clamp(60px, 16vh, 160px)' };
  const col = 'min(30em, 100%)';
  const hand = { fontFamily: 'var(--font-hand)', fontSize: 28, lineHeight: 1, color: 'var(--fg)', marginBottom: 26 };
  const lede = { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-muted)', maxWidth: col, margin: '0 0 34px' };
  const row = { fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.5, color: 'var(--fg)', margin: '0 0 12px', display: 'flex', gap: 10, flexWrap: 'wrap' };
  const key = { color: 'var(--fg-subtle)', minWidth: 84 };
  const a = { color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--hairline-strong)', paddingBottom: 1 };

  return (
    <section data-screen-label="06 Contact" style={wrap}>
      <div style={inner}>
        <div style={hand}>{lang === 'de' ? 'Kontakt' : 'Contact'}</div>
        <p style={lede}>{t.lede}</p>
        <div style={row}><span style={key}>{lang === 'de' ? 'E-Mail' : 'Email'}</span><a className="nk-underline" style={a} href="mailto:nils@kuhlow.eu">nils@kuhlow.eu</a></div>
        <div style={row}><span style={key}>{lang === 'de' ? 'Telefon' : 'Phone'}</span><a className="nk-underline" style={a} href="tel:+4917664435873">+49 176 64435873</a></div>
        <div style={row}><span style={key}>Instagram</span><a className="nk-underline" style={a} href="https://www.instagram.com/nils_klw/" target="_blank" rel="noopener noreferrer">@nils_klw</a></div>
        <div style={row}><span style={key}>{lang === 'de' ? 'Lebenslauf' : 'CV'}</span><a className="nk-underline" style={a} href="cv.pdf" download="Nils_Kuhlow_Lebenslauf.pdf">{lang === 'de' ? 'als PDF' : 'as PDF'} ↓</a></div>
      </div>
    </section>
  );
};

window.Contact = Contact;
