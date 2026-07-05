// Lista de vacantes del sitio. Para publicar o cerrar una vacante,
// agrega/quita/edita un bloque { ... } en este arreglo y vuelve a publicar el sitio.
// Si Delicias de León no maneja este archivo directamente, puede pedirle
// a quien le dé mantenimiento al sitio que lo actualice.

const VACANTES = [
  {
    puesto: "Venta y Servicio al Cliente (Turno Mañana)",
    tipo: "Operativo",
    ubicacion: "Punto de venta",
    descripcion:
      "Horario de 6:40 a.m. a 2:00 p.m. (sábados hasta las 2:30 p.m., domingos hasta las 3:00 p.m.). Un día libre a la semana. Pago: RD$17,702.",
    requisitos: "Disponibilidad de horario indicado, buena actitud de servicio al cliente.",
  },
  {
    puesto: "Cocina y Empanadas (Turno Mañana)",
    tipo: "Operativo",
    ubicacion: "Local de producción",
    descripcion:
      "Horario de 6:40 a.m. a 2:00 p.m. (sábados hasta las 2:30 p.m., domingos hasta las 3:00 p.m.). Un día libre a la semana. Freído y elaboración de empanadas. Pago: RD$17,702.",
    requisitos: "Disponibilidad de horario indicado.",
  },
  {
    puesto: "Venta y Servicio al Cliente (Turno Tarde - 5 horas)",
    tipo: "Operativo",
    ubicacion: "Punto de venta",
    descripcion:
      "Horario de 2:00 p.m. a 7:00 p.m., librando los domingos. Pago: RD$11,470.",
    requisitos: "Disponibilidad de horario indicado, buena actitud de servicio al cliente.",
  },
  {
    puesto: "Cocina y Empanadas (Turno Tarde - 5 horas)",
    tipo: "Operativo",
    ubicacion: "Local de producción",
    descripcion:
      "Horario de 2:00 p.m. a 7:00 p.m., librando los domingos. Freído y elaboración de empanadas. Pago: RD$11,470.",
    requisitos: "Disponibilidad de horario indicado.",
  },
  {
    puesto: "Repartidor en Motocicleta (Delivery - 5 horas)",
    tipo: "Operativo",
    ubicacion: "Punto de venta",
    descripcion:
      "Horario de 7:00 a.m. a 12:00 p.m. (5 horas), un día libre a la semana. Incluye entregas a domicilio (delivery) y apoyo en la elaboración de empanadas. Pago: RD$11,470.",
    requisitos: "Licencia de conducir motocicleta vigente y experiencia manejando.",
  },
  {
    puesto: "Producción de Cocina (5 horas)",
    tipo: "Operativo",
    ubicacion: "Local de producción",
    descripcion:
      "Horario de 7:00 a.m. a 12:00 p.m. (5 horas), día libre variable (rotativo) a la semana. Tareas como preparación de yuca, carnes, jugos y limpieza del área de producción. Pago: RD$11,470.",
    requisitos: "Disponibilidad de horario indicado (incluye día libre rotativo).",
  },
];
