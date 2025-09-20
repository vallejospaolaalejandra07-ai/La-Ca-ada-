// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

  // --- FORMULARIO DE CONTACTO ---
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
      alert("⚠️ Por favor, complete todos los campos.");
      return;
    }

    // Validar email básico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert("📧 Ingrese un correo electrónico válido.");
      return;
    }

    // Confirmación
    alert(`✅ Gracias ${nombre}, tu mensaje fue enviado con éxito.`);
    form.reset();
  });

  // --- MENÚ SUAVE SCROLL ---
  const enlaces = document.querySelectorAll("a.nav-link");
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      const destino = enlace.getAttribute("href");
      if (destino.startsWith("#")) {
        e.preventDefault();
        document.querySelector(destino).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // --- CARRUSEL AUTOMÁTICO ---
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(carousel => {
    const bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 3000, // cada 3 segundos
      ride: "carousel"
    });
  });

});
