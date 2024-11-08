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
    imagen: "",
  },

  {
    id: 2,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 120000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 3,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 50000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 4,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 39800,
    precioOriginal: 59999,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 5,
    nombre: "Camiseta de tirantes",
    cantidad_disponible: 30,
    precio: 50000,
    categoria: "Entrenamiento",
    imagen: "",
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
    imagen: "",
  },

  {
    id: 8,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 65000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 9,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 61999,
    precioOriginal: 74999,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 10,
    nombre: "Pantaloneta",
    cantidad_disponible: 30,
    precio: 65000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  // Camisetas
  {
    id: "camisetas11",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: "camisetas12",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    precioOriginal: 70000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: "camisetas13",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: "camisetas14",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 60000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: "camisetas15",
    nombre: "camisetas",
    cantidad_disponible: 30,
    precio: 59900,
    precioOriginal: 70000,
    categoria: "Entrenamiento",
    imagen: "",
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
    imagen: "",
  },

  {
    id: 19,
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 250000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 20,
    nombre: "zapatillas",
    cantidad_disponible: 30,
    precio: 250000,
    categoria: "Entrenamiento",
    imagen: "",
  },
  // Chaquetas
  {
    id: 21,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    categoria: "Entrenamiento",
    imagen: "https://m.media-amazon.com/images/I/517iynuzp1L._AC_SY695_.jpg",
  },

  {
    id: 22,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    precioOriginal: 320500,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 23,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 24,
    nombre: "chaquetas",
    ccantidad_disponible: 30,
    precio: 160000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 25,
    nombre: "chaquetas",
    cantidad_disponible: 30,
    precio: 160000,
    precioOriginal: 300000,
    categoria: "Entrenamiento",
    imagen: "",
  },
  //Gorra deportiva
  {
    id: 26,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 27,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 28,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    precioOriginal: 100000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 29,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 30,
    nombre: "Gorra Deportiva",
    cantidad_disponible: 30,
    precio: 40000,
    categoria: "Entrenamiento",
    imagen: "",
  },
  // Sudaderas
  {
    id: 31,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 32,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 33,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    precioOriginal: 160000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 34,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 35,
    nombre: "susadaderas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  // Mallas
  {
    id: 36,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 90000,
    precioOriginal: 150000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 37,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 38,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "",
  },

  {
    id: 39,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 80000,
    categoria: "Entrenamiento",
    imagen: "image/",
  },

  {
    id: 40,
    nombre: "mallas",
    cantidad_disponible: 30,
    precio: 79999,
    precioOriginal: 136000,
    categoria: "Entrenamiento",
    imagen: "",
  },
];

/*let carrito = [];
let seleccion = prompt("hola desea comprar algun producto si o no");
while (seleccion != "si" && seleccion != "no") {
  alert("por. favor ingresa si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if ((seleccion = "'si")) {
  alert("a continuación nuestra lista de prodcutos");
  let todoslosproductos = productos.map(
    (productos) => producto.nombre + "" + producto.precio + "$"
  );
  console.producto;
}*/

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

  mostrarProductos(productosFiltrados);
}

// Función para limpiar los filtros
function limpiarFiltros() {
  document.getElementById("categoria").value = "";
  document.getElementById("precioMin").value = "";
  document.getElementById("precioMax").value = "";
  mostrarProductos(productos); // Mostrar todos los productos sin filtros
}

// Mostrar todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos(productos);
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

  mostrarProductos(productosFiltrados);
}

// Función para limpiar los filtros
function limpiarFiltros() {
  document.getElementById("categoria").value = "";
  document.getElementById("precioMin").value = "";
  document.getElementById("precioMax").value = "";
  mostrarProductos(productos); // Mostrar todos los productos sin filtros
}

// Mostrar todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos(productos);
});

// Función para mostrar detalles de un producto seleccionado
function verDetalleProducto(id) {
  const producto = productos.find((prod) => prod.id === id);

  if (producto) {
    document.getElementById("cantidadProducto").value = 1; // Valor por defecto para cantidad
    document.getElementById("precio").value = producto.precio;
    // Aquí puedes ajustar otros detalles, como el nombre, si quieres mostrar más datos
  }
}

// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
  const cantidad = parseInt(document.getElementById("cantidadProducto").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const talla = document.getElementById("talla").value;

  const productoCarrito = {
    cantidad,
    precio,
    talla,
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
///////////////////////////////////////////////////////*/

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

  