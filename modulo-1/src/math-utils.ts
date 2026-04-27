// src/math-utils.ts
// Módulo de análisis estadístico con TypeScript estricto.

/**
 * Calcula la media aritmética de un array de números.
 * @param datos - Array de números.
 * @returns La media, o null si el array está vacío.
 */
export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;
  const suma = datos.reduce((acc, val) => acc + val, 0);
  return suma / datos.length;
}

/**
 * Calcula la mediana de un array de números.
 * @param datos - Array de números.
 * @returns La mediana, o null si el array está vacío.
 */
export function calcularMediana(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const ordenados = [...datos].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  } else {
    return ordenados[mitad];
  }
}

/**
 * Filtra los valores atípicos de un array.
 * Un valor se considera atípico si supera la media en más de 'limite' desviaciones estándar.
 * @param datos - Array de números.
 * @param limite - Número de desviaciones estándar para considerar un valor atípico.
 * @returns Array sin valores atípicos, o null si el array está vacío.
 */
export function filtrarAtipicos(datos: number[], limite: number): number[] | null {
  if (datos.length === 0) return null;

  const media = calcularMedia(datos) as number;
  const varianza = datos.reduce((acc, val) => acc + Math.pow(val - media, 2), 0) / datos.length;
  const desviacion = Math.sqrt(varianza);

  return datos.filter(val => Math.abs(val - media) <= limite * desviacion);
}
