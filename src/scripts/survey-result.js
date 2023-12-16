/* eslint-disable no-useless-escape */
function getParameterByName(inputName, inputUrl) {
  let name = inputName;
  let url = inputUrl;

  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '$&');

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ''));
}

const placeFilter = getParameterByName('place');
const sunlightFilter = getParameterByName('sunlight');
const wateringFilter = getParameterByName('watering');
const managementFilter = getParameterByName('management');

let apiUrl = `https://apiplant.abdulfaqih.eu.org/plant?place=${encodeURIComponent(placeFilter)}`;

if (sunlightFilter !== 'Tidak Pasti') {
  apiUrl += `&sunlight=${encodeURIComponent(sunlightFilter)}`;
}

if (wateringFilter !== 'Belum Tahu') {
  apiUrl += `&watering=${encodeURIComponent(wateringFilter)}`;
}

if (managementFilter !== 'Belum Terpikirkan') {
  apiUrl += `&management=${encodeURIComponent(managementFilter)}`;
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const plantListContainer = document.getElementById('survey-result');
    const surveyHeader = document.getElementById('survey-header');
    const surveyDesc = document.getElementById('survey-desc');

    if (data.status === 'success') {
      const { plants } = data.data;

      if (plants.length > 0) {
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
            </a>
          `;
          plantListContainer.innerHTML += cardHTML;
        });
      } else {
        surveyHeader.innerHTML = '<h2>Tidak ada rekomendasi tanaman.</h2>';
        surveyDesc.innerHTML = '<p>Maaf, berdasarkan preferensi Anda belum terdapat di database kami.</p>';
      }
    } else {
      console.error('API request failed with message:', data.message);
    }
  })
  .catch((error) => console.error('Error fetching data from API:', error));
