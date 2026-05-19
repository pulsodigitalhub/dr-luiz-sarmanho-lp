import { useEffect } from "react";
import "./styles.css";

const pageMarkup = `<header class="topbar">
    <div class="container nav">
      <a href="#inicio" class="brand" aria-label="Dr. Luiz Sarmanho">
        <span class="brand-mark">LS</span>
        <span>Dr. Luiz Sarmanho</span>
      </a>

      <nav class="nav-links" aria-label="Navegação principal">
        <a href="#tratamentos">Tratamentos</a>
        <a href="#sobre">Sobre</a>
        <a href="#convenios">Convênios</a>
        <a href="#duvidas">Dúvidas</a>
      </nav>

      <a class="button primary" href="https://wa.me/5561992371117?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Luiz%20Sarmanho." target="_blank" rel="noopener">
        <img src="assets/icons/health-line/phone.svg" alt="" aria-hidden="true">
        WhatsApp
      </a>
    </div>
  </header>

  <main id="inicio">
    <section class="hero" aria-label="Apresentação">
      <div class="container hero-inner">
        <div class="hero-content">
          <h1>Ortopedista <span class="hero-title-accent">e</span> Traumatologista <span class="hero-title-accent">em Brasília</span></h1>
          <p class="hero-copy">Agende uma avaliação com o Dr. Luiz Sarmanho, ortopedista com atuação em trauma, quadril, artroplastia total e procedimentos ortopédicos relacionados à dor.</p>
          <div class="hero-actions">
            <a class="button primary" href="https://wa.me/5561992371117?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Luiz%20Sarmanho." target="_blank" rel="noopener">
              <img src="assets/icons/health-line/calendar.svg" alt="" aria-hidden="true">
              Agendar avaliação
            </a>
          </div>

          <figure class="hero-mobile-photo">
            <img src="assets/foto-background.png" alt="Dr. Luiz Henrique Sarmanho">
          </figure>

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
              <strong>+40</strong>
              <span>convênios aceitos ou em validação pela clínica</span>
            </div>
            <div class="proof-item">
              <strong>Fácil acesso</strong>
              <span>consultório moderno em localização acessível</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="problem-band">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>Quando marcar uma consulta</h2>
          </div>
        </div>

        <div class="condition-grid">
          <article class="condition">
            <div class="icon"><img src="assets/icons/health-line/leg.svg" alt="" aria-hidden="true"></div>
            <h3>Dor no quadril</h3>
            <p>Para quem sente dor ao caminhar, levantar da cadeira, subir escadas ou permanecer muito tempo em pé.</p>
          </article>
          <article class="condition">
            <div class="icon"><img src="assets/icons/health-line/xray.svg" alt="" aria-hidden="true"></div>
            <h3>Artrose e desgaste articular</h3>
            <p>Avaliação do grau de desgaste, impacto na rotina e possibilidades de tratamento conforme o caso.</p>
          </article>
          <article class="condition">
            <div class="icon"><img src="assets/icons/health-line/trauma-alert.svg" alt="" aria-hidden="true"></div>
            <h3>Fraturas e traumas</h3>
            <p>Atendimento para lesões traumáticas e acompanhamento de casos com maior complexidade ortopédica.</p>
          </article>
          <article class="condition">
            <div class="icon"><img src="assets/icons/health-line/pain-burst.svg" alt="" aria-hidden="true"></div>
            <h3>Dor que não melhora</h3>
            <p>Quando a dor persiste por semanas, volta com frequência ou limita atividades simples da rotina.</p>
          </article>
          <article class="condition">
            <div class="icon"><img src="assets/icons/health-line/walking.svg" alt="" aria-hidden="true"></div>
            <h3>Dificuldade para se movimentar</h3>
            <p>Rigidez, perda de mobilidade, insegurança para caminhar ou dificuldade para subir escadas.</p>
          </article>
          <article class="condition">
            <div class="icon"><img src="assets/icons/health-line/foot.svg" alt="" aria-hidden="true"></div>
            <h3>Quedas ou piora após esforço</h3>
            <p>Casos em que a dor começa ou piora depois de queda, torção, impacto ou aumento de carga.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="sobre">
      <div class="container split">
        <div class="surface doctor-photo" role="img" aria-label="Dr. Luiz Sarmanho em ambiente de atendimento"></div>
        <div class="surface bio">
          <div class="kicker">Sobre o Dr. Luiz Sarmanho</div>
          <h2>Um ortopedista com vivência em consultório, hospital e centro cirúrgico.</h2>
          <p>Dr. Luiz Henrique Corrêa da Costa Sarmanho é médico ortopedista e traumatologista. Sua atuação envolve trauma ortopédico de alta complexidade, tratamento do quadril, artroplastia total e procedimentos ortopédicos relacionados à dor.</p>
          <p>Ao longo da carreira, acumulou experiência no tratamento de fraturas de pelve e acetábulo, reconstrução articular e cirurgias de quadril. Também atua como mentor de residentes no Hospital Regional de Taguatinga, participando da formação de novos ortopedistas.</p>
          <p>No atendimento, a proposta é explicar o caso com clareza: o que pode estar causando a dor, quais exames fazem sentido, quais caminhos existem e quando um procedimento ou cirurgia deve ser considerado.</p>

          <div class="timeline">
            <div class="timeline-item">
              <div>
                <strong>Residência em Ortopedia e Traumatologia</strong>
                <small>Formação pela Secretaria de Estado de Saúde do Distrito Federal, com atuação no HRT.</small>
              </div>
            </div>
            <div class="timeline-item">
              <div>
                <strong>SBOT</strong>
                <small>Membro titular da Sociedade Brasileira de Ortopedia e Traumatologia.</small>
              </div>
            </div>
            <div class="timeline-item">
              <div>
                <strong>Mentor de residentes no HRT</strong>
                <small>Participa da orientação teórica e prática de novos ortopedistas.</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container stats">
        <p class="stats-label">Vivência voltada a casos ortopédicos de maior complexidade</p>
        <div class="stat">
          <strong>+2.000</strong>
          <span>cirurgias realizadas ao longo da trajetória médica</span>
        </div>
        <div class="stat">
          <strong>Quadril</strong>
          <span>artroplastia total, fraturas e reconstrução articular</span>
        </div>
        <div class="stat">
          <strong>Dor</strong>
          <span>procedimentos ortopédicos relacionados à dor</span>
        </div>
      </div>
    </section>

    <section class="media-showcase" aria-label="Registros profissionais do Dr. Luiz Sarmanho">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Atuação na prática</div>
            <h2>Experiência em casos ortopédicos que exigem precisão.</h2>
          </div>
          <p>Experiência cirúrgica ajuda a avaliar com mais precisão quando o tratamento pode ser conservador, quando um procedimento faz sentido e quando a cirurgia deve ser discutida.</p>
        </div>

        <div class="media-layout">
          <div class="surgery-carousel" aria-label="Fotos do Dr. Luiz em centro cirúrgico">
            <div class="carousel-track">
              <figure class="carousel-slide active">
                <img src="assets/dr-luiz-cirurgia-close-1.jpeg" alt="Dr. Luiz Sarmanho em centro cirúrgico">
                <figcaption class="carousel-caption">
                  <strong>Atuação em centro cirúrgico</strong>
                  <span>Registros profissionais em ambiente hospitalar e cirúrgico.</span>
                </figcaption>
              </figure>
              <figure class="carousel-slide">
                <img src="assets/dr-luiz-cirurgia-close-2.jpeg" alt="Dr. Luiz Sarmanho durante procedimento ortopédico">
                <figcaption class="carousel-caption">
                  <strong>Trauma e quadril</strong>
                  <span>Experiência em casos ortopédicos que exigem precisão.</span>
                </figcaption>
              </figure>
              <figure class="carousel-slide">
                <img src="assets/dr-luiz-cirurgia-1.jpg" alt="Registro do Dr. Luiz em procedimento ortopédico">
                <figcaption class="carousel-caption">
                  <strong>Rotina cirúrgica</strong>
                  <span>Atuação em procedimentos e acompanhamento de casos complexos.</span>
                </figcaption>
              </figure>
            </div>
            <div class="carousel-dots" aria-label="Selecionar foto">
              <button class="carousel-dot active" type="button" aria-label="Mostrar foto 1"></button>
              <button class="carousel-dot" type="button" aria-label="Mostrar foto 2"></button>
              <button class="carousel-dot" type="button" aria-label="Mostrar foto 3"></button>
            </div>
            <div class="carousel-controls">
              <button class="carousel-control" type="button" data-carousel-prev aria-label="Foto anterior">‹</button>
              <button class="carousel-control" type="button" data-carousel-next aria-label="Próxima foto">›</button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="tratamentos" class="dark-band">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Áreas avaliadas</div>
            <h2>Da dor no quadril ao trauma: a conduta começa por um diagnóstico bem feito.</h2>
          </div>
        </div>

        <div class="service-grid">
          <article class="service">
            <div class="service-icon"><img src="assets/icons/health-line/stethoscope.svg" alt="" aria-hidden="true"></div>
            <h3>Ortopedia e traumatologia</h3>
            <p>Consulta para dores, lesões, fraturas, limitações de movimento e queixas musculoesqueléticas.</p>
          </article>
          <article class="service">
            <div class="service-icon"><img src="assets/icons/health-line/joints.svg" alt="" aria-hidden="true"></div>
            <h3>Quadril e artroplastia</h3>
            <p>Avaliação de dor no quadril, artrose, fraturas e casos em que a artroplastia total pode ser discutida.</p>
          </article>
          <article class="service">
            <div class="service-icon"><img src="assets/icons/health-line/crutches.svg" alt="" aria-hidden="true"></div>
            <h3>Trauma ortopédico</h3>
            <p>Experiência em casos complexos, incluindo fraturas de fêmur, pelve e acetábulo.</p>
          </article>
          <article class="service">
            <div class="service-icon"><img src="assets/icons/health-line/injection-care.svg" alt="" aria-hidden="true"></div>
            <h3>Viscossuplementação</h3>
            <p>Aplicação de ácido hialurônico pode ser avaliada em articulações com indicação clínica.</p>
          </article>
          <article class="service">
            <div class="service-icon"><img src="assets/icons/health-line/pain.svg" alt="" aria-hidden="true"></div>
            <h3>Procedimentos relacionados à dor</h3>
            <p>Infiltrações, viscossuplementação e outros procedimentos podem ser avaliados quando houver indicação.</p>
          </article>
          <article class="service">
            <div class="service-icon"><img src="assets/icons/health-line/health-data-sync.svg" alt="" aria-hidden="true"></div>
            <h3>Acompanhamento pós-operatório</h3>
            <p>Acompanhamento da recuperação, orientação sobre retorno às atividades e avaliação da evolução funcional.</p>
          </article>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Como é a consulta</div>
            <h2>Você sai com uma orientação, não apenas com uma lista de exames.</h2>
          </div>
          <p>A consulta é pensada para entender a história da dor, avaliar limitações, revisar exames e explicar quais opções fazem sentido para o caso.</p>
        </div>

        <div class="process">
          <article class="step">
            <img src="assets/icons/health-line/doctor.svg" alt="" aria-hidden="true">
            <h3>Entendimento da queixa</h3>
            <p>O que dói, há quanto tempo, o que piora, o que melhora e como isso interfere na rotina.</p>
          </article>
          <article class="step">
            <img src="assets/icons/health-line/medical-records.svg" alt="" aria-hidden="true">
            <h3>Exame físico e exames</h3>
            <p>Avaliação clínica e análise de exames já realizados, quando houver.</p>
          </article>
          <article class="step">
            <img src="assets/icons/health-line/medical-search.svg" alt="" aria-hidden="true">
            <h3>Hipótese diagnóstica</h3>
            <p>Explicação sobre a provável origem da dor ou limitação e se há necessidade de novos exames.</p>
          </article>
          <article class="step">
            <img src="assets/icons/health-line/health-worker-form.svg" alt="" aria-hidden="true">
            <h3>Plano de cuidado</h3>
            <p>Orientação sobre tratamento conservador, fisioterapia, procedimento, cirurgia ou acompanhamento.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-row">
        <div>
          <h2>Quer entender o melhor caminho para o seu caso?</h2>
          <p>Fale com a equipe para verificar disponibilidade, convênio e agendar uma avaliação com o Dr. Luiz.</p>
        </div>
        <a class="button primary" href="https://wa.me/5561992371117?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Luiz%20Sarmanho." target="_blank" rel="noopener">
          <img src="assets/icons/health-line/phone.svg" alt="" aria-hidden="true">
          Chamar no WhatsApp
        </a>
      </div>
    </section>

    <section id="convenios">
      <div class="container insurance-wrap">
        <div class="insurance-panel">
          <div class="kicker">Convênios</div>
          <h2>Atendimento particular e por convênios selecionados.</h2>
          <p>A disponibilidade pode variar conforme o tipo de atendimento, procedimento e regras de cada convênio. Antes de marcar, fale com a equipe pelo WhatsApp para confirmar se o seu plano é aceito para o caso desejado.</p>
          <a class="button dark" href="https://wa.me/5561992371117?text=Ol%C3%A1%2C%20gostaria%20de%20confirmar%20se%20meu%20conv%C3%AAnio%20%C3%A9%20aceito%20para%20atendimento%20com%20o%20Dr.%20Luiz%20Sarmanho." target="_blank" rel="noopener">
            <img src="assets/icons/health-line/insurance-card.svg" alt="" aria-hidden="true">
            Confirmar meu convênio
          </a>
        </div>

      </div>
    </section>

    <section id="duvidas">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="kicker">Dúvidas frequentes</div>
            <h2>Antes de agendar, veja as principais dúvidas.</h2>
          </div>
          <p>As respostas ajudam no primeiro contato. A indicação final depende da avaliação médica individual.</p>
        </div>

        <div class="faq">
          <div class="faq-item open">
            <button class="faq-question" type="button">
              O Dr. Luiz atende quais problemas?
              <img src="assets/icons/health-line/body.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">Atende queixas ortopédicas como dores articulares, lesões, fraturas, artrose, problemas no quadril e casos que podem precisar de procedimentos ou cirurgia.</div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">
              Ele realiza cirurgia de quadril?
              <img src="assets/icons/health-line/hospital.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">Sim. A atuação inclui avaliação de casos de artroplastia total do quadril, fraturas do quadril, pelve e acetábulo.</div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">
              Toda dor no quadril precisa de cirurgia?
              <img src="assets/icons/health-line/cardiogram.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">Não. A indicação depende do diagnóstico, da intensidade dos sintomas, do grau de limitação e da resposta a tratamentos anteriores.</div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">
              Quais procedimentos relacionados à dor podem ser avaliados?
              <img src="assets/icons/health-line/joint-injection.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">Infiltrações, viscossuplementação e terapia por ondas de choque podem ser considerados em casos selecionados, sempre após avaliação médica.</div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">
              Aceita convênio?
              <img src="assets/icons/health-line/credit-card.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">Sim, há atendimento por diversos convênios e também particular. A cobertura precisa ser confirmada com a equipe antes do agendamento.</div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">
              Como faço para agendar?
              <img src="assets/icons/health-line/appointment-check.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">O primeiro contato pode ser feito pelo WhatsApp. A equipe informa horários, local, documentos necessários e orienta sobre convênio ou consulta particular.</div>
          </div>
          <div class="faq-item">
            <button class="faq-question" type="button">
              Preciso levar exames?
              <img src="assets/icons/health-line/exam-folder.svg" alt="" aria-hidden="true">
            </button>
            <div class="faq-answer">Se tiver exames anteriores, leve para a consulta. Eles ajudam na avaliação, mas o médico também pode solicitar novos exames se forem necessários.</div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-grid">
      <div>
        <strong>Dr. Luiz Henrique Corrêa da Costa Sarmanho</strong>
        <span class="footer-credentials">CRM 17907 GO | CRM 17931 DF | RQE 13110</span>
        <p>Médico ortopedista e traumatologista com atuação em trauma ortopédico de alta complexidade, quadril, artroplastia total e procedimentos relacionados à dor. Brasília-DF.</p>
      </div>
      <a class="button primary" href="https://wa.me/5561992371117?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Luiz%20Sarmanho." target="_blank" rel="noopener">
        <img src="assets/icons/health-line/appointment-check.svg" alt="" aria-hidden="true">
        Agendar consulta
      </a>
    </div>
  </footer>

  <div class="floating-cta">
    <a class="button dark" href="https://wa.me/5561992371117?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Luiz%20Sarmanho." target="_blank" rel="noopener">
      <img src="assets/icons/health-line/phone.svg" alt="" aria-hidden="true">
      WhatsApp
    </a>
  </div>`;

