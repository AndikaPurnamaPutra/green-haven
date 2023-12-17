const assert = require('assert');

Feature('History Survey');

Before(({ I }) => {
   I.amOnPage('/src/html/survey.html');
});

Scenario('History Survey Not Available', ({ I }) => {
   I.click('Riwayat');
   const notAvailableMessage = 'Maaf riwayat rekomendasi tanaman belum tersedia, silahkan lakukan survey terlebih dahulu';
   I.see(notAvailableMessage);
});

Scenario('History Survey Available', async ({ I }) => {
   I.see('Survei Preferensi Tanaman', 'h1');
   I.click('Cari Tipe Tanam');

   I.waitForElement('.card-body', 5)
   const firstPlantTitleSurveyResult = await I.grabTextFrom(locate('.card-title').first());

   I.click('Riwayat');
   I.waitForElement('.card-body', 5)
   const firstPlantTitleHistorySurvey = await I.grabTextFrom(locate('.card-title').first());

   assert.strictEqual(firstPlantTitleSurveyResult, firstPlantTitleHistorySurvey);
});