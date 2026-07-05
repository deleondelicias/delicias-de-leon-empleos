function cargarVacantes() {
  const contenedor = document.getElementById("lista-vacantes");
  const vacantes = typeof VACANTES !== "undefined" ? VACANTES : [];

  try {
    if (!vacantes.length) {
      contenedor.innerHTML = '<p class="estado-msg">No hay vacantes abiertas por el momento. Vuelve a revisar pronto.</p>';
      return;
    }

    contenedor.innerHTML = "";
    const jsonLd = [];

    vacantes.forEach((vacante) => {
      const card = document.createElement("article");
      card.className = "vacante-card";
      card.innerHTML = `
        <span class="tag">${escapeHtml(vacante.tipo || "General")}</span>
        <h2>${escapeHtml(vacante.puesto)}</h2>
        <p class="meta">${escapeHtml(vacante.ubicacion || "Delicias de León")}</p>
        <p>${escapeHtml(vacante.descripcion || "")}</p>
        ${vacante.requisitos ? `<p><strong>Requisitos:</strong> ${escapeHtml(vacante.requisitos)}</p>` : ""}
        <a class="boton" href="aplicar.html?puesto=${encodeURIComponent(vacante.puesto)}">Aplicar a esta vacante</a>
      `;
      contenedor.appendChild(card);

      jsonLd.push({
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        title: vacante.puesto,
        description: vacante.descripcion || vacante.puesto,
        datePosted: vacante.fecha || new Date().toISOString().slice(0, 10),
        employmentType: vacante.tipo === "Administrativo" ? "FULL_TIME" : "OTHER",
        hiringOrganization: {
          "@type": "Organization",
          name: "Delicias de León",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: vacante.ubicacion || "Delicias de León",
          },
        },
      });
    });

    insertarJsonLd(jsonLd);
  } catch (error) {
    contenedor.innerHTML = '<p class="estado-msg">No pudimos cargar las vacantes en este momento. Intenta de nuevo más tarde.</p>';
    console.error("Error cargando vacantes:", error);
  }
}

function insertarJsonLd(vacantesData) {
  vacantesData.forEach((data) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  });
}

function escapeHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}

cargarVacantes();
