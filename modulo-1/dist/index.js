"use strict";
// src/index.ts
// Punto de entrada del módulo 1.
// Importa las funciones de math-utils y las prueba con datos reales.
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_js_1 = require("./math-utils.js");
const datos = [4, 8, 15, 16, 23, 42, 100, 3, 7, 200];
console.log('── Análisis estadístico ──────────────────');
console.log('Datos:', datos);
const media = (0, math_utils_js_1.calcularMedia)(datos);
console.log('Media:', media);
const mediana = (0, math_utils_js_1.calcularMediana)(datos);
console.log('Mediana:', mediana);
const sinAtipicos = (0, math_utils_js_1.filtrarAtipicos)(datos, 1.5);
console.log('Sin atípicos (límite 1.5σ):', sinAtipicos);
// Caso límite: array vacío
const vacio = [];
console.log('\n── Casos límite (array vacío) ────────────');
console.log('Media de vacío:', (0, math_utils_js_1.calcularMedia)(vacio));
console.log('Mediana de vacío:', (0, math_utils_js_1.calcularMediana)(vacio));
console.log('Filtrar atípicos de vacío:', (0, math_utils_js_1.filtrarAtipicos)(vacio, 1.5));
