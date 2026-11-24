# Café Origen Analítica (v0.1)

Programa en JavaScript (Node.js) que calcula indicadores de ventas de Café Origen y los muestra como un reporte en la consola. Sirve para que la gerente vea los números sin abrir el código.

## Cómo ejecutarlo

1. Instala [Node.js](https://nodejs.org).
2. Abre una terminal en la carpeta del proyecto.
3. Corre el reporte:

```
node src/reporte.js
```

Otros archivos:

| Archivo | Para qué sirve |
|---|---|
| `src/datos.js` | Las 12 ventas de muestra |
| `src/analitica.js` | Las funciones que calculan los indicadores |
| `src/reporte.js` | El reporte completo |
| `src/depurar.js` | Reproduce y demuestra la corrección de dos errores reportados |
| `src/pruebas.js` | Prueba las funciones con el arreglo completo, un elemento y vacío |

## Qué preguntas responde

- ¿Cuánto se vendió en total?
- ¿Cuántas unidades salieron?
- ¿Cuál fue la venta más grande?
- ¿Cuánto gasta en promedio un cliente por compra (ticket promedio)?
- ¿Cuánto se vendió en cada ciudad?
- ¿Cuántas unidades se vendieron de cada producto?
- ¿Cuáles son los 3 productos que más dinero generaron?
- ¿Cómo le fue a la tienda en un día específico (incluso si no hubo ventas)?
