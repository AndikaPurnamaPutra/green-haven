fetch('https://apiplant.abdulfaqih.eu.org/plant')
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      const { plants } = data.data;
      const plantListContainer = document.getElementById('gallery-plant');

      plants.forEach((plant) => {
        const cardHTML = `
      <a href="./detail-plant.html?id=${plant.id}">
        <div class="card border border-0">
          <img src="${plant.image.small_url}" class="card-img-top" alt="${plant.common_name}">
          <div class="card-body m-1 mb-4">
            <h5 class="card-title">${plant.common_name}</h5>
            <p class="card-text">${plant.scientific_name}</p>
          </div>
        </div>
      </a>`;
        plantListContainer.innerHTML += cardHTML;
      });
    } else {
      console.error('API request failed with message:', data.message);
    }
  })
  .catch((error) => console.error('Error fetching data from API:', error));
