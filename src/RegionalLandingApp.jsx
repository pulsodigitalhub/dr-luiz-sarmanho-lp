import { useEffect } from "react";
import "./styles.css";
import { REGIONS, REGION_SLUGS } from "./regions.js";
import { useLandingEffects } from "./useLandingEffects.js";

const WHATSAPP_PHONE = "556135518009";
const DEFAULT_SLUG = "quadril";

function getPageContext() {
  if (typeof window === "undefined") {
    return { slug: DEFAULT_SLUG, isMeta: false };
  }

  const parts = window.location.pathname.split("/").filter(Boolean);
  const metaIndex = parts.indexOf("meta");
  const rawSlug = metaIndex >= 0
    ? parts[metaIndex + 1]
    : parts.find((part) => REGION_SLUGS.includes(part));

  return {
    slug: REGION_SLUGS.includes(rawSlug) ? rawSlug : DEFAULT_SLUG,
    isMeta: metaIndex >= 0,
  };
}

function iconPath(assetBase, icon) {
  return `${assetBase}icons/health-line/${icon}.svg`;
}

function serviceCard(assetBase, item) {
  return `<article class="service">
    <div class="service-icon"><img src="${iconPath(assetBase, item.icon)}" alt="" aria-hidden="true"></div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  </article>`;
}

function conditionCard(assetBase, item) {
  return `<article class="condition">
    <div class="icon"><img src="${iconPath(assetBase, item.icon)}" alt="" aria-hidden="true"></div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  </article>`;
}

function procedureStep(assetBase, item) {
  return `<article class="step">
    <img src="${iconPath(assetBase, item.icon)}" alt="" aria-hidden="true">
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  </article>`;
}

function buildLeadAction({ region, isMeta, assetBase, whatsappUrl }) {
  if (isMeta) {
    return `<div class="hero-actions">
      <a class="button whatsapp-button" href="${whatsappUrl}" target="_blank" rel="noopener">
        <img src="${assetBase}icons/whatsapp.svg" alt="" aria-hidden="true">
        Agendar pelo WhatsApp
      </a>
    </div>`;
  }

  return `<div class="hero-actions">
    <form id="agendamento" class="lead-form" aria-label="Formulário de agendamento" data-specialty="${region.whatsappSubject}" data-slug="${region.slug}">
      <div class="lead-form-intro">
        <img class="lead-form-whatsapp" src="${assetBase}icons/whatsapp.svg" alt="" aria-hidden="true">
        <strong>Preencha para iniciar o atendimento</strong>
        <p>Informe seus dados para agendar avaliação de ${region.whatsappSubject}.</p>
      </div>
      <label>
        <span>Nome</span>
        <input type="text" name="nome" autocomplete="name" placeholder="Seu nome" required>
      </label>
      <label>
        <span>Telefone</span>
        <input type="tel" name="telefone" autocomplete="tel" inputmode="tel" placeholder="(61) 99999-9999" required>
      </label>
      <button class="button whatsapp-button" type="submit">
        <img src="${assetBase}icons/whatsapp.svg" alt="" aria-hidden="true">
        Continuar pelo WhatsApp
      </button>
    </form>
  </div>`;
}

