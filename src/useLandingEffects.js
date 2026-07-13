import { useEffect } from "react";
import "./leadModal.css";

const LEAD_WEBHOOK_URL = "https://api.icebergcompany.com.br/lead-webhook/dr-luiz";

export function useLandingEffects({
  enableForm = false,
  whatsappPhone = "556135518009",
  whatsappMessage,
  leadContext = {},
} = {}) {
  useEffect(() => {
    const updateFloatingCta = () => {
      document.body.classList.toggle("show-floating-cta", window.scrollY > window.innerHeight * 0.72);
    };
    updateFloatingCta();
    window.addEventListener("scroll", updateFloatingCta, { passive: true });

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

    const hasLeadContext = Object.keys(leadContext).length > 0;
    const hasWhatsAppLinks = Boolean(document.querySelector('a[href*="wa.me"], a[href*="api.whatsapp.com"]'));
    const shouldUseLeadModal = enableForm || hasLeadContext || Boolean(whatsappMessage) || hasWhatsAppLinks;
    const cleanupCallbacks = [];
    let modalElement = null;

    const closeLeadModal = () => {
      modalElement?.classList.remove("is-open");
      modalElement?.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    };

    const openLeadModal = (event) => {
      event?.preventDefault();
      if (!modalElement) return;

      modalElement.classList.add("is-open");
      modalElement.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_modal_open",
        form_name: "cta_agendamento_modal",
        ...leadContext,
      });

      window.setTimeout(() => {
        modalElement?.querySelector("input")?.focus();
      }, 60);
    };

    if (shouldUseLeadModal) {
      const whatsappIcon = document.querySelector('img[src*="whatsapp.svg"]')?.getAttribute("src") || "assets/icons/whatsapp.svg";
      const inlineLeadForms = Array.from(document.querySelectorAll(".lead-form")).filter((form) => !form.closest(".lead-modal"));
      const modalDescription = inlineLeadForms[0]?.querySelector(".lead-form-intro p")?.textContent?.trim() || "Informe seus dados para continuar pelo WhatsApp.";
      const openerDescription = "Agende sua avaliação pelo WhatsApp.";

      modalElement = document.createElement("div");
      modalElement.className = "lead-modal";
      modalElement.id = "agendamento";
      modalElement.setAttribute("aria-hidden", "true");
      modalElement.innerHTML = `
        <div class="lead-modal-backdrop" data-lead-close></div>
        <section class="lead-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="leadModalTitle">
          <button class="lead-modal-close" type="button" aria-label="Fechar formulário" data-lead-close>×</button>
          <form class="lead-form lead-modal-form" aria-label="Formulário de agendamento">
            <div class="lead-form-intro">
              <img class="lead-form-whatsapp" src="${whatsappIcon}" alt="" aria-hidden="true">
              <strong id="leadModalTitle">Agendar avaliação</strong>
              <p>${modalDescription}</p>
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
              <img src="${whatsappIcon}" alt="" aria-hidden="true">
              Continuar pelo WhatsApp
            </button>
          </form>
        </section>`;
      document.body.appendChild(modalElement);

      inlineLeadForms.forEach((form) => {
        const replacement = document.createElement("div");
        replacement.className = "cta-card lead-popup-card";
        replacement.innerHTML = `
          <p>${openerDescription}</p>
          <button class="button whatsapp-button" type="button" data-lead-open>
            <img src="${whatsappIcon}" alt="" aria-hidden="true">
            Agendar avaliação
          </button>`;
        form.replaceWith(replacement);
      });

      const openerSelector = '[data-lead-open], a[href="#agendamento"], a[href*="wa.me"], a[href*="api.whatsapp.com"]';
      const openers = Array.from(document.querySelectorAll(openerSelector)).filter((element) => !element.closest(".lead-modal"));
      openers.forEach((opener) => {
        opener.addEventListener("click", openLeadModal);
        cleanupCallbacks.push(() => opener.removeEventListener("click", openLeadModal));
      });

      const closeButtons = Array.from(modalElement.querySelectorAll("[data-lead-close]"));
      closeButtons.forEach((button) => {
        button.addEventListener("click", closeLeadModal);
        cleanupCallbacks.push(() => button.removeEventListener("click", closeLeadModal));
      });

      const onKeydown = (event) => {
        if (event.key === "Escape" && modalElement?.classList.contains("is-open")) {
          closeLeadModal();
        }
      };
      document.addEventListener("keydown", onKeydown);
      cleanupCallbacks.push(() => document.removeEventListener("keydown", onKeydown));
    }

    const leadFormCleanups = shouldUseLeadModal
      ? Array.from(document.querySelectorAll(".lead-form")).map((form) => {
          let isSubmitting = false;

          const onSubmit = (event) => {
            event.preventDefault();
            if (isSubmitting || !form.reportValidity()) return;

            const formData = new FormData(form);
            const nome = String(formData.get("nome") || "").trim();
            const telefone = String(formData.get("telefone") || "").trim();
            const defaultMessage = `Olá, gostaria de agendar uma avaliação com o Dr. Luiz Sarmanho.\n\nNome: ${nome}\nTelefone: ${telefone}`;
            const messageText = typeof whatsappMessage === "function"
              ? whatsappMessage({ nome, telefone })
              : whatsappMessage || defaultMessage;
            const message = encodeURIComponent(messageText);
            const submitButton = form.querySelector('button[type="submit"]');

            isSubmitting = true;
            form.setAttribute("aria-busy", "true");
            submitButton?.setAttribute("disabled", "disabled");

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "lead_form_submit",
              form_name: "cta_agendamento_modal",
              lead_name: nome,
              lead_phone: telefone,
              ...leadContext,
            });

            const tracking = typeof window.getTracking === "function" ? window.getTracking() : {};
            const leadPayload = {
              nome,
              whatsapp: telefone,
              origem: "dr-luiz-lp",
              unidade: "Dr Luiz Sarmanho",
              pagina: window.location.href,
              ...leadContext,
              ...tracking,
            };

            fetch(LEAD_WEBHOOK_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(leadPayload),
            }).catch(() => {});

            window.open(`https://wa.me/${whatsappPhone}?text=${message}`, "_blank", "noopener");
            form.reset();
            closeLeadModal();

            window.setTimeout(() => {
              isSubmitting = false;
              form.removeAttribute("aria-busy");
              submitButton?.removeAttribute("disabled");
            }, 4000);
          };

          form.addEventListener("submit", onSubmit);
          return () => form.removeEventListener("submit", onSubmit);
        })
      : [];

    return () => {
      window.removeEventListener("scroll", updateFloatingCta);
      document.body.classList.remove("show-floating-cta");
      document.body.classList.remove("modal-open");
      faqCleanups.forEach((cleanup) => cleanup());
      carouselCleanups.forEach((cleanup) => cleanup());
      cleanupCallbacks.forEach((cleanup) => cleanup());
      leadFormCleanups.forEach((cleanup) => cleanup());
      modalElement?.remove();
    };
  }, [enableForm, whatsappPhone, whatsappMessage, leadContext]);
}
