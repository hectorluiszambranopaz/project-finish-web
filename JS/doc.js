// productos (arrays,objetos,atributos)
const productos = [
  // Camiseta de tirantes
  {
    id: 1,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 50000,
    precioOriginal: 60000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/1029680/II0801-1.jpg?v=638570997942500000",
  },

  {
    id: 2,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 120000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/1029698/IL2112-1.jpg?v=638570998083830000",
  },

  {
    id: 3,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 50000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/865103/IL2113-1.jpg?v=638496892362230000",
  },

  {
    id: 4,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 39800,
    precioOriginal: 59999,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/893598/100205992_4.jpg?v=638569610762800000",
  },

  {
    id: 5,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 50000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_775875-MCO71958264175_092023-F.webp",
  },
  // Pantalonetas
  {
    id: 6,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 65000,
    precioOriginal: 75000,
    categoria: "Entrenamiento",
    imagen:
      "https://www.fabysport.com/wp-content/uploads/2024/06/pantaloneta-azul-2-fxone-min.jpg",
  },

  {
    id: 7,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 65000,
    categoria: "Entrenamiento",
    imagen:
      "https://www.fabysport.com/wp-content/uploads/2024/06/pantaloneta-gris-claro-2-fxone-min.jpg",
  },

  {
    id: 8,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 65000,
    categoria: "Entrenamiento",
    imagen:
      "https://www.fabysport.com/wp-content/uploads/2024/06/pantaloneta-negra-1-fxone-min.jpg",
  },

  {
    id: 9,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 61999,
    precioOriginal: 74999,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_978057-MCO70716473910_072023-F.webp",
  },

  {
    id: 10,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 65000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_963622-MCO70716685924_072023-F.webp",
  },

  // Camisetas
  {
    id: "camisetas11",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_857766-MCO70722144159_072023-F.webp",
  },

  {
    id: "camisetas12",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    precioOriginal: 70000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_604912-MCO70692422340_072023-F.webp",
  },

  {
    id: "camisetas13",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_636419-MCO70722143761_072023-F.webp",
  },

  {
    id: "camisetas14",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_632598-MCO80009087400_102024-F.webp",
  },

  {
    id: "camisetas15",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 59900,
    precioOriginal: 70000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/735678/II0802-1.jpg?v=638267149508030000",
  },
  // Zapatillas
  {
    id: "zapatillas16",
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 250000,
    precioOriginal: 429999,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/886511/100201727_1.jpg?v=638569576686330000",
  },

  {
    id: 17,
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 250000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/898058/100204920_1.jpg?v=638570024894000000",
  },

  {
    id: 18,
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 240000,
    precioOriginal: 500000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/966371/CN4107_1.jpg?v=638570699355330000",
  },

  {
    id: 19,
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 250000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/966473/CN4108_1.jpg?v=638570699821730000",
  },

  {
    id: 20,
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 250000,
    categoria: "Entrenamiento",
    imagen:
      "https://reebokcol.vtexassets.com/arquivos/ids/1083541/100206592_1.jpg?v=638646010274530000",
  },
  // Chaquetas
  {
    id: 21,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    categoria: "Entrenamiento",
    imagen:
      "https://underarmourcol.vtexassets.com/arquivos/ids/525603-800-1200?v=638119911192270000&width=800&height=1200&",
  },

  {
    id: 22,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    precioOriginal: 320500,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/6108V-CiNRL._AC_SX569_.jpg",
  },

  {
    id: 23,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/61c5Ic-AbIL._AC_SX569_.jpg",
  },

  {
    id: 24,
    nombre: "chaquetas",
    ccantidad_disponible: 30,
    precio: 160000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/61z3ZITWFsL._AC_SX569_.jpg",
  },

  {
    id: 25,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    precioOriginal: 300000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/61ucFBpmOzL._AC_SX569_.jpg",
  },
  //Gorra deportiva
  {
    id: 26,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen:
      "https://s.alicdn.com/@sc04/kf/Hc4097d6b3228474fa6348ba8d292160c1.jpg?avif=close",
  },

  {
    id: 27,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen:
      "https://s.alicdn.com/@sc04/kf/Hb0a61f70572d4922b4a2f0c74528970aV.jpg_720x720q50.jpg",
  },

  {
    id: 28,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    precioOriginal: 100000,
    categoria: "Entrenamiento",
    imagen:
      "https://s.alicdn.com/@sc04/kf/H0e14c248be94448e865c150c111a21f4s.jpg_720x720q50.jpg",
  },

  {
    id: 29,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen:
      "https://s.alicdn.com/@sc04/kf/H8e3c7d44508c4d4bbb6c8dffba52ab58b.jpg_720x720q50.jpg",
  },

  {
    id: 30,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen:
      "https://s.alicdn.com/@sc04/kf/H28a8123258ea46a1a727853898c60228B.jpg_720x720q50.jpg",
  },
  // Sudaderas
  {
    id: 31,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/41SrHMRuMkL._AC_SY550_.jpg",
  },

  {
    id: 32,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/41z0J1s65eL._AC_SY550_.jpg",
  },

  {
    id: 33,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    precioOriginal: 160000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/41Hl5+oHWcL._AC_SY550_.jpg",
  },

  {
    id: 34,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/51ZjsvdqGuL._AC_SY550_.jpg",
  },

  {
    id: 35,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/41Vh9G6FtSS._AC_SX569_.jpg",
  },

  // Mallas
  {
    id: 36,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 90000,
    precioOriginal: 150000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_773318-MCO75910011563_042024-F.webp",
  },

  {
    id: 37,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/51wL4EaLMQL._AC_SX679_.jpg",
  },

  {
    id: 38,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_884014-MCO72728640197_112023-F.webp",
  },

  {
    id: 39,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/41N2GZ-cN9L._AC_SX569_.jpg",
  },

  {
    id: 40,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 79999,
    precioOriginal: 136000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/41o2Dzmob1L._AC_SX569_.jpg",
  },
];