export default function App() {
  useEffect(() => {
    const faqButtons = Array.from(document.querySelectorAll(".faq-question"));
    const faqCleanups = faqButtons.map((button) => {
      const onClick = () => {
        const item = button.closest(".faq-item");
        item?.classList.toggle("open");
      };
      button.addEventListener("click", onClick);
      return () => button.removeEventListener("click", onClick);
    });

    const carouselCleanups = Array.from(document.querySelectorAll(".surgery-carousel")).map((carousel) => {
      const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
      const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
      const prev = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");
      let activeIndex = 0;
      let timer;

      const showSlide = (index) => {
        if (!slides.length) return;
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("active", slideIndex === activeIndex);
        });
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("active", dotIndex === activeIndex);
        });
      };

      const start = () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        timer = window.setInterval(() => showSlide(activeIndex + 1), 5200);
      };

      const stop = () => window.clearInterval(timer);
      const onPrev = () => { stop(); showSlide(activeIndex - 1); start(); };
      const onNext = () => { stop(); showSlide(activeIndex + 1); start(); };

      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      const dotCleanups = dots.map((dot, dotIndex) => {
        const onClick = () => { stop(); showSlide(dotIndex); start(); };
        dot.addEventListener("click", onClick);
        return () => dot.removeEventListener("click", onClick);
      });

      carousel.addEventListener("mouseenter", stop);
      carousel.addEventListener("mouseleave", start);
      start();

      return () => {
        stop();
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        dotCleanups.forEach((cleanup) => cleanup());
        carousel.removeEventListener("mouseenter", stop);
        carousel.removeEventListener("mouseleave", start);
      };
    });

    return () => {
      faqCleanups.forEach((cleanup) => cleanup());
      carouselCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
