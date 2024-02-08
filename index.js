console.log("Etch-A-Sketch");

const container = document.getElementById('container');

// Función para crear la cuadrícula
function createGrid(width) {
    // Eliminar elementos existentes dentro del contenedor
    container.innerHTML = '';

    // Crear las filas y columnas de la cuadrícula
    for (let i = 0; i < width; i++) {
        const row = document.createElement('div');
        row.classList.add('row-container');
        for (let j = 0; j < width; j++) {
            const column = document.createElement('div');
            column.classList.add('column-container');
            column.addEventListener('mouseenter', () => {
                column.style.backgroundColor = getRandomColor();
            });
            column.addEventListener('mouseleave', () => {
                column.style.backgroundColor = '';
            });
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    // Calcular y ajustar el ancho del contenedor
    const containerWidth = container.offsetWidth; // Ancho del contenedor
    const columnWidth = containerWidth / width; // Ancho de cada columna
    container.style.width = containerWidth + 'px'; // Establecer el ancho del contenedor
    document.querySelectorAll('.column-container').forEach(column => {
        column.style.width = columnWidth + 'px'; // Establecer el ancho de cada columna
        column.style.height = columnWidth + 'px'; // Establecer la altura de cada columna
    });
}

const getRandomColor = ()=>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Manejar el clic en el botón
document.getElementById('btn').addEventListener('click', () => {
    let width = prompt("Por favor, ingresa el ancho deseado para la cuadrícula:");
    width = parseInt(width); 
    if (!isNaN(width) && width > 0 && width <= 100) {
        createGrid(width);
    } else {
        alert("Por favor, ingresa un número válido entre 0 y 100.");
    }
});