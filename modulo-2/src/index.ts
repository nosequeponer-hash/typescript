// src/index.ts
// Punto de entrada del módulo 2.
// Demuestra el uso de interfaces, uniones discriminadas y genéricos.

import { Estudiante, Asignatura, EstadoMatricula } from './domain/types/universidad.types.js';
import { obtenerRecurso } from './services/api-client.js';

// ── Función con Unión Discriminada ─────────────────────────

/**
 * Genera un reporte textual del estado de una matrícula.
 * Usa el discriminante 'tipo' para estrechar el tipo de forma segura.
 * @param estado - Estado de la matrícula.
 * @returns String descriptivo del estado.
 */
function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case 'ACTIVA':
      return `Matrícula activa desde ${estado.fechaInicio.toLocaleDateString()}. Asignaturas: ${estado.asignaturas.map(a => a.nombre).join(', ')}.`;
    case 'SUSPENDIDA':
      return `Matrícula suspendida el ${estado.fechaSuspension.toLocaleDateString()}. Motivo: ${estado.motivoSuspension}.`;
    case 'FINALIZADA':
      return `Matrícula finalizada el ${estado.fechaFinalizacion.toLocaleDateString()}. Nota media: ${estado.notaMedia.toFixed(2)}.`;
    default:
      // Análisis exhaustivo con never: si añadimos un nuevo estado
      // y olvidamos manejarlo aquí, el compilador lanzará un error.
      const comprobacionExhaustiva: never = estado;
      throw new Error(`Estado no manejado: ${JSON.stringify(comprobacionExhaustiva)}`);
  }
}

// ── Pruebas de la función generarReporte ───────────────────
console.log('── Reportes de matrícula ─────────────────────');

const asignaturas: Asignatura[] = [
  { id: 'asig-001', nombre: 'Programación Web', creditos: 6, departamento: 'Informática' },
  { id: 'asig-002', nombre: 'Bases de Datos', creditos: 6, departamento: 'Informática' },
];

const activa: EstadoMatricula = { tipo: 'ACTIVA', asignaturas, fechaInicio: new Date('2025-09-01') };
const suspendida: EstadoMatricula = { tipo: 'SUSPENDIDA', motivoSuspension: 'Impago de tasas', fechaSuspension: new Date('2025-11-15') };
const finalizada: EstadoMatricula = { tipo: 'FINALIZADA', notaMedia: 7.85, fechaFinalizacion: new Date('2026-06-30') };

console.log(generarReporte(activa));
console.log(generarReporte(suspendida));
console.log(generarReporte(finalizada));

// ── Pruebas del servicio genérico ──────────────────────────
console.log('\n── Consultas a la base de datos ──────────────');

async function main() {
  const respuestaEstudiantes = await obtenerRecurso<Estudiante[]>('/estudiantes');
  console.log('Estudiantes:', respuestaEstudiantes.datos);

  const respuestaAsignaturas = await obtenerRecurso<Asignatura[]>('/asignaturas');
  console.log('Asignaturas:', respuestaAsignaturas.datos);
}

main().catch(console.error);
