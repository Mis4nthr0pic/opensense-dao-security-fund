// Main app — renders Landing or Guide page based on hash route.
const { useState, useEffect, useMemo, useRef } = React;

const C = window.OS_CONTENT;
const PlaceholderImg = window.Placeholder;

// Tiny inline markdown: **bold** and *italic* → React fragments. No external deps.
function md(text) {
  if (!text) return null;
  // Split on **...** and *...* keeping delimiters
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (/^\*\*[^*]+\*\*$/.test(p)) return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (/^\*[^*]+\*$/.test(p)) return <em key={i}>{p.slice(1, -1)}</em>;
    return <React.Fragment key={i}>{p}</React.Fragment>;
  });
}

// ─────── Icons (inline) ───────
const I = {
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  external: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" {...p}><path d="M7 17L17 7M9 7h8v8"/></svg>,
  copy: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" {...p}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>,
  twitter: (p) => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" {...p}><path d="M18.244 2H21l-6.51 7.44L22.5 22h-6.93l-4.84-6.32L4.94 22H2.18l6.96-7.96L1.5 2h7.08l4.4 5.83L18.24 2zm-1.21 18h1.61L7.07 4H5.34l11.69 16z"/></svg>,
  youtube: (p) => <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" {...p}><path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5C1.6 4.3.8 5.1.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>,
};

// ─────── Lang hook ───────
function useLang() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("os-lang");
      if (saved === "en" || saved === "pt") return saved;
    } catch (e) {}
    return "en"; // English default — user can switch via toggle (persisted)
  });
  useEffect(() => {
    try { localStorage.setItem("os-lang", lang); } catch (e) {}
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  return [lang, setLang];
}

// ─────── Route hook ───────
function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "/");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [route]);
  return route;
}

