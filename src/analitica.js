
function valorVenta(venta) {
  return venta.precio * venta.cantidad;
}


function totalVendido(ventas) {
  let total = 0;
  for (const venta of ventas) {
    total += valorVenta(venta);
  }
  return total;
}


function unidadesVendidas(ventas) {
  let unidades = 0;
  for (const venta of ventas) {
    unidades += venta.cantidad;
  }
  return unidades;
}

function ventaMayor(ventas) {
  let mayor = null;
  for (const venta of ventas) {
    if (mayor === null || valorVenta(venta) > valorVenta(mayor)) {
      mayor = venta;
    }
  }
  return mayor;
}

function ticketPromedio(ventas) {
  let total = 0;
  let validas = 0;
  for (const venta of ventas) {
    if (venta.cantidad > 0) {
      total += valorVenta(venta);
      validas++;
    }
  }
  if (validas === 0) {
    return 0;
  }
  return total / validas;
}

function ventasPorCiudad(ventas, ciudad) {
  const buscada = ciudad.trim().toLowerCase();
  let total = 0;
  for (const venta of ventas) {
    if (venta.ciudad.trim().toLowerCase() === buscada) {
      total += valorVenta(venta);
    }
  }
  return total;
}




function totalVendidoM(ventas) {
  const total = ventas.reduce((acumulado, venta) => {
    return acumulado + valorVenta(venta);
  }, 0);
  return total;
}

function unidadesVendidasM(ventas) {
  const unidades = ventas.reduce((acumulado, venta) => {
    return acumulado + venta.cantidad;
  }, 0);
  return unidades;
}

function ventasPorCiudadM(ventas, ciudad) {
  const buscada = ciudad.trim().toLowerCase();

 
  const deLaCiudad = ventas.filter((venta) => {
    return venta.ciudad.trim().toLowerCase() === buscada;
  });


  const total = deLaCiudad.reduce((acumulado, venta) => {
    return acumulado + valorVenta(venta);
  }, 0);
  return total;
}

function totalPorCiudad(ventas) {
  const totales = {};
  for (const venta of ventas) {
    const ciudad = venta.ciudad.trim().toLowerCase();
    if (totales[ciudad] === undefined) {
      totales[ciudad] = 0;
    }
    totales[ciudad] += valorVenta(venta);
  }
  return totales;
}

function unidadesPorProducto(ventas) {
  const unidades = {};
  for (const venta of ventas) {
    if (unidades[venta.producto] === undefined) {
      unidades[venta.producto] = 0;
    }
    unidades[venta.producto] += venta.cantidad;
  }
  return unidades;
}

function topProductosPorValor(ventas, k) {

  const dinero = {};
  for (const venta of ventas) {
    if (dinero[venta.producto] === undefined) {
      dinero[venta.producto] = 0;
    }
    dinero[venta.producto] += valorVenta(venta);
  }


  const lista = Object.entries(dinero);


  lista.sort((a, b) => b[1] - a[1]);

  return lista.slice(0, k);
}

// ---------- Reto 4 ----------

// Devuelve solo las ventas de una fecha, por ejemplo "2026-09-01".
// Si ese día no hubo ventas devuelve un arreglo vacío [].
function ventasDelDia(ventas, fecha) {
  const delDia = [];
  for (const venta of ventas) {
    if (venta.fecha === fecha) {
      delDia.push(venta);
    }
  }
  return delDia;
}

module.exports = {
  ventasDelDia,
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
};