// Renderizar productos en la lista
const listaProductos = document.getElementById("lista-productos");
function cargarProductos() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src="${producto.imagen}" alt="${
      producto.nombre
    }" style="width:150px; height:auto;">
    <h3>${producto.nombre}</h3>
    ${
      producto.precioOriginal
        ? `<p>Precio original: <del class="price">$${producto.precioOriginal}</del></p>`
        : ""
    }
    <p>Precio: <strong class="price">$${producto.precio}</strong></p>
    <p>Cantidad disponible: ${producto.cantidad_disponible}</p>
    <p>Categoría: ${producto.categoria}</p>
    <button onclick="agregarAlCarrito(${
      producto.id
    })">Agregar al Carrito</button>
  
    `;
    listaProductos.appendChild(div);
  });
}

// Función para filtrar productos
function filtrarProductos() {
  const categoria = document.getElementById("categoria").value;
  const precioMin = document.getElementById("precioMin").value;
  const precioMax = document.getElementById("precioMax").value;

  let productosFiltrados = productos;

  if (categoria) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.categoria === categoria
    );
  }

  if (precioMin) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio >= parseFloat(precioMin)
    );
  }

  if (precioMax) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio <= parseFloat(precioMax)
    );
  }

  cargarProductos(productosFiltrados);
}

// Función para limpiar los filtros
function limpiarFiltros() {
  document.getElementById("categoria").value = "";
  document.getElementById("precioMin").value = "";
  document.getElementById("precioMax").value = "";
  cargarProductos(productos); // Mostrar todos los productos sin filtros
}

// Mostrar todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos(productos);
});

// Función para filtrar productos
function filtrarProductos() {
  const categoria = document.getElementById("categoria").value;
  const precioMin = document.getElementById("precioMin").value;
  const precioMax = document.getElementById("precioMax").value;

  let productosFiltrados = productos;

  if (categoria) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.categoria === categoria
    );
  }

  if (precioMin) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio >= parseFloat(precioMin)
    );
  }

  if (precioMax) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.precio <= parseFloat(precioMax)
    );
  }

  cargarProductos(productosFiltrados);
}
///////////////////
let productosMostrados = 0;
const CANTIDAD_POR_CARGA = 15;

// Función para cargar productos progresivamente
function cargarProductos() {
  const listaProductos = document.getElementById("productos");
  for (
    let i = productosMostrados;
    i < productosMostrados + CANTIDAD_POR_CARGA;
    i++
  ) {
    if (i >= productos.length) {
      document.getElementById("mensaje-fin").style.display = "block";
      return;
    }

    const producto = productos[i];
    const tarjeta = document.createElement("div");
    tarjeta.className = "producto";
    tarjeta.innerHTML = `

    <img src="${producto.imagen}" alt="${
      producto.nombre
    }" style="width:150px; height:auto;">
    <h3>${producto.nombre}</h3>
    ${
      producto.precioOriginal
        ? `<p>Precio original: <del class="price">$${producto.precioOriginal}</del></p>`
        : ""
    }
    <p>Precio: <strong class="price">$${producto.precio}</strong></p>
    <p>Cantidad disponible: ${producto.cantidad_disponible}</p>
    <p>Categoría: ${producto.categoria}</p>
    
      <p>Precio: $${producto.precio}</p>

      
      
      <button onclick="verDetalle(${i})">Ver Detalle</button>
    `;
    listaProductos.appendChild(tarjeta);
  }
  productosMostrados += CANTIDAD_POR_CARGA;
}

// Detecta el final de la página para cargar más productos
window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    cargarProductos();
  }
};

// Muestra el detalle del producto seleccionado
function verDetalle(indice) {
  const producto = productos[indice];
  const detalleSeccion = document.getElementById("VerDetallesproducto");
  detalleSeccion.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>Precio: $${producto.precio}</p>
    <p>Stock: ${producto.cantidad_disponible}</p>
    <p>Precio Original: $${producto.precioOriginal}</p>
    <input type="number" id="cantidad" min="1" placeholder="Cantidad">
    <button onclick="agregarAlCarrito(${indice})">Agregar al Carrito</button>
  `;
  detalleSeccion.style.display = "block";
}

