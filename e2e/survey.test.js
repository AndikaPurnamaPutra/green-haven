Feature('Survey');

Before(({ I }) => {
   I.amOnPage('/src/html/survey.html');
 });

 Scenario('Showing form', ({ I }) => {
   I.see('Survei Preferensi Tanaman', 'h1');
 });