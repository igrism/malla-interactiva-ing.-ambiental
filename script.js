const cursos = [
  // CICLO 1
  { nombre: "Matemática I", creditos: 4, ciclo: 1 },
  { nombre: "Química general", creditos: 4, ciclo: 1 },
  { nombre: "Comunicación", creditos: 3, ciclo: 1 },
  { nombre: "Física general", creditos: 4, ciclo: 1 },
  { nombre: "Introducción a la ingeniería ambiental", creditos: 3, ciclo: 1 },
  { nombre: "Taller de desarrollo personal", creditos: 2, ciclo: 1 },

  // CICLO 2
  { nombre: "Matemática II", creditos: 4, ciclo: 2, prerequisitos: ["Matemática I"] },
  { nombre: "Química orgánica", creditos: 4, ciclo: 2, prerequisitos: ["Química general"] },
  { nombre: "Biología", creditos: 3, ciclo: 2 },
  { nombre: "Dibujo", creditos: 3, ciclo: 2 },
  { nombre: "Programación", creditos: 3, ciclo: 2 },
  { nombre: "Responsabilidad social y ambiental", creditos: 2, ciclo: 2 },

  // CICLO 3
  { nombre: "Matemática III", creditos: 4, ciclo: 3, prerequisitos: ["Matemática II"] },
  { nombre: "Estadística aplicada", creditos: 3, ciclo: 3, prerequisitos: ["Matemática II"] },
  { nombre: "Física ambiental", creditos: 4, ciclo: 3, prerequisitos: ["Física general"] },
  { nombre: "Bioquímica ambiental", creditos: 4, ciclo: 3, prerequisitos: ["Química orgánica", "Biología"] },
  { nombre: "Ecología y desarrollo sostenible", creditos: 3, ciclo: 3, prerequisitos: ["Biología"] },
  { nombre: "Topografía", creditos: 3, ciclo: 3 },

  // CICLO 4
  { nombre: "Mecánica de fluidos", creditos: 4, ciclo: 4, prerequisitos: ["Física ambiental", "Matemática III"] },
  { nombre: "Química analítica", creditos: 4, ciclo: 4, prerequisitos: ["Química orgánica"] },
  { nombre: "Edafología", creditos: 3, ciclo: 4, prerequisitos: ["Química general"] },
  { nombre: "Cartografía y fotointerpretación", creditos: 3, ciclo: 4, prerequisitos: ["Topografía"] },
  { nombre: "Análisis ambiental", creditos: 4, ciclo: 4, prerequisitos: ["Química analítica"] },
  { nombre: "Gestión ambiental", creditos: 3, ciclo: 4 },

  // CICLO 5
  { nombre: "Microbiología ambiental", creditos: 3, ciclo: 5, prerequisitos: ["Biología"] },
  { nombre: "Termodinámica aplicada", creditos: 4, ciclo: 5, prerequisitos: ["Mecánica de fluidos"] },
  { nombre: "Meteorología y climatología", creditos: 3, ciclo: 5, prerequisitos: ["Ecología y desarrollo sostenible"] },
  { nombre: "Diseños experimentales ambientales", creditos: 3, ciclo: 5, prerequisitos: ["Estadística aplicada"] },
  { nombre: "Sistema de información geográfica", creditos: 3, ciclo: 5, prerequisitos: ["Edafología", "Topografía"] },
  { nombre: "Química ambiental", creditos: 3, ciclo: 5, prerequisitos: ["Bioquímica ambiental", "Química analítica"] },
  { nombre: "Economía ambiental", creditos: 3, ciclo: 5, prerequisitos: ["Matemática II"] },

  // CICLO 6
  { nombre: "Biotecnología ambiental", creditos: 3, ciclo: 6, prerequisitos: ["Química ambiental"] },
  { nombre: "Operaciones unitarias en Ingeniería ambiental I", creditos: 4, ciclo: 6, prerequisitos: ["Termodinámica aplicada"] },
  { nombre: "Planificación ambiental y ordenamiento territorial", creditos: 3, ciclo: 6, prerequisitos: ["Sistema de información geográfica"] },
  { nombre: "Toxicología ambiental", creditos: 3, ciclo: 6, prerequisitos: ["Química ambiental", "Microbiología ambiental"] },
  { nombre: "Educación ambiental", creditos: 3, ciclo: 6, prerequisitos: ["Diseños experimentales ambientales"] },
  { nombre: "Simulación y modelación ambiental", creditos: 4, ciclo: 6, prerequisitos: ["Diseños experimentales ambientales"] },
  { nombre: "Inglés técnico", creditos: 2, ciclo: 6 },

  // CICLO 7
  { nombre: "Contaminación del agua", creditos: 3, ciclo: 7, prerequisitos: ["Toxicología ambiental"] },
  { nombre: "Operaciones unitarias en Ingeniería ambiental II", creditos: 4, ciclo: 7, prerequisitos: ["Operaciones unitarias en Ingeniería ambiental I"] },
  { nombre: "Gestión de residuos sólidos", creditos: 3, ciclo: 7, prerequisitos: ["Educación ambiental"] },
  { nombre: "Hidrología y manejo ambiental de cuencas", creditos: 3, ciclo: 7, prerequisitos: ["Sistema de información geográfica"] },
  { nombre: "Contaminación del suelo", creditos: 3, ciclo: 7, prerequisitos: ["Topografía", "Edafología"] },
  { nombre: "Contaminación atmosférica", creditos: 4, ciclo: 7, prerequisitos: ["Meteorología y climatología", "Simulación y modelación ambiental"] },
  { nombre: "Metodología de investigación ambiental", creditos: 2, ciclo: 7, prerequisitos: ["Diseños experimentales ambientales"] },

  // CICLO 8
  { nombre: "Tratamiento y abastecimiento de agua", creditos: 4, ciclo: 8, prerequisitos: ["Hidrología y manejo ambiental de cuencas"] },
  { nombre: "Derecho ambiental", creditos: 4, ciclo: 8, prerequisitos: ["Educación ambiental"] },
  { nombre: "Tratamiento de residuos urbanos e industriales", creditos: 3, ciclo: 8, prerequisitos: ["Gestión de residuos sólidos"] },
  { nombre: "Elaboración de línea base", creditos: 3, ciclo: 8, prerequisitos: ["Contaminación del agua", "Contaminación del suelo"] },
  { nombre: "Tratamiento y restauración de suelo", creditos: 3, ciclo: 8, prerequisitos: ["Contaminación del suelo"] },
  { nombre: "Fuentes de energías nuevas y renovables", creditos: 3, ciclo: 8, prerequisitos: ["Operaciones unitarias en Ingeniería ambiental II"] },
  { nombre: "Seminario de tesis I", creditos: 2, ciclo: 8, prerequisitos: ["Metodología de investigación ambiental"] },

  // CICLO 9
  { nombre: "Ingeniería de aguas residuales", creditos: 3, ciclo: 9, prerequisitos: ["Tratamiento y abastecimiento de agua"] },
  { nombre: "Sistema de gestión ambiental", creditos: 3, ciclo: 9, prerequisitos: ["Derecho ambiental"] },
  { nombre: "Evaluación de impacto ambiental", creditos: 3, ciclo: 9, prerequisitos: ["Elaboración de línea base"] },
  { nombre: "Diseño de plantas y sistemas regenerativos ambientales", creditos: 3, ciclo: 9, prerequisitos: ["Fuentes de energías nuevas y renovables"] },
  { nombre: "Idiomas nativos", creditos: 3, ciclo: 9 },
  { nombre: "Seminario de tesis II", creditos: 2, ciclo: 9, prerequisitos: ["Seminario de tesis I"] },
  { nombre: "Práctica preprofesional I", creditos: 2, ciclo: 9 },
  { nombre: "Ecoturismo", creditos: 3, ciclo: 9, prerequisitos: ["Tratamiento de residuos urbanos e industriales"] },
  { nombre: "Prevención de desastres naturales", creditos: 3, ciclo: 9 },
  { nombre: "Cambio climático", creditos: 3, ciclo: 9 },
  { nombre: "Biocombustibles", creditos: 3, ciclo: 9, prerequisitos: ["Tratamiento de residuos urbanos e industriales"] },
  { nombre: "Electivo 01", creditos: 3, ciclo: 9 },

  // CICLO 10
  { nombre: "Formulación y evaluación de proyectos ambientales", creditos: 3, ciclo: 10, prerequisitos: ["Evaluación de impacto ambiental", "Economía ambiental"] },
  { nombre: "Auditoría ambiental", creditos: 3, ciclo: 10, prerequisitos: ["Sistema de gestión ambiental", "Evaluación de impacto ambiental"] },
  { nombre: "Manejo de conflictos socioambientales", creditos: 4, ciclo: 10, prerequisitos: ["Derecho ambiental"] },
  { nombre: "Seminario de tesis III", creditos: 2, ciclo: 10, prerequisitos: ["Seminario de tesis II"] },
  { nombre: "Práctica preprofesional II", creditos: 3, ciclo: 10, prerequisitos: ["Práctica preprofesional I"] },
  { nombre: "Trabajo de investigación", creditos: 2, ciclo: 10 },
  { nombre: "Administración ambiental", creditos: 3, ciclo: 10, prerequisitos: ["Sistema de gestión ambiental"] },
  { nombre: "Tecnologías limpias", creditos: 3, ciclo: 10, prerequisitos: ["Sistema de gestión ambiental"] },
  { nombre: "Responsabilidad social", creditos: 4, ciclo: 10 },
  { nombre: "Restauración y remediación ambiental", creditos: 4, ciclo: 10 },
  { nombre: "Electivo 02", creditos: 3, ciclo: 10 },
  { nombre: "Electivo 03", creditos: 4, ciclo: 10 }
];

// Renderizado
const contenedor = document.getElementById('malla');
cursos.forEach(curso => {
  const div = document.createElement('div');
  div.className = 'curso';
  div.innerHTML = `
    <div class="nombre">${curso.nombre}</div>
    <div class="creditos">Créditos: ${curso.creditos} | Ciclo: ${curso.ciclo}</div>
    <div class="prerequisitos">${curso.prerequisitos ? `Requiere: ${curso.prerequisitos.join(", ")}` : ""}</div>
  `;
  div.addEventListener("click", () => {
    div.classList.toggle("activo");
  });
  contenedor.appendChild(div);
});