// Función para filtrar productos
function filtrarProductos() {
  const categoria = document.getElementById("categoria").value;
  const precioMax = document.getElementById("filtro-precio").value;

  productosMostrados = 0; // Reiniciar el contador
  const listaProductos = document.getElementById("productos");
  listaProductos.innerHTML = ""; // Limpiar la lista de productos

  const productosFiltrados = productos.filter((producto) => {
    return (
      (!categoria || producto.categoria === categoria) &&
      (!precioMax || producto.precio <= precioMax)
    );
  });

  productosMostrados = 0;
  productos.length = 0;
  productos.push(...productosFiltrados);

  cargarProductos();
}

// Función para agregar el producto al carrito (solo como ejemplo)
function agregarAlCarrito(indice) {
  const cantidad = document.getElementById("cantidad").value;
  if (cantidad > 0) {
    console.log(
      `Producto ${productos[indice].nombre} agregado al carrito con cantidad ${cantidad}`
    );
    // Aquí podrías añadir el producto a un array de carrito, mostrar mensaje, etc.
  } else {
    alert("Ingrese una cantidad válida.");
  }
}

// Función para cancelar la compra
function cancelarCompra() {
  window.location.href = "index.html"; // Redirecciona a la página inicial
}

// Función para completar la compra
function completarCompra() {
  window.location.href = "carrito.html"; // Redirecciona a la página del carrito
}

// Carga inicial de productos
document.addEventListener("DOMContentLoaded", cargarProductos);

//////////////////////////

// Función para limpiar los filtros
function limpiarFiltros() {
  document.getElementById("categoria").value = "";
  document.getElementById("precioMin").value = "";
  document.getElementById("precioMax").value = "";
  cargarProductos(productos); // Mostrar todos los productos sin filtros
}

// Mostrar todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos(productos);
});

// Función para mostrar detalles de un producto seleccionado
function verDetalleProducto(id) {
  const producto = productos.find((prod) => prod.id === id);

  if (producto) {
    document.getElementById("cantidadProducto").value = 1; // Valor por defecto para cantidad
    document.getElementById("precio").value = producto.precio;
    document.getElementById("precioOriginal").value = producto.precioOriginal;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("imagen").value = producto.imagen;
    document.getElementById("cantidad_disponible").value =
      producto.cantidad_disponible;
    document.getElementById("talla").value = producto.talla;

    // Aquí puedes ajustar otros detalles, como el nombre, si quieres mostrar más datos
  }
}

// Array para almacenar los productos en el carrito

// Función para agregar un producto al carrito
function agregarAlCarrito() {
  const cantidad = parseInt(document.getElementById("cantidadProducto").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const precioOriginal = parseFloat(
    document.getElementById("precioOriginal").value
  );
  const categoria = parseFloat(document.getElementById("categoria").value);
  const imagen = parseFloat(document.getElementById("imagen").value);
  const cantidad_disponible = parseFloat(
    document.getElementById("cantidad_disponible").value
  );
  const talla = document.getElementById("talla").value;

  const productoCarrito = {
    cantidad,
    precio,
    talla,
    precioOriginal,
    categoria,
    imagen,
    cantidad_disponible,
  };

  carrito.push(productoCarrito);
  alert("Producto agregado al carrito con éxito.");
  console.log("Carrito:", carrito); // Puedes ver el carrito en la consola para verificar
}

cargarProductos();

function mostrarSeccion(idSeccion) {
  const secciones = document.querySelectorAll(".seccion");
  // Ocultar todas las secciones
  secciones.forEach((seccion) => seccion.classList.remove("activa"));
  // Mostrar solo la sección seleccionada
  const seccionActiva = document.getElementById(idSeccion);
  seccionActiva.classList.add("activa");
}

//Función para mostrar secciones
/*function mostrarSeccion(seccion) {
  document
    .querySelectorAll(".seccion")
    .forEach((s) => s.classList.remove("activa"));
  document.getElementById(seccion).classList.add("activa");
}*/

// Función para configurar la redirección de formularios
function configurarRedireccionFormulario(formId, seccionDestino) {
  document.getElementById(formId).addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recargar la página al enviar el formulario
    mostrarSeccion(seccionDestino); // Muestra la sección de destino
  });
}

