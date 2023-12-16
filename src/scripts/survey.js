// eslint-disable-next-line no-unused-vars
function submitSurvey(event) {
  event.preventDefault();

  const place = document.getElementById('place').value || '';
  const sunlight = document.getElementById('sunlight').value || '';
  const watering = document.getElementById('watering').value || '';
  const management = document.getElementById('management').value || '';

  const url = `survey-result.html?place=${encodeURIComponent(place)
  }&sunlight=${encodeURIComponent(sunlight)
  }&watering=${encodeURIComponent(watering)
  }&management=${encodeURIComponent(management)}`;

  window.location.href = url;
}
