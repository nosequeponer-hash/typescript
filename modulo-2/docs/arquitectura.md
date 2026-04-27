# Arquitectura del módulo 2

## Modelo de datos

### ¿Por qué `interface` para las entidades?

Las entidades `Estudiante` y `Asignatura` están definidas como `interface` porque representan contratos estructurales de objetos de dominio. Las interfaces permiten la fusión de declaraciones (*declaration merging*), lo que facilita extenderlas en el futuro sin romper el código existente.

### ¿Por qué `type` para `UUID` y `Creditos`?

Se usan `type` para crear aliases semánticos de primitivos. Esto mejora la legibilidad del código: `readonly id: UUID` comunica la intención mejor que `readonly id: string`, aunque a nivel de tipos sean equivalentes.

### ¿Por qué `type` para `EstadoMatricula`?

`EstadoMatricula` es una **unión discriminada**, que es una composición de tipos. Las uniones solo se pueden expresar con `type`, no con `interface`. Cada estado tiene una propiedad `tipo` literal que actúa como discriminante, permitiendo que TypeScript estreche el tipo de forma segura dentro de cada rama del `switch`.

---

## Genéricos en `RespuestaAPI<T>`

La interfaz `RespuestaAPI<T>` usa un genérico para abstraer la lógica de las respuestas de red. Sin genéricos, habría que crear una interfaz distinta para cada tipo de dato (`RespuestaAPIEstudiante`, `RespuestaAPIAsignatura`...), lo que viola el principio DRY (*Don't Repeat Yourself*).

Con el genérico `T`, una sola interfaz sirve para cualquier tipo de dato:
- `RespuestaAPI<Estudiante[]>` → respuesta con array de estudiantes
- `RespuestaAPI<Asignatura[]>` → respuesta con array de asignaturas

---

## Análisis exhaustivo con `never`

En la función `generarReporte`, el bloque `default` del `switch` asigna el valor no manejado a una variable de tipo `never`. Esto garantiza que si en el futuro se añade un nuevo estado a `EstadoMatricula` (por ejemplo `MatriculaCongelada`), el compilador lanzará un error de compilación en ese bloque `default`, obligando al desarrollador a manejar el nuevo caso. Sin este patrón, el error solo aparecería en tiempo de ejecución.
