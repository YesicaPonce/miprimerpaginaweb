// ==========================================
// 1. SELECCIÓN DE ELEMENTOS (CAPTURA DEL DOM)
// ==========================================
const areaInteractiva = document.querySelector('#dropdownArea');
const menuOculto = document.querySelector('#menuGeneros');
const botonIntroduccion = document.querySelector('#btnIntroduccion'); // Nuevo botón

// ==========================================
// 2. FUNCIONES (ACCIONES)
// ==========================================
function mostrarMenu() {
    menuOculto.classList.add('mostrar');
}

function ocultarMenu() {
    menuOculto.classList.remove('mostrar');
}

// Nueva función para el botón de introducción
function darBienvenida() {
    alert("✨ ¡Bienvenido a El Rincón de los Sueños! ✨\n\nEsta biblioteca interactiva ha sido diseñada para explorar mundos literarios mágicos. Desplaza el cursor sobre el botón 'Géneros' para descubrir nuestros catálogos.");
}

// ==========================================
// 3. ESCUCHADORES DE EVENTOS
// ==========================================
// Eventos del Menú Desplegable (Pasar el mouse)
areaInteractiva.addEventListener('mouseover', mostrarMenu);
areaInteractiva.addEventListener('mouseout', ocultarMenu);

// Evento del Botón Introducción (Hacer click)
botonIntroduccion.addEventListener('click', darBienvenida);
