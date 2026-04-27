// src/services/api-client.ts
// Servicio genérico que simula llamadas a una base de datos.
// Usa genéricos para devolver promesas fuertemente tipadas.

import { RespuestaAPI } from '../domain/types/universidad.types.js';

// Base de datos simulada en memoria
const baseDatos: Record<string, unknown[]> = {
  '/estudiantes': [
    { id: 'est-001', nombreCompleto: 'Ana García', email: 'ana@universidad.es', fechaNacimiento: new Date('2000-03-15') },
    { id: 'est-002', nombreCompleto: 'Luis Martínez', email: 'luis@universidad.es', fechaNacimiento: new Date('1999-07-22') },
  ],
  '/asignaturas': [
    { id: 'asig-001', nombre: 'Programación Web', creditos: 6, departamento: 'Informática' },
    { id: 'asig-002', nombre: 'Bases de Datos', creditos: 6, departamento: 'Informática' },
  ],
};

/**
 * Simula una llamada a la base de datos con un retardo de red.
 * @param endpoint - Ruta del recurso (ej: '/estudiantes')
 * @returns Promesa con la respuesta tipada como RespuestaAPI<T>
 */
export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = baseDatos[endpoint];

      if (!datos) {
        reject(new Error(`Endpoint '${endpoint}' no encontrado`));
        return;
      }

      resolve({
        codigoEstado: 200,
        exito: true,
        datos: datos as T,
      });
    }, 300); // Simula 300ms de latencia de red
  });
}