function buildPageMarkup({ region, isMeta, assetBase }) {
  const whatsappBaseMessage = `Olá, gostaria de agendar uma avaliação para ${region.whatsappSubject} com o Dr. Luiz Sarmanho.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappBaseMessage)}`;
  const ctaHref = isMeta ? whatsappUrl : "#agendamento";
  const ctaTarget = isMeta ? " target=\"_blank\" rel=\"noopener\"" : "";

  return `<header class="topbar">
    <div class="container nav">
      <a href="#inicio" class="brand" aria-label="Dr. Luiz Sarmanho">
        <span class="brand-mark"><img src="${assetBase}brand/simbolo-dr-luiz.svg" alt="" aria-hidden="true"></span>
        <span class="brand-copy">
          <strong>Luiz Sarmanho</strong>
          <small>${region.navSubtitle}</small>
        </span>
      </a>

      <nav class="nav-links" aria-label="Navegação principal">
        <a href="#sintomas">Sintomas</a>
        <a href="#causas">Causas</a>
        <a href="#procedimentos">Condutas</a>
        <a href="#sobre">Sobre</a>
        <a href="#duvidas">Dúvidas</a>
      </nav>

      <a class="button primary" href="${ctaHref}"${ctaTarget}>
        <img src="${assetBase}icons/health-line/phone.svg" alt="" aria-hidden="true">
        Agendar
      </a>
    </div>
  </header>

  <main id="inicio">
    <section class="hero" aria-label="Apresentação">
      <div class="container hero-inner">
        <div class="hero-content">
          <h1>${region.heroTitle}</h1>
          <p class="hero-copy">${region.heroCopy}</p>
          ${buildLeadAction({ region, isMeta, assetBase, whatsappUrl })}

          <figure class="hero-mobile-photo">
            <img src="${assetBase}foto-background.png" alt="Dr. Luiz Henrique Sarmanho">
          </figure>

          <div class="hero-doctor-badge" aria-label="Credenciais do Dr. Luiz Sarmanho">
            <strong>Dr. Luiz Sarmanho</strong>
            <span>Ortopedista | CRM 17931 DF | RQE 13110</span>
          </div>

          <div class="hero-proof" aria-label="Diferenciais do Dr. Luiz Sarmanho">
            <div class="proof-item">
              <strong>+10</strong>
              <span>anos de experiência em ortopedia</span>
            </div>
            <div class="proof-item">
              <strong>+2.000</strong>
              <span>cirurgias realizadas</span>
            </div>
            <div class="proof-item">
              <strong>${region.name}</strong>
              <span>${region.proofFocus}</span>
            </div>
            <div class="proof-item">
              <strong>Brasília</strong>
              <span>atendimento na Unique Ortopedia, Asa Sul</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sintomas" class="treatment-band">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Sinais de atenção</div>
            <h2>${region.symptomsTitle}</h2>
          </div>
          <p>${region.symptomsCopy}</p>
        </div>
        <div class="service-grid">
          ${region.symptoms.map((item) => serviceCard(assetBase, item)).join("")}
        </div>
      </div>
    </section>

    <section id="causas" class="problem-band">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Possíveis causas</div>
            <h2>${region.causesTitle}</h2>
          </div>
          <p>${region.causesCopy}</p>
        </div>
        <div class="condition-grid">
          ${region.causes.map((item) => conditionCard(assetBase, item)).join("")}
        </div>
      </div>
    </section>

    <section id="procedimentos">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Conduta médica</div>
            <h2>${region.proceduresTitle}</h2>
          </div>
          <p>${region.proceduresCopy}</p>
        </div>
        <div class="process">
          ${region.procedures.map((item) => procedureStep(assetBase, item)).join("")}
        </div>
      </div>
    </section>

    <section class="problem-band">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Quando procurar avaliação</div>
            <h2>Procure uma avaliação se a dor está limitando movimento, sono ou rotina.</h2>
          </div>
        </div>
        <div class="condition-grid">
          ${region.when.map((sign) => `<article class="condition"><div class="icon"><img src="${iconPath(assetBase, "appointment-check")}" alt="" aria-hidden="true"></div><h3>${sign}</h3><p>A consulta ajuda a entender a causa e definir o melhor caminho para o seu caso.</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section id="sobre">
      <div class="container split">
        <div class="surface doctor-photo" role="img" aria-label="Dr. Luiz Sarmanho em ambiente de atendimento"></div>
        <div class="surface bio">
          <div class="kicker">Sobre o Dr. Luiz Sarmanho</div>
          <h2>Um ortopedista com vivência em consultório, hospital e centro cirúrgico.</h2>
          <p>Dr. Luiz Henrique Corrêa da Costa Sarmanho é médico ortopedista com atuação em ortopedia, cirurgia do quadril, artroplastia total e procedimentos ortopédicos relacionados ao controle da dor.</p>
          <p>${region.bioFocusCopy}</p>
          <p>No atendimento, a proposta é conduzir a avaliação com clareza, sem promessas prontas e com orientação individualizada.</p>
          <div class="timeline">
            <div class="timeline-item"><div><strong>Residência em Ortopedia e Traumatologia</strong><small>Formação pela Secretaria de Estado de Saúde do Distrito Federal.</small></div></div>
            <div class="timeline-item"><div><strong>SBOT</strong><small>Membro titular da Sociedade Brasileira de Ortopedia e Traumatologia.</small></div></div>
            <div class="timeline-item"><div><strong>Preceptor de residentes no HRT</strong><small>Participa na formação teórica e prática de novos ortopedistas.</small></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-row">
        <div>
          <h2>${region.finalCta}</h2>
          <p>Fale com a equipe para verificar disponibilidade, convênio e agendar uma avaliação com o Dr. Luiz.</p>
        </div>
        <a class="button primary" href="${ctaHref}"${ctaTarget}>
          <img src="${assetBase}icons/health-line/calendar.svg" alt="" aria-hidden="true">
          Agendar avaliação
        </a>
      </div>
    </section>

    <section id="convenios">
      <div class="container insurance-wrap">
        <div class="insurance-panel">
          <div class="kicker">Convênios</div>
          <h2>Atendimento particular e por convênios selecionados.</h2>
          <p>A disponibilidade pode variar conforme o tipo de atendimento, procedimento e regras de cada convênio. Antes de marcar, fale com a equipe pelo WhatsApp para confirmar se o seu plano é aceito para o caso desejado.</p>
          <a class="button dark" href="${ctaHref}"${ctaTarget}>
            <img src="${assetBase}icons/health-line/insurance-card.svg" alt="" aria-hidden="true">
            Confirmar meu convênio
          </a>
        </div>
      </div>
    </section>

    <section id="localizacao" class="location-section">
      <div class="container location-wrap">
        <div class="location-copy">
          <div class="kicker">Localização</div>
          <div class="location-address">
            <strong>Unique Ortopedia, Asa Sul</strong>
            <span>SGAS II 610 Centro Médico Lúcio Costa, Sala 07</span>
            <span>Asa Sul, Brasília, DF, 70200-700</span>
          </div>
          <div class="location-hours">
            <img src="${assetBase}icons/health-line/calendar.svg" alt="" aria-hidden="true">
            <span>Horário de funcionamento, segunda a sexta, 07:00 às 20:00, sábado, 08:00 às 12:00.</span>
          </div>
        </div>
        <div class="map-card" aria-label="Mapa da Unique Ortopedia Asa Sul">
          <iframe title="Mapa da Unique Ortopedia Asa Sul" src="https://www.openstreetmap.org/export/embed.html?bbox=-47.9042%2C-15.8278%2C-47.8942%2C-15.8198&layer=mapnik&marker=-15.8238%2C-47.8992" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section id="duvidas">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Dúvidas frequentes</div>
            <h2>Dúvidas comuns sobre ${region.whatsappSubject}.</h2>
          </div>
          <p>As respostas ajudam no primeiro contato. A indicação final depende da avaliação médica individual.</p>
        </div>
        <div class="faq">
          ${region.faq.map((item, index) => `<div class="faq-item ${index === 0 ? "open" : ""}"><button class="faq-question" type="button">${item.q}<span class="faq-indicator" aria-hidden="true"></span></button><div class="faq-answer">${item.a}</div></div>`).join("")}
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-grid">
      <div>
        <strong>Dr. Luiz Henrique Corrêa da Costa Sarmanho</strong>
        <span class="footer-credentials">CRM 17931 DF | RQE 13110 | TEOT 14336</span>
        <p class="footer-detail"><img src="${assetBase}icons/health-line/ambulatory-clinic.svg" alt="" aria-hidden="true"><span>Unique Ortopedia, Asa Sul, SGAS II SGAS 610 Centro Médico Lúcio Costa Sala 07, Asa Sul, Brasília, DF, 70200-700.</span></p>
      </div>
      <a class="button primary" href="${ctaHref}"${ctaTarget}>
        <img src="${assetBase}icons/health-line/appointment-check.svg" alt="" aria-hidden="true">
        Agendar consulta
      </a>
    </div>
  </footer>

  <div class="floating-cta">
    <a class="button dark" href="${ctaHref}"${ctaTarget}>
      <img src="${assetBase}icons/health-line/phone.svg" alt="" aria-hidden="true">
      Agendar
    </a>
  </div>`;
}

export default function RegionalLandingApp() {
  const { slug, isMeta } = getPageContext();
  const region = REGIONS[slug] || REGIONS[DEFAULT_SLUG];
  const assetBase = isMeta ? "../../assets/" : "../assets/";
  const pageType = isMeta ? "meta-regional" : "regional";
  const leadContext = {
    lp_slug: region.slug,
    body_region: region.name,
    especialidade: region.whatsappSubject,
    pagina_tipo: pageType,
  };

  useEffect(() => {
    document.title = isMeta
      ? `${region.name} pelo WhatsApp | Dr. Luiz Sarmanho`
      : region.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", region.description);
  }, [isMeta, region]);

  useLandingEffects({
    enableForm: !isMeta,
    whatsappPhone: WHATSAPP_PHONE,
    leadContext,
    whatsappMessage: ({ nome, telefone }) => `Olá, gostaria de agendar uma avaliação para ${region.whatsappSubject} com o Dr. Luiz Sarmanho.\n\nNome: ${nome}\nTelefone: ${telefone}`,
  });

  return <div dangerouslySetInnerHTML={{ __html: buildPageMarkup({ region, isMeta, assetBase }) }} />;
}
