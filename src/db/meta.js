import {seed} from "../../seed.js";

const arrMeta = [
  "Recursos claros y confiables sobre educación financiera y gestión del dinero, enfocados en información útil y comprensible.",

  "Guías prácticas para mejorar tus conocimientos financieros y tomar decisiones informadas de manera responsable.",

  "Contenido educativo sobre finanzas personales y planificación económica sostenible, basado en información verificable y accesible.",

  "Aprende a administrar tus finanzas con materiales formativos objetivos y prácticos, diseñados para apoyar tu bienestar financiero.",

  "Información transparente sobre educación financiera y planificación económica, presentada de forma clara y orientada al aprendizaje responsable.",
];

export function getMeta(index = 0) {
  const metaIndex = (seed * 7 + index * 13) % arrMeta.length;
  const metaId = arrMeta[metaIndex];

  let metaTag = document.querySelector('meta[name="description"]');
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.name = "description";
    document.head.appendChild(metaTag);
  }
  return metaTag.setAttribute("content", metaId);
}
