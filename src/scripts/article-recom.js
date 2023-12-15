fetch('https://api-article.abdulfaqih.eu.org/articles')
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      //   console.log(data);
      const articles = data.data.article;
      console.log(articles);

      const articleListContainer = document.getElementById('article-recom');

      articles.slice(0, 3).forEach((article) => {
        const cardHTML = `
        <div  class="card">
        <img src="${article.image}" class="card-img-top" alt="${article.title}" />

        <div class="card-body">
          <h4 class="card-title"><a href="detail-article.html?id=${article.id}">${article.title.slice(0, 60)} ... </a></h4>
          <div class="detail-card d-flex justify-content-between align-items-center">
            <a href="#" class="btn btn-outline-ghaven">${article.tag}</a>
            <p class="m-0">${new Date(article.date).toLocaleDateString()}</p>
          </div>
          </div>
          `;
        articleListContainer.innerHTML += cardHTML;
      });
    } else {
      console.error('API request failed with message:', data.message);
    }
  })
  .catch((error) => console.error('Error fetching data from API:', error));
