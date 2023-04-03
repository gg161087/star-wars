const container = document.getElementById('container');

fetch('https://swapi.dev/api/people')
.then(res => res.json())
    .then(data => { 
        console.log(data);               
        for (const iterator of data.results) {           
            container.innerHTML += `
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">Star Wards - Personajes</div>
                    <div class="card-body">
                    <h5 class="card-title">${iterator.name}</h5>
                    <p class="card-text">Color de Ojos: ${iterator.eye_color}</p>
                    <p class="card-text">Año de nacimiento: ${iterator.birth_year}</p>
                    <p class="card-text">Genero: ${iterator.gender}</p>
                    <p class="card-text">Color de Pelo: ${iterator.hair_color}</p>
                    <p class="card-text">Estatura: ${iterator.height}</p>
                    <p class="card-text">Color de Piel: ${iterator.skin_color}</p>
                    </div>
                </div>
            `
        }                    
    })