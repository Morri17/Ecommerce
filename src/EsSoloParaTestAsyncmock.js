 const misProductos = [
  {
    id: "1",
    nombre: "Camperas",
    precio: 5000,
    img: "../src/assets/Imagenes/campera.webp",
    categoria: "camperas",
    stock: 10,
  },
  {
    id: "2",
    nombre: "Camperas",
    precio: 200,
    img: "../src/assets/Imagenes/campera2.webp",
    categoria: "camperas",
    stock: 10,
  },
  {
    id: "3",
    nombre: "Camperas",
    precio: 180,
    img: "../src/assets/Imagenes/campera3.webp",
    categoria: "camperas",
    stock: 10,
  },
  {
    id: "4",
    nombre: "Camperas",
    precio: 900,
    img: "../src/assets/Imagenes/campera4.jpeg",
    categoria: "camperas",
    stock: 10,
  },

  {
    id: "5",
    nombre: "Remeras",
    precio: 500,
    img: "../src/assets/Imagenes/remera.jpeg",
    categoria: "remeras",
    stock: 10,
  },
  {
    id: "6",
    nombre: "Remeras",
    precio: 200,
    img: "../src/assets/Imagenes/remera2.jpg",
    categoria: "remeras",
    stock: 10,
  },
  {
    id: "7",
    nombre: "Remeras",
    precio: 180,
    img: "../src/assets/Imagenes/remera3.jpg",
    categoria: "remeras",
    stock: 10,
  },
  {
    id: "8",
    nombre: "Remeras",
    precio: 900,
    img: "../src/assets/Imagenes/remera4.jpeg",
    categoria: "remeras",
    stock: 10,
  },

  {
    id: "9",
    nombre: "Buzos",
    precio: 500,
    img: "../src/assets/Imagenes/buzo.jpg",
    categoria: "buzos",
    stock: 10,
  },
  {
    id: "10",
    nombre: "Buzos",
    precio: 200,
    img: "../src/assets/Imagenes/buzo2.jpg",
    categoria: "buzos",
    stock: 10,
  },
  {
    id: "11",
    nombre: "Buzos",
    precio: 180,
    img: "../src/assets/Imagenes/buzo3.jpg",
    categoria: "buzos",
    stock: 10,
  },
  {
    id: "12",
    nombre: "Buzos",
    precio: 900,
    img: "../src/assets/Imagenes/buzo4.jpeg",
    categoria: "buzos",
    stock: 10,
  },

  {
    id: "13",
    nombre: "Pantalones",
    precio: 500,
    img: "../src/assets/Imagenes/pantalon4.webp",
    categoria: "pantalones",
    stock: 10,
  },
  {
    id: "14",
    nombre: "Pantalones",
    precio: 200,
    img: "../src/assets/Imagenes/pantalon3.jpg",
    categoria: "pantalones",
    stock: 10,
  },
  {
    id: "15",
    nombre: "Pantalones",
    precio: 180,
    img: "../src/assets/Imagenes/pantalon2.avif",
    categoria: "pantalones",
    stock: 10,
  },
  {
    id: "16",
    nombre: "Pantalones",
    precio: 900,
    img: "../src/assets/Imagenes/pantalones.webp",
    categoria: "pantalones",
    stock: 10,
  },
];

 export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(misProductos));
  }, 100);
};

// creamos una nueva funcion simiar a la anterior pero que nos retorne un solo item.

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCaterogia = misProductos.filter(
        (prod) => prod.categoria === idCategoria
      );
      resolve(productosCaterogia);
    }, 100);
  });
}; 
