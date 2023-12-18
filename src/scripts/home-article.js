fetch('https://api-article.abdulfaqih.eu.org/articles')
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      const articles = data.data.article;
      const articleListContainer = document.getElementById('article-list');

      // Menghapus konten yang sudah ada di dalam kontainer
      articleListContainer.innerHTML = '';

      articles.slice(0, 3).forEach((article, index) => {
        const isActiveClass = index === 0 ? 'active' : '';

        const cardHTML = `
          <div class="carousel-item ${isActiveClass}">
            <img src="${article.image}" class="d-block mx-auto img-fluid" alt="${article.title}" />
            <div class="carousel-caption d-none d-md-block">
              <a href="/src/html/article.html"><h2>${article.title}</h2></a>
              <p>${article.content.slice(0, 100)} ...</p>
            </div>
          </div>
        `;

        articleListContainer.innerHTML += cardHTML;
      });
    } else {
      console.error('Permintaan API gagal dengan pesan:', data.message);
    }
  })
  .catch((error) => console.error('Kesalahan mengambil data dari API:', error));
