document.addEventListener('DOMContentLoaded', () => {
    const destinos = [
        {
            nombre: "Cancún",
            imagen: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuY3VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            descripcion: "Arena blanca y aguas turquesas"
        },
        {
            nombre: "Puerto Vallarta",
            imagen: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVlcnRvJTIwdmFsbGFydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            descripcion: "Atardeceres inolvidables"
        },
        {
            nombre: "Los Cabos",
            imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwY2Fib3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            descripcion: "Donde el desierto encuentra el mar"
        }
    ];

    const grid = document.querySelector('.destinos-grid');
    
    destinos.forEach(destino => {
        grid.innerHTML += `
            <div class="destino-card" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                <img src="${destino.imagen}" alt="${destino.nombre}" style="width:100%; height:200px; object-fit: cover;">
                <div style="padding: 15px;">
                    <h3 style="margin-top: 0;">${destino.nombre}</h3>
                    <p>${destino.descripcion}</p>
                    <button style="background: #1E88E5; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;">Ver detalles</button>
                </div>
            </div>
        `;
    });
});