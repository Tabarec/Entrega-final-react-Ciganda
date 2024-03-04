export let products = [
    {
        id: 1,
        title: "Xiaomi Redmi Note 10",
        price: 12000,
        description: "Pantalla AMOLED de 6.43″, su procesador Qualcomm Snapdragon 678, una gran batería de 5000mAh, cámara selfie de 13MP y cámara cuádruple de 48MP",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709075938/D_NQ_NP_958122-MLA46168604018_052021-O_wb441p.webp",
        stock: 20,
        category: "celulares",
      },
      {
        id: 2,
        title: "Samsung Galaxy A24",
        price: 11900,
        stock: 7,
        description: "El Samsung Galaxy A24 es un smartphone con una pantalla Super AMOLED de 6.5 pulgadas a resolución FHD+ y tasa de refresco de 90Hz, y potenciado por un procesador Helio G99 de MediaTek con 6GB o 8GB de memoria RAM y 128GB de almacenamiento interno expandible",
        category: "celulares",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709079392/samsung-galaxy-a24-4-128gb-silver-foto1_yobaxs.webp",
      },
      {
        id: 3,
        title: "Xiaomi Redmi a2",
        price: 4400,
        stock: 16,
        description:
          "Cuenta con un procesador Mediatek Helio G36, 2GB de memoria RAM y 64GB de almacenamiento interno que le permite ejecutar Android 13 Go sin problemas. Se encuentra respaldado por una gran batería Li-Po de 5000mAh de capacidad y además viene con un cargador micro USB de 10W que brinda una carga super rápida",
        category: "celulares",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709082530/XRA264GBK-1-550x550_gp4jjo.jpg",
      },
      {
        id: 4,
        title: "Portátil de Oficina Samsung 2022",
        price: 7930,
        stock: 10,
        description: "Esta laptop cuenta con una Resolución Full HD y una pantalla de 14 pulgadas",
        category: "laptops",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709140112/51Afm88Bq0L._AC_UF894_1000_QL80__n2ge7o.jpg",
      },
      {
        id: 5,
        title: "Portátil Dell Latitude 12 7000",
        price: 6300,
        description: "Esta laptop tiene un procesador Intel Core i5 y una pantalla de 12.5 pulgadas",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709140694/41iAhuToAZL._AC__ye0ztb.jpg",
        stock: 4,
        category: "laptops",
      },
      {
        id: 6,
        title: "Auriculares Logitech G332",
        price: 2120,
        stock: 11,
        description: "Los audífonos Logitech G332 para juegos producen un gran sonido que permite sumergirse en el juego. Vive la intensidad de una experiencia de juego completa donde lo oyes todo y te oyen todos",
        category: "auriculares",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709161124/auriculares-logitech-g332-aud316-001_vupvvp.jpg",
      },
    ];
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 500);
        } else {
          reject("No hay productos");
        }
      });
    };
    
    export const getProduct = (id) => {
      return new Promise((resolve, reject) => {
        if (products.length > 0) {
          const item = products.find((product) => product.id === id);
    
          setTimeout(() => {
            if (item) {
              resolve(item);
            } else {
              reject(`No se encuentra el producto con el id ${id}`);
            }
          }, 500);
        } else {
          reject("No hay productos");
        }
      });
    };
