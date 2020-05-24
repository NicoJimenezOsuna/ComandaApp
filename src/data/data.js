// FOR LOCAL DATA JSON

/*   ALLERGENS   */
export const allergens = [
    {
        id: 1,
        name: "Mostaza",
        imageUrl: "./assets/img/allergens/alergeno1.png"
    },
    {
        id: 2,
        name: "Altramúz",
        imageUrl: "./assets/img/allergens/alergeno2.png"
    },
    {
        id: 3,
        name: "Ápio",
        imageUrl: "./assets/img/allergens/alergeno3.png"
    },
    {
        id: 4,
        name: "Cacahuete",
        imageUrl: "./assets/img/allergens/alergeno4.png"
    },
    {
        id: 5,
        name: "Cereal",
        imageUrl: "./assets/img/allergens/alergeno5.png"
    },
    {
        id: 6,
        name: "Crustaceos",
        imageUrl: "./assets/img/allergens/alergeno6.png"
    },
    {
        id: 7,
        name: "Frutos Secos",
        imageUrl: "./assets/img/allergens/alergeno7.png"
    },
    {
        id: 8,
        name: "Huevos",
        imageUrl: "./assets/img/allergens/alergeno8.png"
    },
    {
        id: 9,
        name: "Lacteos",
        imageUrl: "./assets/img/allergens/alergeno9.png"
    },
    {
        id: 10,
        name: "Moluscos",
        imageUrl: "./assets/img/allergens/alergeno10.png"
    },
    {
        id: 11,
        name: "Pescado",
        imageUrl: "./assets/img/allergens/alergeno11.png"
    },
    {
        id: 12,
        name: "Sésamo",
        imageUrl: "./assets/img/allergens/alergeno12.png"
    },
    {
        id: 13,
        name: "Soja",
        imageUrl: "./assets/img/allergens/alergeno13.png"
    },
    {
        id: 14,
        name: "Sulfitos",
        imageUrl: "./assets/img/allergens/alergeno14.png"
    }
];

/*   CODIGO QR   */
export const codigoqrimg =
    {
        id: 1,
        name: "Restaurante 1",
        imageUrl: "./assets/img/qr_codigo.png"
    };

/* Fake data categorias */
export const fakeData1 = {
    data: {
        codigo: 0,
        mensaje: "OK",
        respuesta: [
            {
                orden: 1,
                categoria_id: 6,
                categoria: "Tapas",
                imagen: null
            },
            {
                orden: 2,
                categoria_id: 1,
                categoria: "Entrantes",
                imagen: null
            },
            {
                orden: 3,
                categoria_id: 5,
                categoria: "Ensaladas",
                imagen: null
            },
            {
                orden: 4,
                categoria_id: 2,
                categoria: "Entremeses",
                imagen: null
            },
            {
                orden: 5,
                categoria_id: 3,
                categoria: "Primeros Platos",
                imagen: null
            }
        ]
    }
}

export const fakeData2 = {
    data: {
        codigo: 0,
        mensaje: "OK",
        respuesta: [
            {
                orden: 1,
                plato_id: 4,
                nombreplato: "Ensalada de la casa",
                imagen: null,
                precio: "3.5000",
                observaciones: "Productos típicos valencianos"
            },
            {
                orden: 2,
                plato_id: 6,
                nombreplato: "Gazpacho Andaluz",
                imagen: null,
                precio: "4.5000",
                observaciones: "Pimiento rojo, pimiento verde, tomate, cebolla, tomate."
            }
        ]
    }
}
