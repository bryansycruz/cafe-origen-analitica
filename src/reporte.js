const ventas = require("./datos");
const {
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
  ventasDelDia,
} = require("./analitica");

/// Da formato de peso a los valores
function pesos(valor) {
  return "$ " + Math.round(valor).toLocaleString("es-CO");
}

// "medellín" -> "Medellín", para normalizar los datos.
function conMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function titulo(texto) {
  console.log("\n" + "=".repeat(44));
  console.log(texto);
  console.log("=".repeat(44));
}

function resumenDelDia(fecha) {
  const delDia = ventasDelDia(ventas, fecha);
  console.log(`Fecha: ${fecha}`);
  console.log("Ventas".padEnd(24) + String(delDia.length).padStart(16));
  console.log("Total vendido".padEnd(24) + pesos(totalVendido(delDia)).padStart(16));
  console.log("Ticket promedio".padEnd(24) + pesos(ticketPromedio(delDia)).padStart(16));
}

console.log("CAFÉ ORIGEN - REPORTE DE VENTAS");


titulo("1. RESUMEN GENERAL");
const mayor = ventaMayor(ventas);
console.log("Total vendido".padEnd(24) + pesos(totalVendido(ventas)).padStart(16));
console.log("Unidades vendidas".padEnd(24) + String(unidadesVendidas(ventas)).padStart(16));
console.log("Ticket promedio".padEnd(24) + pesos(ticketPromedio(ventas)).padStart(16));
console.log("Venta más grande".padEnd(24) + pesos(mayor.cantidad * mayor.precio).padStart(16));
console.log(`  (${mayor.producto}, ${conMayuscula(mayor.ciudad.trim())})`);


titulo("2. VENTAS POR CIUDAD");
const porCiudad = totalPorCiudad(ventas);
for (const ciudad in porCiudad) {
  console.log(conMayuscula(ciudad).padEnd(24) + pesos(porCiudad[ciudad]).padStart(16));
}


titulo("3. UNIDADES POR PRODUCTO");
const porProducto = unidadesPorProducto(ventas);
for (const producto in porProducto) {
  console.log(producto.padEnd(24) + String(porProducto[producto]).padStart(16));
}


titulo("4. TOP 3 PRODUCTOS POR VALOR");
const top = topProductosPorValor(ventas, 3);
let puesto = 1;
for (const par of top) {
  console.log(`${puesto}. ${par[0]}`.padEnd(24) + pesos(par[1]).padStart(16));
  puesto++;
}


titulo("5. RESUMEN DE UN DÍA CON VENTAS");
resumenDelDia("2026-09-01");

titulo("6. RESUMEN DE UN DÍA SIN VENTAS");
resumenDelDia("2026-09-30");
console.log("");
