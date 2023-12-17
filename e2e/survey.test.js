const assert = require('assert');

Feature('Survey');

Before(({ I }) => {
  I.amOnPage('/src/html/survey.html');
});

Scenario('Link to detail plant', async ({ I }) => {
  I.see('Survei Preferensi Tanaman', 'h1');
  I.click('Cari Tipe Tanam');

  I.waitForElement('.card-body', 5)
  const firstPlantTitle = await I.grabTextFrom('.card-title');
  I.click(locate('.card-body').first());

  I.waitForText(firstPlantTitle, 5)
  const firstPlantTitleDEtail = await I.grabTextFrom('#common-name');

  assert.strictEqual(firstPlantTitle, firstPlantTitleDEtail);
});

Scenario('Choosing Outdoor', ({ I }) => {
  I.see('Survei Preferensi Tanaman', 'h1');
  const place = 'Outdoor';
  I.selectOption('place', place);
  I.click('Cari Tipe Tanam');

  I.waitForElement('.card-body', 5)
  I.click(locate('.card-body').first())

  I.waitForText(`Tempat: ${place}`, 5)
});

Scenario('Choosing sunlight level', ({ I }) => {
  I.see('Survei Preferensi Tanaman', 'h1');
  const sunlight = 'Teduh';
  I.selectOption('sunlight', sunlight);
  I.click('Cari Tipe Tanam');

  I.waitForElement('.card-body', 5)
  I.click(locate('.card-body').first())

  I.waitForText(`Sinar Matahari: ${sunlight}`, 5)
});

Scenario('Choosing watering level', ({ I }) => {
  I.see('Survei Preferensi Tanaman', 'h1');
  const watering = 'Sedang';
  I.selectOption('watering', watering);
  I.click('Cari Tipe Tanam');

  I.waitForElement('.card-body', 5)
  I.click(locate('.card-body').first())

  I.waitForText(`Penyiraman: ${watering}`, 5)
});

Scenario('Choosing management type', ({ I }) => {
  I.see('Survei Preferensi Tanaman', 'h1');
  const management = 'Aquaponik';
  I.selectOption('management', management);
  I.click('Cari Tipe Tanam');

  I.waitForElement('.card-body', 5)
  I.click(locate('.card-body').first())

  I.waitForText(`Tata Kelola: ${management}`, 5)
});

Scenario('Fill in all form fields', ({ I }) => {
  I.see('Survei Preferensi Tanaman', 'h1');

  const place = 'Outdoor';
  I.selectOption('place', place);

  I.fillField('luas', '3');

  const sunlight = 'Teduh';
  I.selectOption('sunlight', sunlight);

  const watering = 'Sedang';
  I.selectOption('watering', watering);

  const management = 'Aquaponik';
  I.selectOption('management', management);

  I.click('Cari Tipe Tanam');

  I.waitForElement('.card-body', 5)
  I.click(locate('.card-body').first())

  I.waitForText(`Tempat: ${place}`, 5)
  I.waitForText(`Sinar Matahari: ${sunlight}`, 5)
  I.waitForText(`Penyiraman: ${watering}`, 5)
  I.waitForText(`Tata Kelola: ${management}`, 5)
});