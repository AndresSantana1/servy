/* const url ="http://localhost:4000/servicios"; */


/* export const insertCards = async ()=>{
    try {
        const resultado = await fetch(url);
        const servicio = await resultado.json();
        return servicio;
    } catch (error) {
        console.log(error);
    }
} */
export const insertCards = async ()=>{
    const servicio = {
        "servicios": [
            {
                "id": 1,
                "imagen": "electrisita.jpg",
                "empleado": "Electicista",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 2,
                "imagen": "mecanico.jpg",
                "empleado": "Mecanicos",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 3,
                "imagen": "tecn_Lavadoras.jpg",
                "empleado": "Tecn.Lavadoras",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 4,
                "imagen": "tecn_neveras.jpg",
                "empleado": "Tecn.Neveras",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 5,
                "imagen": "plomero.jpg",
                "empleado": "Plomero",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 6,
                "imagen": "tecn_TV.jpg",
                "empleado": "Tecn.Tv",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 7,
                "imagen": "pintores.jpg",
                "empleado": "Pintores",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 8,
                "imagen": "albañiles.jpg",
                "empleado": "Albañiles",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 9,
                "imagen": "modista.jpg",
                "empleado": "Modistas",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 10,
                "imagen": "enfermeras.jpg",
                "empleado": "Enfermeras",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 11,
                "imagen": "niñeras.jpg",
                "empleado": "Niñeras",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 12,
                "imagen": "cerrajeros.jpg",
                "empleado": "Cerrajeros",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 13,
                "imagen": "tecn_Celulares.jpg",
                "empleado": "Tecn.Celulares",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 14,
                "imagen": "limpieza_de_Muebles.jpg",
                "empleado": "Limpieza de Muebles",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 15,
                "imagen": "paseadores.jpg",
                "empleado": "Paseadores",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 16,
                "imagen": "alquiler_de_Vehiculos.jpg",
                "empleado": "Alquiler Vehiculos",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 17,
                "imagen": "servicios_domesticos.jpg",
                "empleado": "Servicios Domesticos",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                "id": 18,
                "imagen": "tecn_Computadores.jpg",
                "empleado": "Tec.Computadores",
                "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        ]
    }
    return servicio;
}