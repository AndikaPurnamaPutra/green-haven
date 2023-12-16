fetch('https://api-article.abdulfaqih.eu.org/articles')
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      const articles = data.data.article;
      const articleListContainer = document.getElementById('article-list');

      articles.slice(0, 3).forEach((article) => {
        const cardHTML = ` 
        <div class="carousel-item active">
        <img src="${article.image}" class="d-block mx-auto img-fluid" alt="${article.title}" />
        <div class="carousel-caption d-none d-md-block">
          <h2>${article.title}</h2>
          <p>${article.content.slice(0, 100)} ...</p>
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
