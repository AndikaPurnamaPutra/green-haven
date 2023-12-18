const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

function getRandomIndexes(totalIndexes, n) {
  const indexes = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * totalIndexes);
    } while (indexes.includes(randomIndex));
    indexes.push(randomIndex);
  }
  return indexes;
}

// Fetch detail artikel
fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}`)
  .then((response) => response.json())
  .then((responseData) => {
    if (responseData.status === 'success') {
      const articleDetail = responseData.data.article;

      const articleDetailElement = document.getElementById('detail-article');
      const articleRecomElement = document.getElementById('article-recom');

      const detailHTML = `
        <h1 class="article-title">${articleDetail.title}</h1>
        <div class="img-article">
          <img src="${articleDetail.image}" width="100px" alt="artikel 1" />
          <div class="data-article">
            <p class="tanggal">${new Date(articleDetail.date).toLocaleDateString()}</p>
            <p class="penulis">${articleDetail.author}</p>
          </div>
        </div>
        
        <div class="article-content">
          <p>
            ${articleDetail.content}
          </p>
        </div>
      `;
      articleDetailElement.innerHTML = detailHTML;

      // fetch recom article
      fetch('https://api-article.abdulfaqih.eu.org/articles')
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            const articles = data.data.article;
            // eslint-disable-next-line no-underscore-dangle
            const relatedArticles = articles.filter((article) => article._id !== articleDetail._id);
            const randomIndexes = getRandomIndexes(relatedArticles.length, 3);

            const recommendations = randomIndexes.map((index) => relatedArticles[index]);

            recommendations.forEach((article) => {
              const cardHTML = `
                <div class="card">
                  <img src="${article.image}" class="card-img-top" alt="${article.title}" />
                  <div class="card-body">
                    <h4 class="card-title"><a href="detail-article.html?id=${article.id}">${article.title.slice(0, 60)} ... </a></h4>
                    <div class="detail-card d-flex justify-content-between align-items-center">
                      <a href="#" class="btn btn-outline-ghaven">${article.tag}</a>
                      <p class="m-0">${new Date(article.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              `;
              articleRecomElement.innerHTML += cardHTML;
            });
          } else {
            console.error('API request failed with message:', data.message);
          }
        })
        .catch((error) => console.error('Error fetching data from API:', error));
    } else {
      console.error('API request failed with message:', responseData.message);
    }
  })
  .catch((error) => console.error('Error fetching detail data from API:', error));
