// src/index.ts
// Punto de entrada del módulo 1.
// Importa las funciones de math-utils y las prueba con datos reales.

import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

const datos: number[] = [4, 8, 15, 16, 23, 42, 100, 3, 7, 200];

console.log('── Análisis estadístico ──────────────────');
console.log('Datos:', datos);

const media = calcularMedia(datos);
console.log('Media:', media);

const mediana = calcularMediana(datos);
console.log('Mediana:', mediana);

const sinAtipicos = filtrarAtipicos(datos, 1.5);
console.log('Sin atípicos (límite 1.5σ):', sinAtipicos);

// Caso límite: array vacío
const vacio: number[] = [];
console.log('\n── Casos límite (array vacío) ────────────');
console.log('Media de vacío:', calcularMedia(vacio));
console.log('Mediana de vacío:', calcularMediana(vacio));
console.log('Filtrar atípicos de vacío:', filtrarAtipicos(vacio, 1.5));
