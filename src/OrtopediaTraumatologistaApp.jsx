import { useEffect } from "react";
import "./styles.css";

const WHATSAPP_PHONE = "556135518009";
const WHATSAPP_MESSAGE =
  "Olá, gostaria de agendar uma avaliação com o Dr. Luiz Sarmanho (ortopedista e traumatologista).";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function useSimpleLandingEffects() {
  useEffect(() => {
    const updateFloatingCta = () => {
      document.body.classList.toggle(
        "show-floating-cta",
        window.scrollY > window.innerHeight * 0.5
      );
    };
    updateFloatingCta();
    window.addEventListener("scroll", updateFloatingCta, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateFloatingCta);
      document.body.classList.remove("show-floating-cta");
    };
  }, []);
}

function trackWhatsAppClick() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    form_name: "cta_whatsapp_direto",
    page_slug: "ortopedista-traumatologista",
  });
}

export default function OrtopediaTraumatologistaApp() {
  useSimpleLandingEffects();

  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Dr. Luiz Sarmanho">
            <span className="brand-mark">
              <img src="../assets/brand/simbolo-dr-luiz.svg" alt="" aria-hidden="true" />
            </span>
            <span className="brand-copy">
              <strong>Luiz Sarmanho</strong>
              <small>Ortopedia e traumatologia</small>
            </span>
          </a>

          <a
            className="button primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            onClick={trackWhatsAppClick}
          >
            <img src="../assets/icons/whatsapp.svg" alt="" aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero" aria-label="Apresentação">
          <div className="container hero-inner">
            <div className="hero-content">
              <h1>
                Ortopedista e <span className="hero-title-accent">traumatologista</span> em{" "}
                <span className="hero-title-accent">Brasília</span>
              </h1>
              <p className="hero-copy">
                Agende uma avaliação com o Dr. Luiz Sarmanho para dores articulares,
                lesões, traumas, fraturas, artrose e outras queixas ortopédicas.
              </p>

              <div className="hero-actions">
                <div className="cta-card lead-popup-card">
                  <p>Agende sua avaliação direto pelo WhatsApp.</p>
                  <a
                    className="button whatsapp-button"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                    onClick={trackWhatsAppClick}
                  >
                    <img src="../assets/icons/whatsapp.svg" alt="" aria-hidden="true" />
                    Agendar avaliação
                  </a>
                </div>
              </div>

              <figure className="hero-mobile-photo">
                <img src="../assets/foto-background.png" alt="Dr. Luiz Henrique Sarmanho" />
              </figure>

              <div
                className="hero-doctor-badge"
                aria-label="Credenciais do Dr. Luiz Sarmanho"
              >
                <strong>Dr. Luiz Sarmanho</strong>
                <span>Ortopedista e traumatologista | CRM 17931 DF | RQE 13110 | TEOT 14336</span>
              </div>

              <div
                className="hero-proof"
                aria-label="Diferenciais do Dr. Luiz Sarmanho"
              >
                <div className="proof-item">
                  <strong>+10</strong>
                  <span>anos de experiência em ortopedia</span>
                </div>
                <div className="proof-item">
                  <strong>+2.000</strong>
                  <span>cirurgias realizadas</span>
                </div>
                <div className="proof-item">
                  <strong>+40</strong>
                  <span>convênios aceitos ou em validação pela clínica</span>
                </div>
                <div className="proof-item">
                  <strong>Fácil acesso</strong>
                  <span>consultório moderno em localização acessível</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="floating-cta">
        <a
          className="button dark"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          onClick={trackWhatsAppClick}
        >
          <img src="../assets/icons/whatsapp.svg" alt="" aria-hidden="true" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
}
