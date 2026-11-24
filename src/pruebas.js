const ventas = require("./datos");
const {
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
} = require("./analitica");

const casos = [
  ["Completo (12 ventas)", ventas],
  ["Un elemento (id 3)", [ventas[2]]],
  ["Vacío", []],
];

for (const [nombre, datos] of casos) {
  console.log(`\n== ${nombre} ==`);
  console.log("totalVendido:", totalVendido(datos));
  console.log("unidadesVendidas:", unidadesVendidas(datos));
  console.log("ventaMayor:", ventaMayor(datos));
  console.log("ticketPromedio:", ticketPromedio(datos));
  console.log('ventasPorCiudad "Medellín":', ventasPorCiudad(datos, "Medellín"));
}