// ─────── Nav ───────
function Nav({ lang, setLang, route }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#/" className="brand">
          <span className="brand-mark">
            <img src="logo.png" alt="OpenSense" width="20" height="20" style={{ display: "block", objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; }} />
          </span>
          <span>OpenSense</span>
          <span className="mono" style={{ color: "var(--fg-3)", fontSize: 12, marginLeft: 4 }}>· Giveth</span>
        </a>
        <div className="nav-links">
          <a href="#/" className={`nav-link ${route === "/" ? "active" : ""}`}>{C[lang].nav.home}</a>
          <a href="#/how-to-donate" className={`nav-link guide-link ${route === "/how-to-donate" ? "active" : ""}`}>{C[lang].nav.guide}</a>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")}>PT-BR</button>
          </div>
          <a className="btn btn-primary btn-sm" href={C.donationUrl} target="_blank" rel="noopener noreferrer">
            {C[lang].footer.donateNow} <I.external />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────── Hero (compact) ───────
function Hero({ lang }) {
  const t = C[lang].hero;
  const titleHighlight = lang === "en"
    ? <h1>Help <span className="accent">OpenSense</span> Get Matched</h1>
    : <h1>Ajude o <span className="accent">OpenSense</span> a Receber Matching</h1>;
  const isEn = lang === "en";
  return (
    <section className="hero hero-compact">
      <div className="hero-grid" />
      <div className="container" style={{ position: "relative" }}>
        <span className="eyebrow"><span className="dot"/>{t.eyebrow}</span>
        {titleHighlight}
        <p className="lead">{t.subtitle}</p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-lg" href={C.donationUrl} target="_blank" rel="noopener noreferrer">
            {t.ctaPrimary} <I.external />
          </a>
          <a className="btn btn-secondary btn-lg" href="#/how-to-donate">
            {t.ctaSecondary} <I.arrow />
          </a>
          <span className="check-note"><I.check />{isEn ? "Verify first, then donate" : "Verifique antes, depois doe"}</span>
        </div>
        <MatchingSignal lang={lang} />
        <div className="check-banner">
          <span className="pulse" />
          <span style={{ color: "var(--fg)" }}>
            <strong style={{ fontWeight: 600 }}>{t.checkFirst}.</strong>{" "}
            <span style={{ color: "var(--fg-2)" }}>
              {isEn
                ? "Use the quick path first, then follow the screenshots below so each click is clear."
                : "Use o caminho rápido primeiro, depois siga os screenshots abaixo para entender cada clique."}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

function MatchingSignal({ lang }) {
  const isEn = lang === "en";
  return (
    <div className="matching-signal" aria-label={isEn ? "Matching donation signal" : "Sinal de matching da doacao"}>
      <div className="match-stage">
        <span className="match-label">{isEn ? "You give" : "Voce doa"}</span>
        <strong>$1</strong>
      </div>
      <div className="match-flow" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="match-stage verified">
        <span className="match-label">{isEn ? "Verified wallet" : "Wallet verificada"}</span>
        <strong><I.check /> Passport</strong>
      </div>
      <div className="match-flow boosted" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className="match-stage pool">
        <span className="match-label">{isEn ? "Matching potential" : "Potencial de matching"}</span>
        <strong>$1 + pool</strong>
      </div>
    </div>
  );
}

// ─────── Status ───────
function Status({ lang }) {
  const t = C[lang].status;
  const s = C.stats;
  const pct = Math.min(100, Math.round((s.contributors / s.goalDonors) * 100));
  const [animated, setAnimated] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(pct), 200);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <section style={{ paddingTop: 8 }}>
      <div className="container">
        <div className="status">
          <div className="status-grid">
            <div className="status-cell">
              <div className="num">${s.raisedUsd}<span className="plus">+</span></div>
              <div className="label">{t.raised}</div>
            </div>
            <div className="status-cell">
              <div className="num">{s.contributors}<span className="plus">+</span></div>
              <div className="label">{t.contributors}</div>
            </div>
            <div className="status-cell">
              <div className="num">{s.goalDonors}</div>
              <div className="label">{t.goal}</div>
            </div>
            <div className="status-cell">
              <div className="num">{s.suggestedRange}</div>
              <div className="label">{t.suggested}</div>
              <div className="hint">{t.suggestedHint}</div>
            </div>
          </div>
          <div className="progress">
            <div className="progress-fill" style={{ width: `${animated}%` }} />
          </div>
          <div className="progress-row">
            <span>{s.contributors} / {s.goalDonors} {lang === "en" ? "verified donors" : "doadores verificados"}</span>
            <span>{pct}%</span>
          </div>
          <div className="manual-note">
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--fg-3)" }} />
            {t.manualNote}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── Why this matters ───────
function Why({ lang }) {
  const t = C[lang].why;
  return (
    <section>
      <div className="container">
        <div className="why-grid">
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-sub">{t.body}</p>
            <div className="why-author">
              <div className="avatar">A</div>
              <div className="meta">
                {t.author} ·{" "}
                <a href={C.links.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
                {" · "}
                <a href={C.links.twitter} target="_blank" rel="noopener noreferrer">X</a>
              </div>
            </div>
          </div>
          <div>
            <div className="why-stats">
              {t.stats.map((s, i) => (
                <div className="why-stat" key={i}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--fg-3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {t.topicsLabel}
            </div>
            <div className="topics">
              {t.topics.map((tp) => <span className="topic" key={tp}>{tp}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── QF ───────
function QF({ lang }) {
  const t = C[lang].qf;
  return (
    <section>
      <div className="container">
        <div className="qf">
          <div className="qf-grid">
            <div>
              <p className="section-kicker">{t.kicker}</p>
              <h2 className="section-title" style={{ fontSize: 28 }}>{t.title}</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>{t.body}</p>
              <p className="qf-emphasis">{t.emphasis}</p>
              <p className="qf-caveat">{t.caveat}</p>
            </div>
            <div className="qf-diagram">
              <div className="qf-row">
                <span className="lbl">{t.diagram.without}</span>
                <div className="qf-bar"><div className="qf-bar-fill" style={{ width: "12%" }} /></div>
                <span className="amt">$1</span>
              </div>
              <div className="qf-row boosted">
                <span className="lbl">{t.diagram.withTitle}</span>
                <div className="qf-bar"><div className="qf-bar-fill" style={{ width: "85%" }} /></div>
                <span className="amt">$1 + ⤴︎</span>
              </div>
              <div style={{ marginTop: 12, fontSize: 11, color: "var(--fg-3)", lineHeight: 1.5 }}>
                {lang === "en"
                  ? "Illustrative only — actual matching depends on Giveth's calculation."
                  : "Ilustrativo — o matching real depende do cálculo do Giveth."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── About the round ───────
function Round({ lang }) {
  const t = C[lang].round;
  return (
    <section>
      <div className="container">
        <div className="qf">
          <div className="qf-grid">
            <div>
              <p className="section-kicker">{t.kicker}</p>
              <h2 className="section-title" style={{ fontSize: 28 }}>{t.title}</h2>
              <p style={{ color: "var(--fg)", fontSize: 17, lineHeight: 1.55, margin: "0 0 12px", maxWidth: "60ch" }}>{t.lede}</p>
              <p className="section-sub" style={{ marginBottom: 16 }}>{t.body}</p>
              <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                {t.curatorsLabel}
              </div>
              <div style={{ fontSize: 13, color: "var(--fg-2)", lineHeight: 1.6, marginBottom: 18 }}>{t.curators}</div>
              <p className="qf-emphasis" style={{ marginTop: 0 }}>{t.footnote}</p>
              <a className="btn btn-ghost btn-sm" href={t.ctaUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 14 }}>
                {t.cta} <I.external />
              </a>
            </div>
            <div className="why-stats" style={{ marginBottom: 0 }}>
              {t.stats.map((s, i) => (
                <div className="why-stat" key={i}>
                  <div className="n">{s.n}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── ThreeSteps strip (replaces 6-card grid on landing) ───────
function ThreeSteps({ lang }) {
  const isEn = lang === "en";
  const steps = isEn
    ? [
        { n: "1", t: "Verify your wallet", d: "Click Check eligibility on Giveth, complete Passport with a wallet you actually use." },
        { n: "2", t: "Refresh your score", d: "Return to Giveth and click Refresh score so your verification is picked up." },
        { n: "3", t: "Donate $1-$10", d: "Or more if you want. Choose an amount, Add to Cart, confirm. Done." },
      ]
    : [
        { n: "1", t: "Verifique sua wallet", d: "Clique em Check eligibility no Giveth e complete o Passport com uma wallet que você realmente usa." },
        { n: "2", t: "Atualize seu score", d: "Volte ao Giveth e clique em Refresh score para que a verificação seja reconhecida." },
        { n: "3", t: "Doe $1-$10", d: "Ou mais se quiser. Escolha o valor, Add to Cart, confirme. Pronto." },
      ];
  return (
    <section style={{ paddingTop: 8, paddingBottom: 40 }}>
      <div className="container">
        <div className="three-steps">
          {steps.map((s, i) => (
            <div className="three-step" key={i}>
              <div className="three-step-num">{s.n}</div>
              <div className="three-step-body">
                <div className="three-step-title">{s.t}</div>
                <div className="three-step-text">{s.d}</div>
              </div>
              {i < 2 && <div className="three-step-arrow" aria-hidden>→</div>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 18, fontSize: 13, color: "var(--fg-3)" }}>
          {isEn ? "Need details? " : "Precisa de detalhes? "}
          <a href="#/how-to-donate" style={{ color: "var(--fg)", borderBottom: "1px solid var(--line-2)" }}>
            {isEn ? "See the full walkthrough" : "Veja o passo a passo completo"}
          </a>
        </div>
      </div>
    </section>
  );
}

function ScreenshotModal({ items, index, lang, onClose, onNavigate }) {
  const item = index == null ? null : items[index];
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  const stepLabel = `${lang === "en" ? "Step" : "Passo"} ${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="screenshot-modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={lang === "en" ? "Close screenshot" : "Fechar screenshot"}>
          Close
        </button>
        <button
          className="modal-arrow modal-arrow-prev"
          onClick={() => onNavigate(-1)}
          aria-label={lang === "en" ? "Previous screenshot" : "Screenshot anterior"}
        >
          ‹
        </button>
        <button
          className="modal-arrow modal-arrow-next"
          onClick={() => onNavigate(1)}
          aria-label={lang === "en" ? "Next screenshot" : "Próximo screenshot"}
        >
          ›
        </button>
        <div className="modal-image-wrap">
          <img src={`public/placeholders/${item.image}.png`} alt={item.caption || item.title} />
        </div>
        <div className="modal-copy">
          <div className="modal-step">{stepLabel}</div>
          <h3>{item.title}</h3>
          <p>{md(item.text)}</p>
          <div className="modal-caption">{item.caption}</div>
          <div className="modal-mobile-controls">
            <button onClick={() => onNavigate(-1)}>‹</button>
            <span>{stepLabel}</span>
            <button onClick={() => onNavigate(1)}>›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────── Compact status (single row) ───────
function CompactStatus({ lang }) {
  const t = C[lang].status;
  const s = C.stats;
  const pct = Math.min(100, Math.round((s.contributors / s.goalDonors) * 100));
  const remaining = Math.max(0, s.goalDonors - s.contributors);
  const [animated, setAnimated] = useState(0);
  useEffect(() => { const id = setTimeout(() => setAnimated(pct), 200); return () => clearTimeout(id); }, [pct]);
  return (
    <section style={{ paddingTop: 0, paddingBottom: 40 }}>
      <div className="container">
        <div className="status compact-status">
          <div className="compact-status-row">
            <div className="cs-cell"><span className="cs-num">${s.raisedUsd}+</span><span className="cs-lbl">{t.raised}</span></div>
            <div className="cs-cell"><span className="cs-num">{s.contributors}+</span><span className="cs-lbl">{t.contributors}</span></div>
            <div className="cs-cell"><span className="cs-num">{s.goalDonors}</span><span className="cs-lbl">{t.goal}</span></div>
            <div className="cs-cell"><span className="cs-num">{s.suggestedRange}</span><span className="cs-lbl">{t.suggested}</span></div>
          </div>
          <div className="progress" style={{ marginTop: 18 }}>
            <div className="progress-fill" style={{ width: `${animated}%` }} />
          </div>
          <div className="progress-row">
            <span>{s.contributors} / {s.goalDonors} {lang === "en" ? "verified donors" : "doadores verificados"}</span>
            <span>{pct}%</span>
          </div>
          <div className="donor-momentum">
            <strong>
              {lang === "en"
                ? `${remaining} more verified donors`
                : `Mais ${remaining} doadores verificados`}
            </strong>
            <span>
              {lang === "en"
                ? "can help OpenSense signal broader community support."
                : "podem ajudar o OpenSense a mostrar apoio real da comunidade."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── Compact why (single block) ───────
function CompactWhy({ lang }) {
  const t = C[lang].why;
  const isEn = lang === "en";
  return (
    <section style={{ paddingTop: 8, paddingBottom: 32 }}>
      <div className="container">
        <div className="compact-why">
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2 className="section-title" style={{ fontSize: 28, marginBottom: 10 }}>{t.title}</h2>
            <p style={{ color: "var(--fg-2)", fontSize: 16, lineHeight: 1.55, margin: "0 0 14px", maxWidth: "60ch" }}>{t.body}</p>
            <div className="topics" style={{ marginTop: 4 }}>
              {t.topics.slice(0, 7).map((tp) => <span className="topic" key={tp}>{tp}</span>)}
            </div>
            <div className="why-author" style={{ marginTop: 18 }}>
              <div className="avatar">A</div>
              <div className="meta">
                {t.author} ·{" "}
                <a href={C.links.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>{" · "}
                <a href={C.links.twitter} target="_blank" rel="noopener noreferrer">X</a>
              </div>
            </div>
          </div>
          <div className="why-stats" style={{ marginBottom: 0 }}>
            {t.stats.map((s, i) => (
              <div className="why-stat" key={i}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 18, fontSize: 12, color: "var(--fg-3)", fontFamily: "var(--font-mono)" }}>
          {isEn
            ? "Funded by TheDAO Security Fund — a 75,000+ ETH endowment from the 2016 DAO recovery. "
            : "Financiado pelo TheDAO Security Fund — endowment de 75.000+ ETH da recuperação do DAO de 2016. "}
          <a href={C[lang].round.ctaUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-2)", borderBottom: "1px solid var(--line-2)" }}>
            {isEn ? "Learn about the round →" : "Saiba mais sobre a rodada →"}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────── Steps ───────
function Steps({ lang }) {
  const t = C[lang].steps;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigateModal = (dir) => {
    setSelectedIndex((current) => {
      if (current == null) return current;
      return (current + dir + t.list.length) % t.list.length;
    });
  };
  return (
    <section id="steps" style={{ paddingTop: 16 }}>
      <div className="container">
        <p className="section-kicker">{t.kicker}</p>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-sub">{t.subtitle}</p>
        <div className="steps-grid">
          {t.list.map((s, i) => {
            // Highlight the steps with explicit click actions
            const isCritical = i === 0 || i === 1 || i === 3 || i === 4 || i === 5;
            const isSuccess = s.image === "success";
            return (
              <div className={`step-card ${isCritical ? "is-critical" : ""} ${isSuccess ? "is-success" : ""}`} key={i}>
                <button
                  className="step-mock image-open"
                  onClick={() => setSelectedIndex(i)}
                  aria-label={`${lang === "en" ? "Open larger screenshot for" : "Abrir screenshot maior de"} ${s.title}`}
                >
                  <PlaceholderImg name={s.image} />
                  <span className="image-open-label">{lang === "en" ? "View larger" : "Ver maior"}</span>
                </button>
                <div className="step-body">
                  <div className="step-num">
                    <span className="badge">{i + 1}</span>
                    <span>{lang === "en" ? "Step" : "Passo"} {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-text">{md(s.text)}</p>
                  <div className="step-caption">
                    <span style={{ color: "var(--accent)" }}>›</span> {s.caption}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <a className="btn btn-primary btn-lg" href={C.donationUrl} target="_blank" rel="noopener noreferrer">
            {C[lang].hero.ctaPrimary} <I.arrow />
          </a>
        </div>
        <p className="share-tip">{t.shareTip}</p>
      </div>
      <ScreenshotModal items={t.list} index={selectedIndex} lang={lang} onClose={() => setSelectedIndex(null)} onNavigate={navigateModal} />
    </section>
  );
}

// ─────── Warning ───────
function Warning({ lang }) {
  const t = C[lang].warning;
  return (
    <section style={{ paddingTop: 8, paddingBottom: 32 }}>
      <div className="container">
        <div className="warning">
          <div className="warning-head">
            <span className="dot" />
            <h3>{t.title}</h3>
          </div>
          <ul>
            {t.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─────── Videos carousel ───────
function Videos({ lang }) {
  const t = C[lang].videos;
  const videos = C.videos;
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".video-card");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * step * 1.5, behavior: "smooth" });
  };

  return (
    <section id="videos" style={{ paddingTop: 16 }}>
      <div className="container">
        <div className="videos-head">
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2 className="section-title" style={{ marginBottom: 6 }}>{t.title}</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>{t.sub}</p>
          </div>
          <div className="videos-nav" aria-hidden>
            <button className="vnav" onClick={() => scroll(-1)} aria-label="Previous">‹</button>
            <button className="vnav" onClick={() => scroll(1)} aria-label="Next">›</button>
          </div>
        </div>
      </div>

      <div className="videos-scroller" ref={scrollerRef}>
        <div className="videos-pad-l" aria-hidden />
        {videos.map((v) => (
          <a
            key={v.slug}
            className="video-card"
            href={v.url || C.links.youtubeVideos}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="video-thumb">
              <img src={`public/videos/${v.image || v.slug}.png`} alt={v.title} loading="lazy" />
              <span className="video-duration">{v.duration}</span>
              <span className="video-play" aria-hidden>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </div>
            <div className="video-meta">
              <div className="video-title">{v.title}</div>
              <div className="video-views">{v.views} {t.views}</div>
            </div>
          </a>
        ))}
        <a
          className="video-card video-card-cta"
          href={C.links.youtubeVideos}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="video-cta-inner">
            <svg viewBox="0 0 24 24" width="42" height="42" fill="currentColor" aria-hidden>
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
            </svg>
            <div className="video-cta-text">
              <div className="video-cta-title">{t.cta}</div>
              <div className="video-cta-sub">{t.ctaSub}</div>
            </div>
            <span className="video-cta-arrow"><I.arrow /></span>
          </div>
        </a>
        <div className="videos-pad-r" aria-hidden />
      </div>
    </section>
  );
}

// ─────── FAQ ───────
function FAQ({ lang }) {
  const t = C[lang].faq;
  const [open, setOpen] = useState(0);
  return (
    <section>
      <div className="container">
        <p className="section-kicker">{t.kicker}</p>
        <h2 className="section-title">{t.title}</h2>
        <div className="faq" style={{ marginTop: 16 }}>
          {t.items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="icon"><I.plus /></span>
              </button>
              <div className="faq-a"><div className="faq-a-inner"><div>{it.a}</div></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────── Share ───────
function Share({ lang }) {
  const t = C[lang].share;
  const [copied, setCopied] = useState(false);
  const copy = (txt) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const url = encodeURIComponent(C.donationUrl);
  const msg = encodeURIComponent(t.message);
  return (
    <section>
      <div className="container">
        <div className="share-card">
          <p className="section-kicker">{t.kicker}</p>
          <h2 className="section-title" style={{ fontSize: 26 }}>{t.title}</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>{t.body}</p>
          <div className="share-message">{t.message}</div>
          <div className="share-buttons">
            <button className="btn btn-secondary btn-sm" onClick={() => copy(t.message)}>
              <I.copy /> {copied ? t.copied : t.copy}
            </button>
            <a className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${msg}`}>
              <I.twitter /> {t.twitter}
            </a>
            <a className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" href={`https://t.me/share/url?url=${url}&text=${msg}`}>
              {t.telegram}
            </a>
            <a className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${msg}`}>
              {t.whatsapp}
            </a>
            <button className="btn btn-secondary btn-sm" onClick={() => copy(t.message)}>
              {t.discord}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── Footer ───────
function Footer({ lang }) {
  const t = C[lang].footer;
  return (
    <footer>
      <div className="container foot">
        <div>
          <div className="brand" style={{ marginBottom: 12 }}>
            <span className="brand-mark">
              <img src="logo.png" alt="OpenSense" width="20" height="20" style={{ display: "block", objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; }} />
            </span>
            <span>OpenSense</span>
          </div>
          <div className="foot-brand">{t.mission}</div>
          <div className="foot-meta">{t.builtBy} · © {new Date().getFullYear()}</div>
        </div>
        <div className="foot-links">
          <a href={C.links.youtube} target="_blank" rel="noopener noreferrer"><I.youtube /> YouTube</a>
          <a href={C.links.twitter} target="_blank" rel="noopener noreferrer"><I.twitter /> X</a>
          <a href="#/how-to-donate">{C[lang].nav.guide}</a>
          <a className="btn btn-primary btn-sm" href={C.donationUrl} target="_blank" rel="noopener noreferrer">{t.donateNow} <I.external /></a>
        </div>
      </div>
    </footer>
  );
}

// ─────── Landing page (action-first) ───────
function Landing({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <ThreeSteps lang={lang} />
      <Steps lang={lang} />
      <Warning lang={lang} />
      <CompactStatus lang={lang} />
      <CompactWhy lang={lang} />
      <Videos lang={lang} />
      <Share lang={lang} />
      <FAQ lang={lang} />
    </>
  );
}

// ─────── Guide page ───────
function Guide({ lang }) {
  const g = C[lang].guide;
  const steps = C[lang].steps.list;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigateModal = (dir) => {
    setSelectedIndex((current) => {
      if (current == null) return current;
      return (current + dir + steps.length) % steps.length;
    });
  };
  return (
    <>
      <section className="guide-hero">
        <div className="container">
          <a href="#/" className="nav-link" style={{ paddingLeft: 0, marginBottom: 16, display: "inline-flex" }}>{g.back}</a>
          <p className="section-kicker">{g.eyebrow}</p>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05, fontWeight: 600, margin: "8px 0 16px", maxWidth: "20ch", textWrap: "balance" }}>
            {g.title}
          </h1>
          <p className="section-sub">{g.subtitle}</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btn-primary" href={C.donationUrl} target="_blank" rel="noopener noreferrer">
              {C[lang].hero.ctaPrimary} <I.arrow />
            </a>
            <a className="btn btn-ghost" href="#guide-steps">{g.jumpTo} <I.arrow /></a>
          </div>
          <div className="tldr">
            <h3>{g.tldr.title}</h3>
            <ol>
              {g.tldr.items.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section id="guide-steps" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="section-title">{g.stepsTitle}</h2>
          {steps.map((s, i) => (
            <div className={`guide-step ${i % 2 === 1 ? "reverse" : ""}`} key={i}>
              <div>
                <div className="num">{lang === "en" ? "Step" : "Passo"} {String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p>{md(s.text)}</p>
                <p style={{ fontSize: 13, color: "var(--fg-3)", fontFamily: "var(--font-mono)" }}>› {s.caption}</p>
              </div>
              <button
                className="guide-step-mock image-open"
                onClick={() => setSelectedIndex(i)}
                aria-label={`${lang === "en" ? "Open larger screenshot for" : "Abrir screenshot maior de"} ${s.title}`}
              >
                <PlaceholderImg name={s.image} />
                <span className="image-open-label">{lang === "en" ? "View larger" : "Ver maior"}</span>
              </button>
            </div>
          ))}
          <div className="stuck">
            <h3>{g.stillStuck.title}</h3>
            <p>{g.stillStuck.body}</p>
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <a className="btn btn-primary btn-lg" href={C.donationUrl} target="_blank" rel="noopener noreferrer">
              {C[lang].hero.ctaPrimary} <I.arrow />
            </a>
          </div>
        </div>
      </section>

      <Warning lang={lang} />
      <ScreenshotModal items={steps} index={selectedIndex} lang={lang} onClose={() => setSelectedIndex(null)} onNavigate={navigateModal} />
    </>
  );
}

// ─────── App ───────
function App() {
  const [lang, setLang] = useLang();
  const route = useRoute();
  return (
    <>
      <Nav lang={lang} setLang={setLang} route={route} />
      {route === "/how-to-donate" || route === "/docs" ? <Guide lang={lang} /> : <Landing lang={lang} />}
      <Footer lang={lang} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