// Configurar la redirección para el formulario de "Requerimientos"
configurarRedireccionFormulario("form-requerimientos", "productos");

// Aquí puedes añadir más formularios si es necesario
// configurarRedireccionFormulario("form-otro", "otraSeccion");

document
  .getElementById("form-requerimientos")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const presupuesto = document.getElementById("presupuesto").value;
    const cantidad = document.getElementById("cantidad").value;
    const direccion = document.getElementById("direccion").value.trim();
    const tipoEntrega = document.querySelector('input[name="entrega"]:checked');

    // Limpiar mensajes de error previos
    const mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerHTML = "";

    // Validar los campos
    let errores = [];

    if (nombre === "") {
      errores.push("El nombre es obligatorio.");
    }

    if (presupuesto <= 0 || isNaN(presupuesto)) {
      errores.push("El presupuesto debe ser un número positivo.");
    }

    if (cantidad < 1 || cantidad > 20 || isNaN(cantidad)) {
      errores.push("La cantidad debe estar entre 1 y 20.");
    }

    if (direccion === "") {
      errores.push("La dirección es obligatoria.");
    }

    if (!tipoEntrega) {
      errores.push("Debes seleccionar un tipo de entrega.");
    }

    // Mostrar errores si existen
    if (errores.length > 0) {
      mensajeError.innerHTML = errores.join("<br>");
    } else {
      // Aquí puedes proceder a manejar la compra si todo está correcto
      alert("Compra iniciada con éxito.");
      // Aquí podrías agregar más lógica para proceder con la compra...
    }
  });

///////////////
let producto = [];

function mostrarCarrito() {
  const tablaCarrito = document.getElementById("tabla-carrito");
  tablaCarrito.innerHTML = ""; // Limpiar contenido anterior

  carrito.forEach((producto, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
          <td>${index + 1}</td>
          <td>${producto.nombre}</td>
          <td>${producto.cantidad_disponible}</td>
          <td>${producto.precio}</td>
          <td>${producto.precioOriginal || "N/A"}</td>
          <td>${producto.categoria}</td>
          <td><img src="${producto.imagen}" alt="${
      producto.nombre
    }" width="30"></td>
          <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
      `;
    tablaCarrito.appendChild(fila);
  });

  // Actualizar el total de productos y precio
  document.getElementById("totalProductos").textContent = carrito.length;
  document.getElementById("totalCompra").textContent = carrito
    .reduce((total, prod) => total + prod.precio, 0)
    .toFixed(2);
}

function agregarAlCarrito(idProducto) {
  const producto = productos.find((prod) => prod.id === idProducto);
  if (producto) {
    carrito.push(producto);
    mostrarCarrito();
  }
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1); // Elimina el producto del carrito
  mostrarCarrito(); // Vuelve a mostrar el carrito actualizado
}

/////////////

/////////////////////////////////////////////

// Función para validar los campos del formulario
function validarFormulario() {
  const nombreTarjeta = document.getElementById("nombreTarjeta").value.trim();
  const numeroTarjeta = document.getElementById("numeroTarjeta").value.trim();
  const fechaExpiracion = document
    .getElementById("fechaExpiracion")
    .value.trim();
  const codigoCVV = document.getElementById("codigoCVV").value.trim();
  let mensajeError = "";

  // Validación del campo de nombre en la tarjeta
  if (nombreTarjeta === "") {
    mensajeError += "El nombre en la tarjeta es obligatorio.\n";
  }

  // Validación del número de tarjeta (debe tener 16 dígitos)
  if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta)) {
    mensajeError += "El número de tarjeta debe tener 16 dígitos numéricos.\n";
  }

  // Validación de la fecha de expiración (formato MM/AA)
  const regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regexFecha.test(fechaExpiracion)) {
    mensajeError += "La fecha de expiración debe tener el formato MM/AA.\n";
  }

  // Validación del código CVV (debe tener 3 dígitos)
  if (codigoCVV.length !== 3 || isNaN(codigoCVV)) {
    mensajeError += "El código CVV debe tener 3 dígitos numéricos.\n";
  }

  // Mostrar mensajes de error si hay algún problema
  if (mensajeError) {
    alert("Error en el formulario:\n" + mensajeError);
    return false;
  } else {
    alert("Formulario completado correctamente.");
    return true;
  }
}

// Asigna la función de validación al botón de compra
document
  .getElementById("btnEjecutarCompra")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío del formulario para validación
    validarFormulario();
  });
////////////////////
// Variables para la lista de productos y control de carga