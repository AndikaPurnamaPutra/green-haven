const surveyHistoryData = JSON.parse(localStorage.getItem('surveyHistory')) || {};
const plantsData = surveyHistoryData.data?.plants || [];

const historyContainer = document.getElementById('history-survey');
const surveyHeader = document.getElementById('survey-header');

if (plantsData.length > 0) {
  plantsData.forEach((plant) => {
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
    historyContainer.innerHTML += cardHTML;
  });
} else {
  surveyHeader.innerHTML = '<h2>Maaf riwayat rekomendasi tanaman belum tersedia, silahkan lakukan survey terlebih dahulu</h2>';
}
