/* import { insertCards } from "./apiConnection/api.js";


(function(){
    document.addEventListener('DOMContentLoaded' , obtenerCards)

    async function obtenerCards() {
        const servicio = await insertCards();
        console.log(servicio);
        servicio.forEach(Cards => {
            const {id ,imagen , empleado , descripcion} = Cards
            
            const cuerpo = document.querySelector('#cardsSer')
            const row = document.createElement('p')
            row.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./images/${imagen}" class="card-img-top" alt="...kf">
                <h5 class="card-title">${empleado}</h5>
                <div class="card-body">
                    <p class="card-text">${descripcion}</p>
                    <a href="#" class="btn btn-success">BUSCAR</a>
                </div>
            </div>    
            `
            cuerpo.appendChild(row)
        });
    }
})() */
const servicio = [
    {
        "id": 1,
        "imagen": "electrisita.jpg",
        "empleado": "Electicista",
        "descripcion": "Expertos en solucionar problemas eléctricos y asegurar un suministro de energía confiable y seguro para tu hogar o negocio."
    },
    {
        "id": 2,
        "imagen": "mecanico.jpg",
        "empleado": "Mecanicos",
        "descripcion": "Profesionales capacitados en reparar y mantener vehículos, asegurando un rendimiento óptimo y prolongando la vida útil de tu automóvil."
    },
    {
        "id": 3,
        "imagen": "tecn_Lavadoras.jpg",
        "empleado": "Tecn. Lavadoras",
        "descripcion": "Especialistas en reparar y mantener lavadoras, garantizando un funcionamiento eficiente para cuidar tus prendas y ahorrar tiempo y dinero en lavandería."
    },
    {
        "id": 4,
        "imagen": "tecn_neveras.jpg",
        "empleado": "Tecn. Neveras",
        "descripcion": "Expertos en solucionar problemas de refrigeración, asegurando que tu nevera funcione correctamente y tus alimentos se mantengan frescos por más tiempo."
    },
    {
        "id": 5,
        "imagen": "plomero.jpg",
        "empleado": "Plomero",
        "descripcion": "Profesionales en instalaciones y reparaciones de sistemas de fontanería, asegurando un suministro adecuado de agua y el correcto drenaje en tu hogar."
    },
    {
        "id": 6,
        "imagen": "tecn_TV.jpg",
        "empleado": "Tecn. Tv",
        "descripcion": "Especialistas en reparar televisores, brindando un servicio rápido y confiable para que puedas disfrutar de tus programas y películas favoritas sin interrupciones."
    },
    {
        "id": 7,
        "imagen": "pintores.jpg",
        "empleado": "Pintores",
        "descripcion": "Artistas de la transformación, expertos en dar vida a tus espacios con colores y acabados que reflejen tu estilo y personalidad."
    },
    {
        "id": 8,
        "imagen": "albañiles.jpg",
        "empleado": "Albañiles",
        "descripcion": "Constructores hábiles en la creación y reparación de estructuras, asegurando la solidez y funcionalidad de tus proyectos de construcción."
    },
    {
        "id": 9,
        "imagen": "modista.jpg",
        "empleado": "Modistas",
        "descripcion": "Diseñadores y creadores de prendas únicas y a medida, capaces de materializar tus ideas y resaltar tu estilo personal."
    },
    {
        "id": 10,
        "imagen": "enfermeras.jpg",
        "empleado": "Enfermeras",
        "descripcion": "Profesionales de la salud comprometidas en brindar cuidados y atención médica de calidad, ayudando a mejorar la salud y el bienestar de las personas."
    },
    {
        "id": 11,
        "imagen": "niñeras.jpg",
        "empleado": "Niñeras",
        "descripcion": "Cuidadoras dedicadas y confiables, que brindan un ambiente seguro y afectuoso para el cuidado de tus hijos, proporcionándote tranquilidad y confianza."
    },
    {
        "id": 12,
        "imagen": "cerrajeros.jpg",
        "empleado": "Cerrajeros",
        "descripcion": "Expertos en solucionar problemas de cerraduras y sistemas de seguridad, garantizando la protección y privacidad de tus propiedades."
    },
    {
        "id": 13,
        "imagen": "tecn_Celulares.jpg",
        "empleado": "Tecn. Celulares",
        "descripcion": " Especialistas en reparar y mantener dispositivos móviles, asegurando su correcto funcionamiento y solucionando cualquier problema técnico."
    },
    {
        "id": 14,
        "imagen": "limpieza_de_Muebles.jpg",
        "empleado": "Limpieza de Muebles",
        "descripcion": "Profesionales en la limpieza profunda y restauración de tus muebles, devolviéndoles su aspecto original y prolongando su vida útil."
    },
    {
        "id": 15,
        "imagen": "paseadores.jpg",
        "empleado": "Paseadores",
        "descripcion": "Amantes de los animales que se encargan de brindar paseos divertidos y estimulantes para tus mascotas, asegurando su bienestar físico y emocional."
    },
    {
        "id": 16,
        "imagen": "alquiler_de_Vehiculos.jpg",
        "empleado": "Alquiler Vehiculos",
        "descripcion": "Ofrecen la oportunidad de disfrutar de la libertad de movilidad alquilando vehículos para tus necesidades de transporte, tanto para viajes como para eventos especiales."
    },
    {
        "id": 17,
        "imagen": "servicios_domesticos.jpg",
        "empleado": "Servicios Domesticos",
        "descripcion": "Personal confiable y capacitado para realizar tareas del hogar, como limpieza, cocina, lavandería, planchado, brindando comodidad y tiempo libre para ti."
    },
    {
        "id": 18,
        "imagen": "tecn_Computadores.jpg",
        "empleado": "Tecn. Computadores",
        "descripcion": "Especialistas en resolver problemas técnicos de computadoras, asegurando un funcionamiento eficiente y resolviendo cualquier incidencia que pueda surgir."
    }
]

servicio.forEach(function(Cards){
    const {id ,imagen , empleado , descripcion} = Cards
    const cuerpo = document.querySelector('#cardsSer')
    //const row = document.createElement('p')
    const fragmento = document.createDocumentFragment();
    const row = document.createElement('div');
    row.classList.add('card');
    row.classList.add('tarjetas');
    row.style.width = '18rem';
    row.innerHTML = `
        <img src="./images/${imagen}" class="card-img-top arregloImagen" alt="...kf">
        <h5 class="card-title letraTarjeta">${empleado}</h5>
        <div class="card-body">
            <p class="card-text letraTarjeta1">${descripcion}</p>
            <a href="#" class="btn btn-success letraTarjeta1">BUSCAR</a>
        </div> 
    `
    fragmento.appendChild(row);
    cuerpo.appendChild(fragmento)
});