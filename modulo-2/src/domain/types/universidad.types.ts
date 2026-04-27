// src/domain/types/universidad.types.ts
// Modelado del dominio de un sistema universitario.
// Usamos 'interface' para entidades de datos jerárquicos
// y 'type' para uniones y aliases semánticos.

// ── Tipos alias semánticos ─────────────────────────────────
type UUID = string;
type Creditos = number;

// ── Entidad: Asignatura ────────────────────────────────────
// Usamos 'interface' porque es una entidad de dominio con estructura jerárquica.
export interface Asignatura {
  readonly id: UUID;       // Inmutable tras la creación
  nombre: string;
  creditos: Creditos;
  departamento: string;
}

// ── Entidad: Estudiante ────────────────────────────────────
export interface Estudiante {
  readonly id: UUID;
  nombreCompleto: string;
  email: string;
  fechaNacimiento: Date;
  fechaIngreso?: Date;     // Opcional: puede no estar registrada
}

// ── Unión Discriminada: EstadoMatricula ────────────────────
// Patrón fundamental en TypeScript.
// Cada estado tiene una propiedad 'tipo' como discriminante
// para que el compilador pueda estrechar el tipo con seguridad.

export interface MatriculaActiva {
  tipo: 'ACTIVA';
  asignaturas: Asignatura[];
  fechaInicio: Date;
}

export interface MatriculaSuspendida {
  tipo: 'SUSPENDIDA';
  motivoSuspension: string;
  fechaSuspension: Date;
}

export interface MatriculaFinalizada {
  tipo: 'FINALIZADA';
  notaMedia: number;
  fechaFinalizacion: Date;
}

export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

// ── Interfaz genérica de respuesta API ─────────────────────
// Usamos genéricos para reutilizar esta estructura
// con cualquier tipo de dato (Estudiante, Asignatura, etc.)
export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}
