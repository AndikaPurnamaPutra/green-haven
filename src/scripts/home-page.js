fetch('https://apiplant.abdulfaqih.eu.org/plant')
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      const plants = data.data.plants;
      const plantListContainer = document.getElementById("plant-list");
      let aosDelay = 300; 

      plants.slice(0, 3).forEach(plant => {
        const cardHTML = `
          <div class="card m-0" data-aos="fade-up" data-aos-delay="${aosDelay}">
            <img src="${plant.image.small_url}" class="card-img-top" alt="${plant.common_name}" />
            <div class="card-body">
              <h5 class="card-title">${plant.common_name}</h5>
              <p class="card-text">${plant.scientific_name}</p>
            </div>
          </div>`;
        plantListContainer.innerHTML += cardHTML;

        aosDelay += 300; 
      });
    } else {
      console.error("API request failed with message:", data.message);
    }
  })
  .catch(error => console.error("Error fetching data from API:", error));
