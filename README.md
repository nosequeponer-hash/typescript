# TypeScript - Práctica 4

Repositorio de ejercicios prácticos de TypeScript desarrollados durante las prácticas en Corner Studios. Contiene dos módulos independientes que cubren desde los fundamentos del lenguaje hasta el modelado de datos complejo con genéricos y uniones discriminadas.

## 📁 Estructura del proyecto

```
typescript/
├── modulo-1/          # Lógica pura y funciones tipadas
│   ├── src/
│   │   ├── math-utils.ts   # Funciones de análisis estadístico
│   │   └── index.ts        # Punto de entrada y pruebas
│   ├── dist/               # Código JavaScript compilado
│   ├── docs/
│   └── tsconfig.json
├── modulo-2/          # Modelado de datos y arquitectura
│   ├── src/
│   │   ├── domain/
│   │   │   └── types/
│   │   │       └── universidad.types.ts  # Interfaces y tipos del dominio
│   │   ├── services/
│   │   │   └── api-client.ts             # Servicio genérico de datos
│   │   └── index.ts                      # Punto de entrada y pruebas
│   └── docs/
│       └── arquitectura.md               # Documentación de decisiones de diseño
└── README.md
```

## 🧩 Módulo 1 - Lógica pura y funciones tipadas

Implementación de funciones de análisis estadístico con TypeScript estricto:

- `calcularMedia(datos)` → Devuelve la media aritmética o `null` si el array está vacío
- `calcularMediana(datos)` → Devuelve la mediana o `null` si el array está vacío
- `filtrarAtipicos(datos, limite)` → Filtra valores que superan N desviaciones estándar

**Cómo ejecutar:**
```bash
cd modulo-1
npm install
npx tsx src/index.ts    # Ejecutar directamente
npx tsc                 # Compilar a JavaScript en dist/
```

## 🏗️ Módulo 2 - Modelado de datos y arquitectura

Sistema de gestión universitaria con arquitectura por capas:

- **Interfaces:** `Estudiante`, `Asignatura` para modelar entidades del dominio
- **Unión Discriminada:** `EstadoMatricula` con tres estados: `ACTIVA`, `SUSPENDIDA`, `FINALIZADA`
- **Genéricos:** `RespuestaAPI<T>` para tipar respuestas de red de forma reutilizable
- **Análisis exhaustivo:** Función `generarReporte` con patrón `never` en el `default` del switch

**Cómo ejecutar:**
```bash
cd modulo-2
npm install
npx tsx src/index.ts    # Ejecutar directamente
npx tsc --noEmit        # Verificar tipos sin compilar
```

## 🛠️ Tecnologías

- **TypeScript** con `strict: true`
- **tsx** para ejecución directa de TypeScript sin compilar
- **Node.js** como entorno de ejecución

## 🔗 Repositorio relacionado

El módulo 3 (React con TypeScript) está en el repositorio [react](https://github.com/nosequeponer-hash/react).
