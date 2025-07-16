const ramos = [
  { nombre: "Matemáticas I", semestre: 1 },
  { nombre: "Ciencia, Tecnología y Desarrollo", semestre: 1 },
  { nombre: "Comunicación y Lenguaje I", semestre: 1 },
  { nombre: "Administración I", semestre: 1 },
  { nombre: "Fundamentos Contables", semestre: 1 },
  { nombre: "Cátedra Institucional", semestre: 1 },

  { nombre: "Comunicación y Lenguaje II", semestre: 2, req: ["Comunicación y Lenguaje I"] },
  { nombre: "Humanidades", semestre: 2 },
  { nombre: "Matemática II", semestre: 2, req: ["Matemáticas I"] },
  { nombre: "Análisis de la Gestión Contable", semestre: 2, req: ["Fundamentos Contables"] },
  { nombre: "Constitución y ciudadanía", semestre: 2 },
  { nombre: "Administración II", semestre: 2, req: ["Administración I"] },

  { nombre: "Fundamento de Investigación Formativa", semestre: 3 },
  { nombre: "Liderazgo y Emprendimiento", semestre: 3 },
  { nombre: "Administración III", semestre: 3, req: ["Administración II"] },
  { nombre: "Matemáticas Financiera", semestre: 3, req: ["Matemática II"] },
  { nombre: "Análisis de Entornos Económicos", semestre: 3 },
  { nombre: "Probabilidad y Estadística", semestre: 3 },

  { nombre: "Administración IV", semestre: 4, req: ["Administración III"] },
  { nombre: "Legislación Comercial", semestre: 4 },
  { nombre: "Economía Colombia y Comercio Exterior", semestre: 4 },
  { nombre: "Seminario de Tecnología", semestre: 4 },
  { nombre: "Costos Administrativos", semestre: 4 },
  { nombre: "Investigación de Operaciones", semestre: 4, req: ["Probabilidad y Estadística"] },
  { nombre: "Ambiente y Sostenibilidad", semestre: 4 },

  { nombre: "Administración de los Negocios Tecnológicos", semestre: 5 },
  { nombre: "Legislación Laboral", semestre: 5 },
  { nombre: "Administración y Diagnóstico Financiero", semestre: 5 },
  { nombre: "Fundamentos y Prospectiva de Mercados", semestre: 5 },
  { nombre: "Ética Profesional y Responsabilidad Social", semestre: 5 },
  { nombre: "Presupuestos", semestre: 5, req: ["Costos Administrativos"] },

  { nombre: "Desarrollo Organizacional", semestre: 6 },
  { nombre: "Gerencia del Talento Humano", semestre: 6 },
  { nombre: "Negocios Internacionales", semestre: 6 },
  { nombre: "Mercadeo Global", semestre: 6 },
  { nombre: "Formulación y Evaluación de Proyectos", semestre: 6 },
  { nombre: "Administración Pública", semestre: 6 },

  { nombre: "Emprendimiento e Innovación", semestre: 7 },
  { nombre: "Metodología de la Investigación", semestre: 7 },
  { nombre: "Finanzas I", semestre: 7 },
  { nombre: "Gestión de la Calidad y la productividad", semestre: 7 },
  { nombre: "Gerencia de Proyectos", semestre: 7 },
  { nombre: "Electiva I", semestre: 7 },

  { nombre: "Electiva II", semestre: 8 },
  { nombre: "Práctica Empresarial", semestre: 8 },
  { nombre: "Finanzas II", semestre: 8, req: ["Finanzas I"] },
  { nombre: "Proyecto de Grado I", semestre: 8, req: ["Metodología de la Investigación"] },
  { nombre: "Gerencia Estratégica I", semestre: 8 },

  { nombre: "Electiva III", semestre: 9 },
  { nombre: "Gerencia Estratégica II", semestre: 9, req: ["Gerencia Estratégica I"] },
  { nombre: "Proyecto de Grado II", semestre: 9, req: ["Proyecto de Grado I"] },
  { nombre: "Sistema de Información Gerencial", semestre: 9 },
  { nombre: "Marketing Digital", semestre: 9 },
];

const aprobados = new Set();
const contenedor = document.getElementById("malla");

function render() {
  contenedor.innerHTML = "";
  let semestreActual = 0;

  ramos.forEach(ramo => {
    if (ramo.semestre !== semestreActual) {
      semestreActual = ramo.semestre;
      const sem = document.createElement("div");
      sem.className = "semestre";
      sem.textContent = `Semestre ${semestreActual}`;
      contenedor.appendChild(sem);
    }

    const btn = document.createElement("div");
    btn.className = "ramo";
    btn.textContent = ramo.nombre;

    const requisitos = ramo.req || [];
    const habilitado = requisitos.every(r => aprobados.has(r));

    if (habilitado) {
      btn.classList.add("aprobado");
      btn.addEventListener("click", () => {
        aprobados.add(ramo.nombre);
        render();
      });
    }

    contenedor.appendChild(btn);
  });
}

render();
