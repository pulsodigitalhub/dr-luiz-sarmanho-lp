import { useEffect } from "react";

export function useLandingEffects({ enableForm = false, whatsappPhone = "556135518009" } = {}) {
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

    const leadFormCleanups = enableForm
      ? Array.from(document.querySelectorAll(".lead-form")).map((form) => {
          const onSubmit = (event) => {
            event.preventDefault();
            if (!form.reportValidity()) return;

            const formData = new FormData(form);
            const nome = String(formData.get("nome") || "").trim();
            const telefone = String(formData.get("telefone") || "").trim();
            const message = encodeURIComponent(`Olá, gostaria de agendar uma avaliação com o Dr. Luiz Sarmanho.\n\nNome: ${nome}\nTelefone: ${telefone}`);

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "lead_form_submit",
              form_name: "cta_agendamento",
            });

            fetch("http://72.61.129.237:3333/lead", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ nome, whatsapp: telefone, origem: "dr-luiz-lp" }),
            }).catch(() => {});

            window.open(`https://wa.me/${whatsappPhone}?text=${message}`, "_blank", "noopener");
            form.reset();
          };

          form.addEventListener("submit", onSubmit);
          return () => form.removeEventListener("submit", onSubmit);
        })
      : [];

    return () => {
      window.removeEventListener("scroll", updateFloatingCta);
      document.body.classList.remove("show-floating-cta");
      faqCleanups.forEach((cleanup) => cleanup());
      carouselCleanups.forEach((cleanup) => cleanup());
      leadFormCleanups.forEach((cleanup) => cleanup());
    };
  }, [enableForm, whatsappPhone]);
}
