fetch('https://api-article.abdulfaqih.eu.org/articles')
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      console.log(data);
      const articles = data.data.article;
      console.log(articles);

      const articleListContainer = document.getElementById('article-list');

      articles.forEach((article) => {
        const cardHTML = `
        <div class="card border border-0">
            <img src="${article.image}" class="card-img-top" />
            <div class="card-body mx-2 my-3">
                <div class="card-info d-flex justify-content-between align-items-center mb-2">
                    <h4>
                    <span class="badge">${article.tag}</span>
                    </h4>
                    <h5>${new Date(article.date).toLocaleDateString()}</h5>
                </div>
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text overflow-hidden">${article.content.slice(0, 200)} ...</p>
                <a href="./detail-article.html?id=${article.id}" class="d-flex align-items-center justify-content-end">
            Baca selanjutnya
                </a>
            </div>
        </div>`;
        articleListContainer.innerHTML += cardHTML;
      });
    } else {
      console.error('API request failed with message:', data.message);
    }
  })
  .catch((error) => console.error('Error fetching data from API:', error));
