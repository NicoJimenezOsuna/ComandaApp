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

/*  DATOS DEL LOCAL*/
export const globalinfo = {
    id: 1,
    name: "Restaurante 1",
    localizacionmaps: "https://goo.gl/maps/fNd5q1Rd3JQDq8ND8",
    telefono: "969999999",
    mail: "mail@mail.es"
}

/* Fake data categorias */
export const fakeData1 = {

    data: {
        codigo: 0,
        mensaje: "OK",
        nombre_restaurante: "DEMO RESTAURANTE",
        localizacion: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12326.307977168894!2d-0.48730538022460934!3d39.4336889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1590937333201!5m2!1ses!2ses\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        telefono: "656324206",
        email: "fjtarrega@gmail.com",
        logo: "rest0/menu03p.png",
        codigoqr: "rest0/frame.png",
        respuesta: [
            {
                id: 1,
                nombrecarta: "Carta 1"
            },
            {
                id: 2,
                nombrecarta: "Menú Infantil"
            },
            {
                id: 3,
                nombrecarta: "Menú Diario"
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
                plato_id: 0,
                nombreplato: "Ensalada de la casa",
                imagen: null,
                precio: "3.5000",
                observaciones: "Productos típicos valencianos"
            },
            {
                orden: 2,
                plato_id: 1,
                nombreplato: "Gazpacho Andaluz",
                imagen: null,
                precio: "4.5000",
                observaciones: "Pimiento rojo, pimiento verde, tomate, cebolla, tomate."
            },
            {
                orden: 3,
                plato_id: 2,
                nombreplato: "Arroz con alubias",
                imagen: null,
                precio: "14.5000",
                observaciones: "Pimiento rojo, pimiento verde, tomate, cebolla, tomate."
            },
            {
                orden: 4,
                plato_id: 3,
                nombreplato: "Lechón con patatas",
                imagen: null,
                precio: "24.5000",
                observaciones: "Pimiento rojo, pimiento verde, tomate, cebolla, tomate."
            },
            {
                orden: 5,
                plato_id: 4,
                nombreplato: "Fideuá",
                imagen: null,
                precio: "12.0000",
                observaciones: "Pimiento rojo, pimiento verde, tomate, cebolla, tomate."
            },
        ]
    }
}