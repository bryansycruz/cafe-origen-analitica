#  Origen Analítica

## Diccionario de datos

En la tabla los ID son cliente, tambien tiene los productos, ciudad y la cantidad. Tambien hay varios datos tipo String e int, además de float.





### ventasDelDia(ventas, fecha)
Recorro todas las ventas, si la fecha es igual a la buscada la guardo en un arreglo nuevo y lo devuelvo. Si ese día no hubo ventas devuelve `[]`.

### Error 2
Error 2: Bogotá aparecía dos veces



### Verificación del reporte
Ejecuté `node src/reporte.js`: no aparece `NaN` ni `undefined`, y salen 4 ciudades sin duplicados (Medellín, Bogotá, Cali y Pereira). Un día con ventas (2026-09-01) da 2 ventas, total $ 110.000 y ticket $ 55.000. Un día sin ventas (2026-09-30) da 0 ventas, total $ 0 y ticket $ 0.
