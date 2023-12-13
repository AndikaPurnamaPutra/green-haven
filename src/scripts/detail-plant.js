const urlParams = new URLSearchParams(window.location.search);
const plantId = urlParams.get('id');

fetch(`https://apiplant.abdulfaqih.eu.org/plant/${plantId}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      const plantDetail = data.data.plant;

      const commonName = plantDetail.common_name;
      const scientificName = plantDetail.scientific_name;
      const imageURL = plantDetail.image.regular_url;

      const { place } = plantDetail;
      const sunlight = plantDetail.sunlight.join(', ');
      const { watering } = plantDetail;
      const { growth } = plantDetail;
      const careLevel = plantDetail.care_level;
      const { management } = plantDetail;

      const { description } = plantDetail;
      const { manage_type } = plantDetail;

      document.getElementById('common-name').innerText = commonName;
      document.getElementById('scientific-name').innerText = scientificName;
      document.getElementById('plant-image').src = imageURL;

      document.getElementById('place-info').innerText = `Tempat: ${place}`;
      document.getElementById('sunlight-info').innerText = `Sinar Matahari: ${sunlight}`;
      document.getElementById('watering-info').innerText = `Penyiraman: ${watering}`;
      document.getElementById('growth-info').innerText = `Pertumbuhan: ${growth}`;
      document.getElementById('care-level-info').innerText = `Perawatan: ${careLevel}`;
      document.getElementById('management-info').innerText = `Tata Kelola: ${management}`;

      document.getElementById('plant-desc').innerHTML = description;
      document.getElementById('plant-manage-type').innerHTML = manage_type;
    } else {
      console.error('API request failed with message:', data.message);
    }
  })
  .catch((error) => console.error('Error fetching data from API:', error));
